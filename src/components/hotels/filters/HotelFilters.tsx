import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../../../actions/RootActions';
import { APP_CONSTANTS } from '../../../appConstants';
import {
  getMaxPriceFromHotelList,
  getMinPriceFromHotelList,
} from '../../../helpers';
import {
  AppState,
  Filters,
} from '../../../types';
import './HotelFilters.scss';

export const HotelFilter = (
  state: AppState
) => {
  const dispatch = useDispatch();
  const hotelNmae =
    state?.filters?.hotelName;
  const maxPrice =
    state?.hotelList?.length > 0
      ? parseInt(
          getMaxPriceFromHotelList(
            state?.hotelList
          )?.price
        )
      : 0;
  const minPrice =
    state?.hotelList?.length > 0
      ? parseInt(
          getMinPriceFromHotelList(
            state?.hotelList
          )?.price
        )
      : 0;

  /**
   *
   * `updateFilter` function dispatch
   * and event to the action creator
   * based on the input param.
   *
   * @param {ChangeEvent<HTMLInputElement>} event as first param
   * @param {string} filterByType as second param
   *
   * @returns {void}
   *
   */
  const updateFilter = (
    event: ChangeEvent<HTMLInputElement>,
    filterByType: string
  ): void => {
    const hotelName =
      filterByType ===
      APP_CONSTANTS.HOTEL_FILTERS.NAME
        ? event?.target?.value
        : state?.filters?.hotelName;
    const hotelPrice =
      filterByType ===
      APP_CONSTANTS.HOTEL_FILTERS.PRICE
        ? event?.target?.value === '0'
          ? ''
          : event?.target?.value
        : state?.filters?.hotelPrice;
    const filters = {
      hotelName,
      hotelPrice,
    } as Filters;
    dispatch(updateFilters(filters));
  };

  return (
    <div className='filter-section'>
      <div>
      <img src="assets/images/search-icon.svg" alt="" />
        <input
          type='text'
          name='hotel-name'
          id='hotel-name'
          placeholder={
            APP_CONSTANTS.HOTEL_FILTERS
              .INPUT_PLACE_HOLDER
          }
          defaultValue={hotelNmae}
          onChange={(e) =>
            updateFilter(
              e,
              APP_CONSTANTS
                .HOTEL_FILTERS.NAME
            )
          }
        />
      </div>
      <div>
        <input
          type='range'
          id='hotel-price'
          name='hotel-price'
          min={minPrice}
          max={maxPrice}
          step='1'
          onChange={(e) =>
            updateFilter(
              e,
              APP_CONSTANTS
                .HOTEL_FILTERS.PRICE
            )
          }
        ></input>
      </div>
    </div>
  );
};
