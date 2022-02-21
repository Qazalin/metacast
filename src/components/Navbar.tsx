import { Button, Flex, HStack, Box, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerDrawer } from './HamburgerDrawer'

export const Navbar = ({ isMobile = false, navOptions }) => {
  return (
    <Flex
      mb="20px"
      height={'80px'}
      w={'100%'}
      justifyContent="space-between"
      px="20px"
    >
      <Box mt="10px">
        <Image src="/logo.jpg" height={60} width={60} />
      </Box>
      {isMobile ? (
        <HamburgerDrawer navOptions={navOptions} />
      ) : (
        <HStack spacing={10} justify="center">
          {navOptions.map((o) => (
            <NavItem>{o}</NavItem>
          ))}
        </HStack>
      )}
    </Flex>
  )
}

const NavItem = ({ children }) => {
  return (
    <Link href={`/${children}`}>
      <Button variant="options" color="gray.500">
        {children}
      </Button>
    </Link>
  )
}
