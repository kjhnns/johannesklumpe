import React from 'react'

import { Link } from '@components/Link'
import { Flex, Box } from '@components/Grid'
import { Text } from '@components/Text'

const Header = () => (
  <Box as="header" bg="grey.800" px={3} py={3}>
    <Flex maxWidth="700px" m="0 auto">
      <Box pr={4}>
        <Link to="/" css={{ textDecoration: 'none' }}>
          <Text as="h1" color="white">
            Posts
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/about" css={{ textDecoration: 'none' }}>
          <Text as="h1" color="white">
            About
          </Text>
        </Link>
      </Box>
    </Flex>
  </Box>
)

export default Header
