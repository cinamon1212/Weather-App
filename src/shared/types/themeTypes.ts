import { Colors, StyleProps, ThemeConfig } from '@chakra-ui/react'

export type AnimationsType = Record<string, string>

export type ThemeType = {
  config: ThemeConfig
  animations: AnimationsType
  colors: Colors
  styles: StylesType
}

export type StylesType = {
  global: Record<string, StyleProps>
}
