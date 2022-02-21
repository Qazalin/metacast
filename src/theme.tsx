import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  styles: {
    global: {
      body: {
        overflowX: 'hidden',
      },
    },
  },
  fonts,
  breakpoints,
  components: {
    Text: {
      variants: {
        heading: {
          fontSize: ['4rem', '6rem'],
          fontWeight: 'bold',
          lineHeight: 'normal',
        },
        subheading: {
          fontSize: ['xl', '2xl'],
          color: 'gray.400',
        },
        title: {
          fontWeight: 'bold',
          fontSize: 'xl',
        },
        subtitle: {
          fontWeight: 'light',
          fontSize: 'lg',
        },
      },
    },
    Button: {
      variants: {
        options: {
          fontSize: '1.2rem',
          fontWeight: 'normal',
          textTransform: 'capitalize',
        },
      },
    },
  },
})

export default theme
