import React from 'react'

import { graphql } from 'gatsby'
import { Layout } from '@components/Layout'

import { SEO } from '@components/SEO'
import { Text } from '@components/Text'

import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <li>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </li>
)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <Layout>
      <SEO />
      <Text as="h2" mb={3}>
        <h1>Blog Posts</h1>
        <ul>{Posts}</ul>
      </Text>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
