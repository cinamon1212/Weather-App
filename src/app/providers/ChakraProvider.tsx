import { ChakraProvider as ChakraUIProvider } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { theme } from '../theme'

export const ChakraProvider = ({ children }: PropsWithChildren) => {
  return <ChakraUIProvider theme={theme}>{children}</ChakraUIProvider>
}
