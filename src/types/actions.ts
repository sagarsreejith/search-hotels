import {
  Filters,
  Hotel,
  Sort,
} from './hotel';

/**
 *
 * `ActionType` inter face is
 * a common type of Action creator.
 *
 */
export interface ActionType {
  type: string;
  payload: ActionPayload | null;
}

/**
 *
 * `ActionPayload` interface
 * define the type of `payload` object.
 *
 */
export interface ActionPayload {
  loaderStatus?: boolean;
  fromDate?: string;
  toDate?: string;
  hotelList?: Hotel[];
  filters?: Filters;
  sortBy?: Sort;
}
