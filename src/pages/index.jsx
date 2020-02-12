import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'

const PostLink = ({ post }) => (
  <li>
    <Link to={post.frontmatter.path}>
      ({post.frontmatter.date}) {post.frontmatter.title}
    </Link>
  </li>
)

PostLink.propTypes = {
  post: PropTypes.node.isRequired,
}

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
      <ul>{Posts}</ul>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
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
