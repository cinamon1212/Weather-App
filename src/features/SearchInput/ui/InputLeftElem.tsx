import { SearchIcon } from '@chakra-ui/icons'
import { defineStyle, InputLeftElement } from '@chakra-ui/react'
import { addonStyles } from './styles'

type Props = {
  handleGetCityData: () => Promise<void>
}

const searchIconStyles = defineStyle({
  boxSize: { base: '14px', sm: '16px' },
})

export const InputLeftElem = ({ handleGetCityData }: Props) => {
  return (
    <InputLeftElement
      onClick={() => {
        void handleGetCityData()
      }}
      {...addonStyles}>
      <SearchIcon {...searchIconStyles} />
    </InputLeftElement>
  )
}
