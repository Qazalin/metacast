import { Box } from '@chakra-ui/react'
import Sidebar from '../Sidebar'

export const PlayerLayout = () => {
  return (
    <Box width="100vw" height="100vh" overflow={'hidden'}>
      <Box position="absolute" left="0" top="0" width="250px" bg="white">
        <Sidebar />
      </Box>
      <Box ml="250px" height={'100%'} bg="#F4F5FD">
        <Box height="calc(100vh - 100px)">main</Box>
      </Box>
    </Box>
  )
}
