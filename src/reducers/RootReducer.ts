import {
  ActionsEnum,
} from '../types';
import { InitialState } from '../initialSate';
import { AppState } from '../types/state';
import { getNumberOfNight } from '../helpers';
/**
 *
 * `rootReducer` will handle the state manupoulatuon.
 *
 */
export const rootReducer = (
  state: AppState = InitialState,
  action: any
): AppState => {
  switch (action.type) {
  

    case ActionsEnum.NETWORK_ERROR: {
      return {
        ...state,
        isLoading: false,
        hotelList: [],
        error: {
          hasError: true,
          message: 'Please try After Some time',
        },
      };
    }

    case ActionsEnum.UPDATE_FROM_DATE: {
      return {
        ...state,
        fromDate: action.payload.fromDate
      }
    }

    case ActionsEnum.UPDATE_TO_DATE: {
      return {
        ...state,
        toDate: action?.payload?.toDate
      }
    }

    case ActionsEnum.UPDATE_HOTEL_LIST: {
      return {
        ...state,
        hotelList: action?.payload?.hotelList,
        filters: {
          hotelName: '',
          hotelPrice: ''
        },
        sortBy: {
          name: false,
          price: false
        },
        totalNumberOfNigts: getNumberOfNight(
          action?.payload?.fromDate,
          action?.payload?.toDate
        )
      }
    }
    

    case ActionsEnum.UPDATE_FILTERS: {
      return {
        ...state,
        filters: {
          hotelName: action?.payload?.filters?.hotelName,
          hotelPrice: action?.payload?.filters?.hotelPrice
        }
      }
    }

    case ActionsEnum.UPDATE_SORT_BY: {
      return {
        ...state,
        sortBy: {
          name: action?.payload?.sortBy?.name,
          price: action?.payload?.sortBy?.price
        }
      }
    }
  
    case ActionsEnum.SHOW_LOADER: {
      return {
        ...state,
        isLoading: action?.payload?.loaderStatus
      }
    }

    default:
      return state;
  }
};
