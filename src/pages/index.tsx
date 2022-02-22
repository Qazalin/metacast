import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import { PlayerLayout } from '../components/app/layout/PlayerLayout'
import { Navbar } from '../components/app/Navbar'
import { Playlist } from '../components/app/Playlist'
import { Trending } from '../components/app/Trending'

const Index = () => {
  const [scrollValue, setScrollValue] = useState(0)
  // let scrollValue = 0

  const handleScroll = (e) => {
    setScrollValue(e.target.scrollTop)
  }

  return (
    <PlayerLayout>
      <Navbar scrollValue={scrollValue} />
      <Box overflowY="auto" onScroll={handleScroll} px="3rem">
        <Trending />
        <Playlist />
      </Box>
    </PlayerLayout>
  )
}

export default Index
