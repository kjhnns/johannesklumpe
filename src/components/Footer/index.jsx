import React from 'react'

import { Flex, Box } from '@components/Grid'

const Footer = () => (
  <Box bg="grey.300" p={3} mb={4}>
    <Flex maxWidth="1000px" m="0 auto">
      <Box as="footer">johannesklumpe at gmail dot com</Box>
    </Flex>
  </Box>
)

export default Footer
