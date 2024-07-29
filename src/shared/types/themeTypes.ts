import { Colors, StyleProps, ThemeConfig } from '@chakra-ui/react';

export type AnimationsType = {
  [key: string]: string;
};

export interface ITheme {
  config: ThemeConfig;
  animations: AnimationsType;
  colors: Colors;
  styles: StylesType;
}

export type StylesType = {
  global: {
    [key: string]: StyleProps;
  };
};
