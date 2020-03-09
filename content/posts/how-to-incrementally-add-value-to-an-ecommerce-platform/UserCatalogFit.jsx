/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex } from '@theme-ui/components'

const Denominator = {
  borderBottomStyle: `solid`,
  borderBottomWidth: `1px`,
  borderBottomColor: `heading`,
  textAlign: 'center',
}

const UserCatalogFit = () => (
  <Flex
    sx={{
      alignItems: `center`,
      justifyContent: `center`,
      flexDirection: `row`,
    }}
  >
    <Styled.div
      sx={{
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      user_catalog_fit
    </Styled.div>
    <Styled.div sx={{ px: '8px' }}>=</Styled.div>
    <Flex
      sx={{
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <Styled.div sx={Denominator}>
        users on the catalog page that click on a sofa model
      </Styled.div>
      <Styled.div
        sx={{
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        users on the catalog page
      </Styled.div>
    </Flex>
  </Flex>
)

export default UserCatalogFit
