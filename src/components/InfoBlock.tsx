import { defineStyle, Stack } from '@chakra-ui/react';
import { InfoField } from './InfoField';

const stackStyles = defineStyle({
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: { base: 'column', sm: 'row' },
  gap: { base: '20px', sm: 0 },
  w: '100%',
  mt: { base: '24px', sm: '40px' },
  px: '10px',
});

const fields = [
  {
    iconName: 'humidity',
    label: 'Humidity',
    value: '0 %',
    justifyContent: { base: 'center', sm: 'flex-start' },
  },
  {
    iconName: 'wind',
    label: 'Wind speed',
    value: '0 Km/h',
    justifyContent: { base: 'center', sm: 'flex-end' },
  },
];

export const InfoBlock = () => {
  return (
    <Stack {...stackStyles}>
      {fields.map((field) => (
        <InfoField {...field} />
      ))}
    </Stack>
  );
};
