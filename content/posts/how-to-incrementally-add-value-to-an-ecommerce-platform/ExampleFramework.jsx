/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { tailwind } from '@theme-ui/presets'
import { Flex } from '@theme-ui/components'

const Box = {
  width: '180px',
  minHeight: '120px',
  display: 'flex',
  flexDirection: 'column',
  borderStyle: `solid`,
  borderWidth: `1px`,
  borderColor: `heading`,
  justifyContent: 'center',
  alignItems: 'center',
}

const Headline = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: tailwind.colors.gray[5],
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
        borderLeftWidth: ['1px', '0'],
        borderTopWidth: ['0', '1px'],
      }}
    >
      <Styled.div sx={Headline}>INTEREST</Styled.div>
      <Styled.div sx={Metric}>User_Catalog_Fit</Styled.div>
    </Styled.div>
    <Styled.div
      sx={{
        ...Box,
        borderLeftWidth: ['1px', '0'],
        borderTopWidth: ['0', '1px'],
      }}
    >
      <Styled.div sx={Headline}>DESIRE</Styled.div>
      <Styled.div sx={Metric}>Product_Config_Rate</Styled.div>
    </Styled.div>
    <Styled.div
      sx={{
        ...Box,
        borderLeftWidth: ['1px', '0'],
        borderTopWidth: ['0', '1px'],
      }}
    >
      <Styled.div sx={Headline}>ACTION</Styled.div>
      <Styled.div sx={Metric}>Conversion_Rate</Styled.div>
    </Styled.div>
  </Flex>
)

export default ExampleFramework
