import { AppState } from './types/state';

/**
 * This will be the application initial state
 */
export const InitialState: AppState = {
  isLoading: false,
  error: {
    hasError: false,
    message:
      'Please try after some time!',
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
};
