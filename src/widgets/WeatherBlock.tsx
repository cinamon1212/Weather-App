import { BoxProps, defineStyle, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { CityData, ErrorStatus, Spinner } from '@/shared'
import {
  ErrorFallback,
  TemperatureInfo,
  WeatherImageByStatus,
  WeatherParams,
} from '@/entities'
import { SearchInput } from '@/features'

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
}) as BoxProps

export const Weather = () => {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorStatus>('')
  const [cityData, setCityData] = useState<CityData>({
    humidity: 0,
    name: 'Broken Clouds',
    status: 'Clouds',
    temp: 0,
    wind: 0,
  })

  return (
    <VStack {...containerStyles}>
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCityData={setCityData}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      {error ? (
        <ErrorFallback error={error} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <VStack overflow={'hidden'}>
          <WeatherImageByStatus status={cityData.status} />
          <TemperatureInfo
            temperature={cityData.temp}
            cityName={cityData.name}
          />
          <WeatherParams humidity={cityData.humidity} wind={cityData.wind} />
        </VStack>
      )}
    </VStack>
  )
}
