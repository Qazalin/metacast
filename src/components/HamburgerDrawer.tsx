import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Icon,
  Text,
  Link,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'

export const HamburgerDrawer = ({ navOptions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <HamburgerIcon fontSize={'4xl'} mt="10px" ref={btnRef} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bgClip={'text'}
            bgGradient="linear(to-l, rgb(191, 237, 212), rgb(166, 224, 223), rgb(136, 211, 234), rgb(97, 199, 244), rgb(5, 187, 254))"
          >
            BlueChips ✨
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              {navOptions.map((option) => (
                <Button variant="options">{option}</Button>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              rightIcon={<AiFillGithub />}
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Github
            </Button>
            <Button colorScheme="blue" rightIcon={<AiFillTwitterCircle />}>
              Twitter
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
