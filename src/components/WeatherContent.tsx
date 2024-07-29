import { VStack, defineStyle, Spinner } from '@chakra-ui/react';
import { InfoBlock } from './InfoBlock';
import { TemperatureInfo } from './TemperatureInfo';
import { WeatherImage } from './WeatherImage';
import { CityData } from '@/types';

type Props = {
  isLoading: boolean;
  cityData: CityData;
};

const containerStyles = defineStyle({
  overflow: 'hidden',
  alignItems: 'center',
});

export const WeatherContent = ({ isLoading, cityData }: Props) => {
  return isLoading ? (
    <Spinner size="xl" mt={'50px'} mb={'20px'} />
  ) : (
    <VStack {...containerStyles}>
      <WeatherImage status={cityData.status} />
      <TemperatureInfo temperature={cityData.temp} cityName={cityData.name} />
      <InfoBlock humidity={cityData.humidity} wind={cityData.wind} />
    </VStack>
  );
};
