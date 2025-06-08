import {ImageSourcePropType} from 'react-native';

export type ACTION_ID =
  | 'TOP_UP'
  | 'SPENDING_LIMIT'
  | 'FREEZE'
  | 'NEW_CARD'
  | 'DEACTIVATED';

export interface ActionsType {
  title: string;
  subTitle: string;
  id: ACTION_ID;
  icon: ImageSourcePropType;
}

export interface DataType {
  cardId: number;
  name: string;
  number: string;
  exp: string;
  cvv: string;
  isFreezed: boolean;
  type: string;
  image: ImageSourcePropType;
  backgroundColor: string;
  defaultColor: string;
  actions: ActionsType[];
}

export const defaultActions: ActionsType[] = [
  {
    title: 'Topup account',
    subTitle: 'Deposit money to your account to use with card',
    id: 'TOP_UP',
    icon: require('../dls/assets/insight.png'),
  },
  {
    title: 'Weekly spending limit',
    subTitle: 'You haven’t set any spending limit on card',
    id: 'SPENDING_LIMIT',
    icon: require('../dls/assets/Meter1.png'),
  },
  {
    title: 'Freeze card',
    subTitle: 'Your debit card is currently active',
    id: 'FREEZE',
    icon: require('../dls/assets/Freeze.png'),
  },
  {
    title: 'Get a new card',
    subTitle: 'This deactives your current debit card',
    id: 'NEW_CARD',
    icon: require('../dls/assets/insight.png'),
  },
  {
    title: 'Deactivated cards',
    subTitle: 'Your previously deactivated cards',
    id: 'DEACTIVATED',
    icon: require('../dls/assets/Block.png'),
  },
];

const data: DataType[] = [
  {
    cardId: 1,
    name: 'Vishal Batra',
    number: '1234 5678 9101 1121',
    exp: '12/29',
    cvv: '123',
    type: 'mastercard',
    image: require('../dls/assets/Visa.png'),
    backgroundColor: '#01D167',
    defaultColor: '#01D167',
    isFreezed: false,
    actions: defaultActions,
  },
  {
    cardId: 2,
    name: 'Ankur Agarwal',
    number: '1234 5678 9101 1121',
    exp: '12/29',
    cvv: '123',
    isFreezed: false,
    type: 'visa',
    defaultColor: '#86b4ee',
    image: require('../dls/assets/Visa.png'),
    backgroundColor: '#86b4ee',
    actions: defaultActions,
  },
  {
    cardId: 3,
    name: 'Keshav Gupta',
    number: '1234 5678 9101 1121',
    exp: '12/29',
    defaultColor: 'red',
    cvv: '123',
    isFreezed: false,
    type: 'visa',
    image: require('../dls/assets/Visa.png'),
    backgroundColor: 'red',
    actions: defaultActions,
  },
  {
    cardId: 4,
    name: 'Vedank Mishra',
    number: '1234 5678 9101 1121',
    exp: '12/29',
    cvv: '123',
    isFreezed: false,
    defaultColor: 'blue',
    type: 'visa',
    image: require('../dls/assets/Visa.png'),
    backgroundColor: 'blue',
    actions: defaultActions,
  },
];

export {data};
