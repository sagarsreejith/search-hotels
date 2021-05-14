import { ApiError } from './api';
import {
  Filters,
  Hotel,
  Sort,
} from './hotel';

/**
 *
 * `AppState` will define the model of our global application sate
 *
 */
export interface AppState {
  isLoading: boolean;
  error: ApiError;
  fromDate: string;
  toDate: string;
  hotelList: Hotel[];
  filters: Filters;
  sortBy: Sort;
  totalNumberOfNigts: number;
}
