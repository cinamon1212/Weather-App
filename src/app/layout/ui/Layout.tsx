import { VStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { stackStyles } from './styles'

export const Layout = ({ children }: PropsWithChildren) => {
  return <VStack {...stackStyles}>{children}</VStack>
}
