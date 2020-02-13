import React from 'react'
import { OutboundLink } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Box } from '@components/Grid'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Box my={3}>
      <h1>About</h1>
      <p>Hi my name is Johannes Klumpe.</p>
    </Box>
    <Box my={3}>
      <h2>Projects</h2>
      <ul>
        <li>
          <OutboundLink to="http://junto-app.com/">
            junto – social habit tracking
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to="https://sourceforge.net/projects/mymates/">
            myMates - private social network (archived)
          </OutboundLink>
        </li>
      </ul>
    </Box>
    <Box my={3}>
      <h2>Other places</h2>
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
