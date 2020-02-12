import React from 'react'
import { OutboundLink } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Box } from '@components/Grid'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    Hi my name is Johannes Klumpe.
    <Box my={3}>
      <ul>
        <li>
          <OutboundLink to="https://github.com/kjhnns">Github</OutboundLink>
        </li>
        <li>
          <OutboundLink to="https://twitter.com/kjhnns">Twitter</OutboundLink>
        </li>
        <li>
          <OutboundLink to="https://linkedin.com/in/klumpe/">
            LinkedIn
          </OutboundLink>
        </li>
      </ul>
    </Box>
  </Layout>
)

export default AboutPage
