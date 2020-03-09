/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex } from '@theme-ui/components'

const Centered = {
  alignItems: `center`,
  justifyContent: `center`,
  textAlign: 'center',
}

const Numerator = {
  ...Centered,
  borderBottomStyle: `solid`,
  borderBottomWidth: `1px`,
  borderBottomColor: `heading`,
}

const UserCatalogFit = () => (
  <Flex
    sx={{
      ...Centered,
      flexDirection: `row`,
      fontStyle: 'italic',
    }}
  >
    <Styled.div sx={Centered}>user_catalog_fit</Styled.div>
    <Styled.div sx={{ px: '8px' }}>=</Styled.div>
    <Flex
      sx={{
        ...Centered,
        flexDirection: `column`,
      }}
    >
      <Styled.div sx={Numerator}>
        users on the catalog page that click on a sofa model
      </Styled.div>
      <Styled.div sx={Centered}>users on the catalog page</Styled.div>
    </Flex>
  </Flex>
)

export default UserCatalogFit
