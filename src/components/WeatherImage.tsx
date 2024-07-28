import { Image } from '@chakra-ui/react';

type Props = {
  status: string;
};

export const WeatherImage = ({ status }: Props) => {
  const baseImgPath = '/images/';
  console.log(status);

  return (
    <Image
      src={`${baseImgPath}sunny.png`}
      w={'60%'}
      mt={{ base: '24px', sm: '40px' }}
    />
  );
};
