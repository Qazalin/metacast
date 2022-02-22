import { Box } from '@chakra-ui/layout'
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  IconButton,
  Td,
  Button,
} from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'

export const PlaylistTable = ({ episodes }) => {
  return (
    <Box bg="transparent">
      <Box p="10px" mb="20px">
        <Box mb="30px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            aria-label="play"
            colorScheme="yellow"
            size="md"
            isRound
          />
        </Box>
        <Table variant="unstyled" color="gray.500">
          <Thead
            borderBottom="1px solid"
            borderColor="rgba(255, 255, 255, 0.2)"
          >
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Show</Th>
              <Th>
                <AiOutlineClockCircle fontSize={'15px'} />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {episodes.map((ep, i) => (
              <Tr
                sx={{
                  transition: 'all .3s',
                  '&:hover': {
                    bg: 'rgba(255,255,255, 1)',
                  },
                  '&:focus': {
                    borderColor: 'black',
                  },
                }}
                key={ep.id}
                cursor="pointer"
              >
                <Td>{i + 1}</Td>
                <Td>{ep.name}</Td>
                <Td>{ep.show}</Td>
                <Td>{ep.duration}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}
