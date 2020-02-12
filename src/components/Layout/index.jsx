import React from 'react'
import PropTypes from 'prop-types'

import Header from '@components/Header'
import { Box } from '@components/Grid'
import Footer from '@components/Footer'
import GlobalStyles from '@style/GlobalStyles'
import { ThemeProvider, theme } from '@style'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header />
      <Box maxWidth="700px" m="0 auto" px={3}>
        {children}
      </Box>
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
