import { BoxProps, defineStyle, VStack } from '@chakra-ui/react';
import { SearchInput } from './SearchInput';
import { useState } from 'react';
import { WeatherFallback } from './WeatherFallback';
import { WeatherContent } from './WeatherContent';
import { CityData } from '@/types';

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
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cityData, setCityData] = useState<CityData>({
    humidity: 0,
    name: 'Broken Clouds',
    status: 'Clouds',
    temp: 0,
    wind: 0,
  });

  return (
    <VStack {...containerStyles}>
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCityData={setCityData}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
      />
      {isError ? (
        <WeatherFallback />
      ) : (
        <WeatherContent cityData={cityData} isLoading={isLoading} />
      )}
    </VStack>
  );
};
