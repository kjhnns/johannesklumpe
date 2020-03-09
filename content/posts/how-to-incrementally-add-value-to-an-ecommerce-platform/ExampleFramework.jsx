/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex } from '@theme-ui/components'

const Box = {
  width: '180px',
  minHeight: '120px',
  display: 'flex',
  flexDirection: 'column',
  border: '1px #000 solid',
  justifyContent: 'center',
  alignItems: 'center',
}

const Headline = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: '#808080',
}

const Metric = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

const ExampleFramework = () => (
  <Flex
    sx={{
      alignItems: `center`,
      justifyContent: `center`,
      flexDirection: ['column', 'row'],
    }}
  >
    <Styled.div sx={Box}>
      <Styled.div sx={Headline}>ATTENTION</Styled.div>
      <Styled.div sx={Metric}>Lead_Quality</Styled.div>
    </Styled.div>
    <Styled.div
      sx={{
        ...Box,
        borderLeft: ['1px #000 solid', 0],
        borderTop: [0, '1px #000 solid'],
      }}
    >
      <Styled.div sx={Headline}>INTEREST</Styled.div>
      <Styled.div sx={Metric}>User_Catalog_Fit</Styled.div>
    </Styled.div>
    <Styled.div
      sx={{
        ...Box,
        borderLeft: ['1px #000 solid', 0],
        borderTop: [0, '1px #000 solid'],
      }}
    >
      <Styled.div sx={Headline}>DESIRE</Styled.div>
      <Styled.div sx={Metric}>Product_Config_Rate</Styled.div>
    </Styled.div>
    <Styled.div
      sx={{
        ...Box,
        borderLeft: ['1px #000 solid', 0],
        borderTop: [0, '1px #000 solid'],
      }}
    >
      <Styled.div sx={Headline}>ACTION</Styled.div>
      <Styled.div sx={Metric}>Conversion_Rate</Styled.div>
    </Styled.div>
  </Flex>
)

export default ExampleFramework
