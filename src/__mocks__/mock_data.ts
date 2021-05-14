import {
  AppState,
  Hotel,
  HotelDetailsProps,
} from '../types';

export const hotelData = {
  name:
    'Kempinski Hotel Mall of the Emirates',
  price: '200',
  city: 'dubai',
  available_on: '2020-10-21',
} as Hotel;

export const mockInitialState = {
  isLoading: true,
  error: {
    hasError: false,
    message: '',
  },
  fromDate: '',
  toDate: '',
  hotelList: [],
  filters: {
    hotelName: '',
    hotelPrice: '',
  },
  sortBy: {
    name: false,
    price: false,
  },
  totalNumberOfNigts: 0,
} as AppState;

export const mockStateWithDates = {
  isLoading: true,
  error: {
    hasError: false,
    message: '',
  },
  fromDate: '2021-05-16',
  toDate: '2021-05-17',
  hotelList: [],
  filters: {
    hotelName: 'something',
    hotelPrice: '',
  },
  sortBy: {
    name: false,
    price: false,
  },
  totalNumberOfNigts: 0,
} as AppState;

export const mockHotelCardDetails = {
  hotel:hotelData,
  totalNights: 2,
} as HotelDetailsProps;
