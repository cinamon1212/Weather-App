import { BoxProps, defineStyle, VStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const stackStyles = defineStyle({
  backgroundImage: '/images/background.jpg',
  minH: '100vh',
  minW: '100%',
  as: 'main',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}) as BoxProps

export const Layout = ({ children }: PropsWithChildren) => {
  return <VStack {...stackStyles}>{children}</VStack>
}
