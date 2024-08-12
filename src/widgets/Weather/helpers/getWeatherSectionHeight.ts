import { CityData } from '@/shared'
import { sectionHeights } from '../ui/styles'

export const getWeatherSectionHeight = (isLoading: boolean, error: string, cityData: CityData | null) => {
  const { baseH, dataH, fallbackH, loadingH } = sectionHeights

  let h: { base: string; sm: string } = baseH
  if (isLoading) h = loadingH
  else if (error) h = fallbackH
  else if (cityData) h = dataH

  return h
}
