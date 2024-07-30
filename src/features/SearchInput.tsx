import { CityData, ErrorStatus, getCityData } from '@/shared'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import {
  defineStyle,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react'

const inputStyles = defineStyle({
  borderWidth: '1.5px',
  borderRadius: '12px',
  placeholder: 'Enter Location',
  color: 'white',
  pb: '1px',
  type: 'text',
  h: { base: '38px', sm: '48px' },
  fontSize: { base: '15px', sm: '18px' },
  _placeholder: {
    color: 'whiteAlpha.600',
  },
  _focusVisible: {
    borderColor: 'pink.400',
  },
  autoFocus: true,
}) as InputProps

type Props = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  setCityData: React.Dispatch<React.SetStateAction<CityData>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<ErrorStatus>>
}

export const SearchInput = ({
  setInputValue,
  inputValue,
  setCityData,
  setIsLoading,
  setError,
}: Props) => {
  const handleGetCityData = async () => {
    setError('')
    setIsLoading(true)

    const data = await getCityData(inputValue)
    if (typeof data === 'object') {
      setCityData(data)
      setError('')
    } else setError(data)

    setIsLoading(false)
    setInputValue('')
  }

  return (
    <InputGroup>
      <InputLeftElement
        cursor={'pointer'}
        onClick={() => {
          void handleGetCityData()
        }}
        h={'100%'}>
        <SearchIcon boxSize={{ base: '14px', sm: '16px' }} />
      </InputLeftElement>
      <Input
        {...inputStyles}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') void handleGetCityData()
        }}
      />
      <InputRightElement
        onClick={() => setInputValue('')}
        cursor={'pointer'}
        h={'100%'}>
        <CloseIcon boxSize={{ base: '12px', sm: '14px' }} />
      </InputRightElement>
    </InputGroup>
  )
}
