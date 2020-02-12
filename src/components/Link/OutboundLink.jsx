import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'
import { Text } from '@components/Text'

const OutboundLink = ({ to, from, target, children, className }) => (
  <a
    href={to}
    target={target}
    className={className}
    css={{ textDecoration: 'none' }}
    rel="noopener"
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Outbound Link',
        action: `[clicked] ${from}`,
        label: to,
      })
    }}
  >
    <Text color="grey.900">{children}</Text>
  </a>
)

OutboundLink.propTypes = {
  to: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

OutboundLink.defaultProps = {
  target: ``,
  className: ``,
}

export default OutboundLink
