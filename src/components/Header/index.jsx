import React from 'react'

import { Link } from '@components/Link'
import { Flex, Box } from '@components/Grid'
import { Text } from '@components/Text'

const Header = () => (
  <Box as="header" bg="grey.800" p={3}>
    <Flex maxWidth="1000px" m="0 auto">
      <Box pr={5}>
        <Link to="/" css={{ textDecoration: 'none' }}>
          <Text as="h3" color="white">
            POSTS
          </Text>
        </Link>
      </Box>
      <Box pr={5}>
        <Link to="/about" css={{ textDecoration: 'none' }}>
          <Text as="h3" color="white">
            ABOUT
          </Text>
        </Link>
      </Box>
    </Flex>
  </Box>
)

export default Header
