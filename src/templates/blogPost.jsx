import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'

const BlogPostTemplate = function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO />
      <div className="blog-post-container">
        <div className="blog-post">
          <Text color="grey.700">{frontmatter.date}</Text>
          <h1>{frontmatter.title}</h1>
          <div
            className="blog-post-content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.node.isRequired,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
