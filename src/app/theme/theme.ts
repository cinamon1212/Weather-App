import { extendTheme } from '@chakra-ui/react'
import { config } from './config'
import { colors } from './colors'
import { animations } from './animations'
import { StylesType, ThemeType } from '@/shared'

const styles: StylesType = {
  global: {
    '#root': {
      minH: '100vh',
    },
    body: {
      minH: '100vh',
      fontFamily: '"Ubuntu", sans-serif',
      fontWeight: 400,
    },
  },
}

export const theme = extendTheme({
  config,
  colors,
  styles,
  animations,
}) as ThemeType
