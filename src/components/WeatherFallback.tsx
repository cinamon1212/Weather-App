import { ITheme } from '@/theme';
import { defineStyle, Image, Text, VStack } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';

const containerStyles = defineStyle({
  alignItems: 'center',
  mt: { base: '30px', sm: '50px' },
  overflow: 'hidden',
});

export const WeatherFallback = () => {
  const { animations } = useTheme() as ITheme;

  return (
    <VStack {...containerStyles}>
      <Image
        src="/images/404.png"
        alt="not found"
        animation={animations.imgAnimation}
      />
      <Text
        as={'h2'}
        fontWeight={500}
        fontSize={{ base: '16px', sm: '20px' }}
        mt={'10px'}
      >
        Oops! Location not found!
      </Text>
    </VStack>
  );
};
