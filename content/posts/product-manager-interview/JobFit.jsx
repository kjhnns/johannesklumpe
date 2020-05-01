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

const JobFit = () => (
  <Flex
    sx={{
      ...Centered,
      flexDirection: `row`,
      fontStyle: 'italic',
    }}
  >
    <Styled.div sx={Centered}>max jobFit</Styled.div>
    <Styled.div sx={{ px: '8px' }}>=</Styled.div>
    <Flex
      sx={{
        ...Centered,
        flexDirection: `column`,
      }}
    >
      ∑( Case x Partner Quality ) + ∑( Applications Sent ) + ∑( Real Interviews)
    </Flex>
  </Flex>
)

export default JobFit
