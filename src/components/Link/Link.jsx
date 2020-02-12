import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Text } from '@components/Text'

const Link = ({ to, children, className }) => (
  <GatsbyLink to={to} className={className} css={{ textDecoration: 'none' }}>
    <Text color="grey.900">{children}</Text>
  </GatsbyLink>
)

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Link.defaultProps = {
  className: ``,
}

export default Link
