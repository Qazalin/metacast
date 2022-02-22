import {
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { NavProps } from '../../types'

/* A fixed positioned navbar component that will
 * Change background according to scrollY */

export const Navbar = ({ scrollValue }: NavProps) => {
  return (
    <Flex
      bg={scrollValue > 1 ? 'rgba(255, 255, 255, 0.9)' : 'transparent'}
      pb="20px"
      px="3rem"
    >
      <HStack spacing={10} mr="40px" mt="20px">
        <Icon as={BsArrowLeft} fontSize="20px" />
        <Icon as={BsArrowRight} fontSize="20px" />
      </HStack>
      <InputGroup mt="15px">
        <InputLeftElement pointerEvents="none" children={<FiSearch />} />
        <Input
          width={'90%'}
          bg="white"
          border={'none'}
          borderRadius="20px"
          placeholder="Search for shows, people and ..."
        />
      </InputGroup>
    </Flex>
  )
}
