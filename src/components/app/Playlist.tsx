import { Box, Text } from '@chakra-ui/react'
import { PlaylistTable } from './PlaylistTable'

const episodes = [
  {
    id: 1,
    name: 'How to get rich',
    show: 'Naval',
    duration: '20:30',
  },
  {
    id: 2,
    name: 'Weekly rollup',
    show: 'Bankless',
    duration: '20:30',
  },
  {
    id: 3,
    name: 'Taylor Swift',
    show: 'Aquired',
    duration: '20:30',
  },
]
export const Playlist = () => {
  return (
    <Box>
      <Text variant="title">My Playlist</Text>
      <PlaylistTable episodes={episodes} />
    </Box>
  )
}
