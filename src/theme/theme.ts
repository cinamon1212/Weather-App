import { extendTheme } from '@chakra-ui/react';
import { config } from './config';
import { colors } from './colors';

export const theme = extendTheme({
  config,
  colors,
  styles: {
    global: {
      '#root': {
        minH: '100vh',
      },
      body: {
        minH: '100vh',
      },
    },
  },
});
