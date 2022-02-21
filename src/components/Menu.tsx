import {
  List,
  ListItem,
  LinkBox,
  ListIcon,
  LinkOverlay,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { MenuProps } from '../types'

export const Menu = ({ menu }: MenuProps) => {
  return (
    <List spacing={2}>
      {menu.map((option) => (
        <ListItem paddingX="20px" fontSize="16px" key={option.name}>
          <LinkBox>
            <NextLink href={option.route} passHref>
              <LinkOverlay>
                <ListIcon as={option.icon} fontSize="20px" marginRight="10px" />
                {option.name}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  )
}
