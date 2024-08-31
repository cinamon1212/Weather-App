import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { CityData, ErrorStatuses, Spinner } from '@/shared'
import {
  ErrorFallback,
  TemperatureInfo,
  WeatherImageByStatus,
  WeatherParams,
} from '@/entities'
import { SearchInput } from '@/features'
import { sectionStyles, contentContainerStyles } from './styles'
import { getCityData } from '@/features/SearchInput/api'
import { getWeatherSectionHeight } from '../helpers/getWeatherSectionHeight'

export const Weather = () => {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorStatuses | ''>('')
  const [cityData, setCityData] = useState<CityData | null>(null)

  const h = getWeatherSectionHeight(isLoading, error, cityData)

  const handleGetCityData = async () => {
    setError('')
    setIsLoading(true)

    const { data, status } = await getCityData(inputValue)
    if (status === '200') {
      setCityData(data)
      setError('')
    } else setError(status)

    setIsLoading(false)
    setInputValue('')
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleGetCityData()
  }

  const showContentContainer = !!(error || isLoading || cityData)

  let content: JSX.Element | null = null

  if (error) content = <ErrorFallback error={error} />
  else if (isLoading) content = <Spinner />
  else if (cityData) {
    const { humidity, name, status, temp, wind } = cityData
    content = (
      <>
        <WeatherImageByStatus status={status} />
        <TemperatureInfo temperature={temp} cityName={name} />
        <WeatherParams humidity={humidity} wind={wind} />
      </>
    )
  }

  return (
    <VStack {...sectionStyles} h={h}>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleGetCityData={handleGetCityData}
        />
      </form>
      {showContentContainer && (
        <VStack {...contentContainerStyles}>{content}</VStack>
      )}
    </VStack>
  )
}
