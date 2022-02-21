import { Stack, StackProps } from '@chakra-ui/react'

const navOptions = ['app', 'market', 'trade', 'analytics', 'docs']
export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    mt="-45vh"
    pt="8rem"
    px="1rem"
    {...props}
  />
)
