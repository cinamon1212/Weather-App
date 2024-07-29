import { getWeatherPathFromStatus } from '@/helpers';
import { ITheme } from '@/theme';
import { WeatherStatus } from '@/types';
import { defineStyle, Image } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';

type Props = {
  status: WeatherStatus;
};

const imgStyles = defineStyle({
  w: '60%',
  mt: { base: '24px', sm: '40px' },
});

export const WeatherImage = ({ status }: Props) => {
  const imgSrc = getWeatherPathFromStatus(status);
  const { animations } = useTheme() as ITheme;

  return (
    <Image
      {...imgStyles}
      src={imgSrc}
      alt="weather"
      animation={animations.imgAnimation}
    />
  );
};
