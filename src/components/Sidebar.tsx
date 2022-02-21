import NextImage from 'next/image'
import NextLink from 'next/link'
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineCalendar,
  AiOutlineHeart,
  AiOutlineStar,
} from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOutlineWidgets } from 'react-icons/md'
import { HiOutlineTicket } from 'react-icons/hi'
import { RiArrowDropDownLine } from 'react-icons/ri'

import { Menu } from './Menu'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'

const navMenu = [
  {
    name: 'Home',
    icon: AiOutlineHome,
    route: '/',
  },
  {
    name: 'Trends',
    icon: BiTrendingUp,
    route: '/trends',
  },
  {
    name: 'Feed',
    icon: AiOutlineCompass,
    route: '/feed',
  },
]

const musicMenu = [
  {
    name: 'Favorites',
    icon: AiOutlineHeart,
    route: '/favorites',
  },
  {
    name: 'Grants',
    icon: AiOutlineStar,
    route: '/grants',
  },
]

const discoverMenu = [
  {
    name: 'New and Networthy',
    icon: MdOutlineWidgets,
    route: '/new',
  },
  {
    name: 'Release Calender',
    icon: AiOutlineCalendar,
    route: '/calender',
  },
  {
    name: 'Events',
    icon: HiOutlineTicket,
    route: '/events',
  },
]

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
  const [isShowPlaylist, setIsShowPlaylist] = useState(false)

  return (
    <Box width="100%" height="calc(100vh - 100px)" paddingX="5px">
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/Metacast.png" height={100} width={100} />
        </Box>
        <Box marginBottom="20px">
          <Menu menu={navMenu} />
        </Box>
        <Box marginTop="20px">
          <Menu menu={discoverMenu} />
        </Box>
        <Box my="20px">
          <Menu menu={musicMenu} />
        </Box>
        <Divider color="gray.800" />
        <Button
          m="20px"
          rightIcon={<RiArrowDropDownLine fontSize={'25px'} />}
          onClick={() => setIsShowPlaylist(!isShowPlaylist)}
        >
          My Playlists
        </Button>
        {isShowPlaylist ? (
          <Box height="66%" overflowY="auto" paddingY="20px">
            <List spacing={2}>
              {playlists.map((playlist) => (
                <ListItem paddingX="20px" key={playlist}>
                  <LinkBox>
                    <NextLink
                      href={{
                        pathname: '/playlist/[id]',
                        query: { id: playlist },
                      }}
                      passHref
                    >
                      <LinkOverlay>{playlist}</LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <Box></Box>
        )}
      </Box>
    </Box>
  )
}

export default Sidebar
