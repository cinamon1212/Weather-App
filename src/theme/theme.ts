import { extendTheme } from '@chakra-ui/react';
import { config } from './config';
import { colors } from './colors';
import { animations } from './animations';
import { AnimationsType } from '@/theme/animations';
import { Colors, ThemeConfig } from '@chakra-ui/react';

const styles = {
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
};
export interface ITheme {
  config: ThemeConfig;
  animations: AnimationsType;
  colors: Colors;
  styles: typeof styles;
}

export const theme: ITheme = extendTheme({
  config,
  colors,
  styles,
  animations,
}) as ITheme;
