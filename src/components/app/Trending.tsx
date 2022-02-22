import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react'

export const Trending = () => {
  return (
    <Box>
      <Text variant="subtitle" fontWeight="semibold">
        What's hot 🔥
      </Text>
      <Text variant="title">Trending</Text>
      <Box
        h="300px"
        w={'690px'}
        bgImage={
          'https://freight.cargo.site/w/700/q/75/i/40c093749ade6b3a7c2ac83cf57c57298f79cbc1c9e53db93734f0fec4f45b87/Capture.JPG'
        }
        borderRadius="10px"
      >
        <Box
          borderRadius="10px"
          bg="rgba(255, 255, 255, 0.3)"
          h="100%"
          w={'100%'}
          px="50px"
          pt="20px"
          boxShadow={'2xl'}
          pos="relative"
        >
          <Text
            variant="subtitle"
            fontWeight="semibold"
            filter={'auto'}
            blur="none"
          >
            Creator
          </Text>
          <Text variant="title">pplplsr.eth</Text>
          <ButtonGroup spacing={4} pos="absolute" bottom={5}>
            <Button bg="black" color="white">
              Play
            </Button>
            <Button variant={'outline'} borderColor="black">
              Follow
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  )
}
