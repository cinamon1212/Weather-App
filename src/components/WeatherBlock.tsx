import { BoxProps, defineStyle, VStack } from '@chakra-ui/react';
import { SearchInput } from './SearchInput';
import { WeatherImage } from './WeatherImage';
import { TemperatureInfo } from './TemperatureInfo';
import { InfoBlock } from './InfoBlock';

const containerStyles = defineStyle({
  w: '30%',
  minW: { base: '250px', sm: '350px' },
  px: { base: '14px', sm: '20px' },
  py: { base: '20px', sm: '30px' },
  borderRadius: '16px',
  border: '2px solid',
  borderColor: 'borderColor',
  backgroundColor: 'weatherBlockBgColor',
  backdropFilter: 'blur(30px)',
  as: 'section',
}) as BoxProps;

export const WeatherBlock = () => {
  return (
    <VStack {...containerStyles}>
      <SearchInput />
      <WeatherImage status="sunny" />
      <TemperatureInfo temperature="16" />
      <InfoBlock />
    </VStack>
  );
};
