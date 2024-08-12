import { useTheme } from '@chakra-ui/react'
import { ThemeType } from '../types'

export const useAppTheme = () => useTheme() as ThemeType
