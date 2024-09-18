import { Input, InputGroup } from '@chakra-ui/react'
import { InputLeftElem } from './InputLeftElem'
import { InputRightElem } from './InputRightElem'
import { inputStyles } from './styles'

type Props = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  handleGetCityData: () => Promise<void>
}

export const SearchInput = ({ setInputValue, inputValue, handleGetCityData }: Props) => {
  return (
    <InputGroup>
      <InputLeftElem handleGetCityData={handleGetCityData} />
      <Input {...inputStyles} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <InputRightElem setInputValue={setInputValue} />
    </InputGroup>
  )
}
