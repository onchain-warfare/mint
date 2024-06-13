import { createSystem } from 'frog/ui';

export const {
  Box,
  Columns,
  Column,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Rows,
  Row,
  Spacer,
  Text,
  VStack,
  vars,
} = createSystem({
  colors: {
    text: '#9AF9FD',
    background: '#040D2F',
    white: '#FFFFFF',
  },
  fonts: {
    default: [
      {
        name: 'VT323',
        source: 'google',
        weight: 400,
      },
    ],
  },
});
