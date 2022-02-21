import { Box, Text, Button } from '@chakra-ui/react'
import { MotionButton } from './animated/mButton'

export const Hero = ({ title, name, desc }) => (
  <Box
    justifyContent="center"
    alignItems="center"
    height="100vh"
    textAlign={'center'}
  >
    <Text
      bgClip={'text'}
      bgGradient="linear(to-b, rgb(218, 246, 91), rgb(198, 230, 134), rgb(174, 215, 171), rgb(140, 200, 204), rgb(85, 186, 237))"
      variant="heading"
    >
      {title}
    </Text>
    <Text
      bgClip={'text'}
      bgGradient="linear(to-l, rgb(191, 237, 212), rgb(166, 224, 223), rgb(136, 211, 234), rgb(97, 199, 244), rgb(5, 187, 254))"
      variant="heading"
    >
      {name}
    </Text>
    <Box mt="20px">
      <Text variant="subheading">{desc.substr(0, 43)}</Text>
      <Text variant="subheading">{desc.substr(44, desc.len)}</Text>
    </Box>
    <Box>
      <MotionButton
        height="40px"
        bg="red.300"
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        bgGradient={
          'linear(to-r, rgb(156, 209, 245), rgb(191, 187, 207), rgb(213, 163, 171), rgb(228, 139, 136), rgb(238, 112, 101))'
        }
        mt="20px"
        sx={{
          ':hover': {
            bgGradient:
              'linear(to-r, rgb(156, 209, 245), rgb(191, 187, 207), rgb(213, 163, 171), rgb(228, 139, 136), rgb(238, 112, 101))',
          },
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        }}
        size="lg"
        fontSize={'20px'}
      >
        Get Started
      </MotionButton>
    </Box>
  </Box>
)

Hero.defaultProps = {
  title: 'Explore NFT',
  name: 'Blue chips',
  desc: 'A world where you get to explore blue chips from everywhere',
}
// 17
