import { CloseIcon } from '@chakra-ui/icons'
import { InputRightElement } from '@chakra-ui/react'
import { addonStyles, closeIconStyles } from './styles'

type Props = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const InputRightElem = ({ setInputValue }: Props) => {
  return (
    <InputRightElement onClick={() => setInputValue('')} {...addonStyles}>
      <CloseIcon {...closeIconStyles} />
    </InputRightElement>
  )
}
