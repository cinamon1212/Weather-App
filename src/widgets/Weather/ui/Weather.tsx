import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { CityData, ErrorStatus, Spinner } from '@/shared'
import { ErrorFallback, TemperatureInfo, WeatherImageByStatus, WeatherParams } from '@/entities'
import { SearchInput } from '@/features'
import { sectionStyles, contentContainerStyles, sectionHeights } from './styles'

export const Weather = () => {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorStatus>('')
  const [cityData, setCityData] = useState<CityData>({
    humidity: 0,
    name: '',
    status: 'Clouds',
    temp: 0,
    wind: 0,
  })

  const { humidity, name, status, temp, wind } = cityData
  const { baseH, dataH, fallbackH, loadingH } = sectionHeights

  const h = isLoading ? loadingH : error ? fallbackH : name ? dataH : baseH

  return (
    <VStack {...sectionStyles} h={h}>
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCityData={setCityData}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      {!!(error || isLoading || name) && (
        <VStack {...contentContainerStyles}>
          {error ? (
            <ErrorFallback error={error} />
          ) : isLoading ? (
            <Spinner />
          ) : (
            <>
              <WeatherImageByStatus status={status} />
              <TemperatureInfo temperature={temp} cityName={name} />
              <WeatherParams humidity={humidity} wind={wind} />
            </>
          )}
        </VStack>
      )}
    </VStack>
  )
}
