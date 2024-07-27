import { defineStyle, Input, VStack } from '@chakra-ui/react';

const containerStyles = defineStyle({
  maxW: '30%',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'grey',
});

export const WeatherBlock = () => {
  return (
    <VStack {...containerStyles}>
      <Input />
      sdfgsdfg
    </VStack>
  );
};
