import { Spinner as ChakraSpinner } from '@chakra-ui/react'
import { spinnerStyles } from './styles'

export const Spinner = () => {
  return <ChakraSpinner {...spinnerStyles} />
}
