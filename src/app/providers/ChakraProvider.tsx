import { theme } from '@/theme/theme';
import { ChakraProvider as ChakraUIProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const ChakraProvider = ({ children }: PropsWithChildren) => {
  return <ChakraUIProvider theme={theme}>{children}</ChakraUIProvider>;
};
