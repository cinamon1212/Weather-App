import {
  BoxProps,
  defineStyle,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

type Props = {
  iconName: string;
  value: string;
  label: string;
} & BoxProps;

const containerStyles = defineStyle({
  alignItems: 'center',
  gap: { base: '15px', sm: '8px' },
  w: { base: '100%', sm: '50%' },
});

export const InfoField = ({ iconName, label, value, ...props }: Props) => {
  return (
    <HStack {...containerStyles} {...props}>
      <Image
        src={`/icons/${iconName}.svg`}
        alt={label}
        w={{ base: '20%', sm: '30%' }}
      />
      <VStack gap={0}>
        <Text
          as={'h3'}
          alignSelf={'flex-start'}
          fontWeight={500}
          fontSize={{ base: '18px', sm: '22px' }}
        >
          {value}
        </Text>
        <Text fontSize={{ base: '12px', sm: '14px' }}>{label}</Text>
      </VStack>
    </HStack>
  );
};
