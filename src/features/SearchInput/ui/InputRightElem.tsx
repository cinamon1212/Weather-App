import { CloseIcon } from '@chakra-ui/icons'
import { defineStyle, InputRightElement } from '@chakra-ui/react'
import { addonStyles } from './styles'

type Props = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const closeIconStyles = defineStyle({
  boxSize: { base: '12px', sm: '14px' },
})

export const InputRightElem = ({ setInputValue }: Props) => {
  return (
    <InputRightElement onClick={() => setInputValue('')} {...addonStyles}>
      <CloseIcon {...closeIconStyles} />
    </InputRightElement>
  )
}
