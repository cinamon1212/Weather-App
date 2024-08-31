import {
  BASE_URL,
  API_KEY,
  CityResponse,
  CityResponseWithStatus,
} from '@/shared'

export const fetchCityData = async (
  city: string,
): Promise<CityResponseWithStatus> => {
  try {
    const response = await fetch(BASE_URL + `&q=${city}&appid=${API_KEY}`)
    const data = (await response.json()) as CityResponse

    if (data.cod == 200) return { status: '200', data }
    else if (data.cod == 404) return { status: '404', data }
    else return { status: 'error', data: null }
  } catch (error) {
    console.log(error)
    return { status: 'error', data: null }
  }
}
