import { CityDataWithStatus } from '@/shared'
import { fetchCityData } from './fetchCityData'
import { createCityData } from './createCityData'

export const getCityData = async (city: string): Promise<CityDataWithStatus> => {
  try {
    const { status, data } = await fetchCityData(city)
    if (data !== null) return { status, data: createCityData(data) }
    else return { status, data: null }
  } catch (error) {
    console.log(error)
    return { status: 'error', data: null }
  }
}
