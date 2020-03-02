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
          <OutboundLink to="https://www.meetup.com/de-DE/Grunderfruhstuck-Rhein-Main/">
            Founder&apos;s Breakfast Rhein-Main
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to="http://junto-app.com/">
            junto – Social Habit Tracking
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to="https://sourceforge.net/projects/mymates/">
            myMates – Private Social Network (archived)
          </OutboundLink>
        </li>
      </ul>
    </Box>
    <Box my={3}>
      <h2>Other places</h2>
      <ul>
        <li>
          <OutboundLink to="https://t.me/kjhnns">Telegram</OutboundLink>
        </li>
        <li>
          <OutboundLink to="https://twitter.com/kjhnns">Twitter</OutboundLink>
        </li>
        <li>
          <OutboundLink to="https://github.com/kjhnns">Github</OutboundLink>
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
