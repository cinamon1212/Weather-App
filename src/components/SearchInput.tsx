import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  defineStyle,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';

const inputStyles = defineStyle({
  borderWidth: '1.5px',
  borderRadius: '12px',
  placeholder: 'Enter City Name',
  color: 'white',
  pb: '1px',
  _placeholder: {
    color: 'whiteAlpha.600',
  },
  _focusVisible: {
    borderColor: 'pink.400',
  },
}) as InputProps;

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputGroup>
      <InputLeftElement cursor={'pointer'}>
        <SearchIcon boxSize={'14px'} />
      </InputLeftElement>
      <Input
        {...inputStyles}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <InputRightElement onClick={() => setInputValue('')} cursor={'pointer'}>
        <CloseIcon boxSize={'12px'} />
      </InputRightElement>
    </InputGroup>
  );
};
