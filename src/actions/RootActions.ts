import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { getHotels } from '../services/Api';
import {
  ActionsEnum,
  ActionType,
  Filters,
  GenericApiResponse,
  Hotel,
} from '../types';

/**
 *
 * `getDataFromApi` action creator dipatch
 * afunction to the rootReducer.
 *
 * @param {string} searchText - first input as string
 * @param {string} searchType - second input as string
 *
 * @return will dipatch an event
 * to reducers for changing the sate.
 *
 */
export const getHotelList = (
  fromDate: string,
  toDate: string
) => async (
  dispatch: Dispatch<ActionType>
) => {
  isShowLoader(dispatch, true);
  dispatch({
    type: ActionsEnum.UPDATE_HOTEL_LIST,
    payload: {
      hotelList: [],
    },
  });
  try {
    const apiResponse = (await getHotels()) as AxiosResponse<
      GenericApiResponse<Hotel[]>
    >;
    const hotelList = eval(
      apiResponse.data.toString()
    );
    dispatch({
      type:
        ActionsEnum.UPDATE_HOTEL_LIST,
      payload: {
        hotelList,
        fromDate: fromDate,
        toDate: toDate,
      },
    });
    isShowLoader(dispatch, false);
  } catch (e) {
    isShowLoader(dispatch, false);
    dispatch({
      type: ActionsEnum.NETWORK_ERROR,
      payload: null,
    });
  }
};

/**
 *
 * `updateFilters` action creator dipatch
 * afunction to the rootReducer.
 *
 * @param {Filters} filters - first input as string
 *
 * @return will dipatch an event to
 * reducers for changing the sate.
 *
 */
export const updateFilters = (
  filters: Filters
) => async (
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: ActionsEnum.UPDATE_FILTERS,
    payload: {
      filters: {
        hotelName: filters?.hotelName,
        hotelPrice: filters?.hotelPrice,
      },
    },
  });
};

/**
 *
 * `updateSortBy` action creator dipatch
 * a function to the rootReducer.
 *
 * @param {string} key - first input as string
 *
 * @return will dipatch an event to
 * reducers for changing the sate.
 *
 */
export const updateSortBy = (
  key: string
) => async (
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: ActionsEnum.UPDATE_SORT_BY,
    payload: {
      sortBy: {
        name:
          key === 'name' ? true : false,
        price:
          key === 'price'
            ? true
            : false,
      },
    },
  });
};

/**
 *
 * `isShowLoader` action creator dipatch
 * a function to the rootReducer.
 *
 *@param {Dispatch<ActionType>} dispatch - first input as string
 * @param {boolean} loaderStatus - first input as string
 *
 * @return will dipatch an event
 * to reducers for changing the sate.
 *
 */
const isShowLoader = (
  dispatch: Dispatch<ActionType>,
  loaderStatus: boolean
) => {
  dispatch({
    type: ActionsEnum.SHOW_LOADER,
    payload: {
      loaderStatus,
    },
  });
};
