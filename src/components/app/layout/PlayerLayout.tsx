import { Box } from '@chakra-ui/react'
import { Main } from '../Main'
import Sidebar from '../Sidebar'

export const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh" overflow={'hidden'}>
      <Box position="absolute" left="0" top="0" width="250px" bg="white">
        <Sidebar />
      </Box>
      <Box ml="250px" height={'100%'} bg="#F4F5FD">
        <Main height="calc(100vh - 100px)">{children}</Main>
      </Box>
    </Box>
  )
}
