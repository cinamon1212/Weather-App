import { SearchIcon } from '@chakra-ui/icons'
import { InputLeftElement } from '@chakra-ui/react'
import { addonStyles, searchIconStyles } from './styles'

type Props = {
  handleGetCityData: () => Promise<void>
}

export const InputLeftElem = ({ handleGetCityData }: Props) => {
  return (
    <InputLeftElement
      onClick={() => {
        void handleGetCityData()
      }}
      {...addonStyles}
    >
      <SearchIcon {...searchIconStyles} />
    </InputLeftElement>
  )
}
