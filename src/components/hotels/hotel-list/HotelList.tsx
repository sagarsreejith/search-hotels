import { useDispatch } from 'react-redux';
import { updateSortBy } from '../../../actions/RootActions';
import { APP_CONSTANTS } from '../../../appConstants';
import {
  filterHotelListByHotelFilters,
  sortHoletListByNamePrice,
} from '../../../helpers';
import {
  AppState,
  Hotel,
} from '../../../types';
import { HotelDetails } from '../details-card/DetailsCard';
import './HotelList.scss';

export const HotelList = (
  appState: AppState
) => {
  const dispatch = useDispatch();
  const getSortedHotelList = (): Hotel[] => {
    const sortBy = appState?.sortBy
      ?.name
      ? APP_CONSTANTS.SORT_BY.NAME
      : APP_CONSTANTS.SORT_BY.PRICE;
    return sortHoletListByNamePrice(
      filterHotelListByHotelFilters(
        appState?.hotelList,
        appState?.filters?.hotelName,
        appState?.filters?.hotelPrice
      ),
      sortBy
    );
  };
  const hotels =
    appState?.filters?.hotelName ||
    appState?.filters?.hotelPrice ||
    appState?.sortBy?.name ||
    appState?.sortBy?.price
      ? appState?.sortBy?.name ||
        appState?.sortBy?.price
        ? getSortedHotelList()
        : filterHotelListByHotelFilters(
            appState?.hotelList,
            appState?.filters
              ?.hotelName,
            appState?.filters
              ?.hotelPrice
          )
      : appState?.hotelList;

  const hotelList = hotels?.map(
    (
      hotel: Hotel,
      index: number
    ): JSX.Element => {
      return (
        <HotelDetails
          key={index}
          hotel={hotel}
          totalNights={
            appState?.totalNumberOfNigts
          }
        ></HotelDetails>
      );
    }
  );

  /**
   *
   * `updateSortbyByNamePrice` function will call
   * sort helper function based on sortBy key.
   *
   * @param {string} sortBy as first param
   *
   * @returns {void}
   *
   */
  const updateSortbyByNamePrice = (
    sortBy: string
  ): void => {
    dispatch(updateSortBy(sortBy));
  };

  return (
    <div>
      <div className='sort-section'>
        <div>
          <strong>
            {
              APP_CONSTANTS.TOTAL_NO_OF_NIGHTS
            }{' '}
            {
              appState.totalNumberOfNigts
            }{' '}
          </strong>
        </div>
        <div className='sort-button'>
          <div
            className={
              appState.sortBy.name
                ? 'active'
                : ''
            }
            onClick={() =>
              updateSortbyByNamePrice(
                APP_CONSTANTS.SORT_BY
                  .NAME
              )
            }
          >
            {' '}
            {
              APP_CONSTANTS
                .SORT_BY_LABELS
                .SORT_BY_NAME
            }
          </div>
          <div
            className={
              appState.sortBy.price
                ? 'active'
                : ''
            }
            onClick={() =>
              updateSortbyByNamePrice(
                APP_CONSTANTS.SORT_BY
                  .PRICE
              )
            }
          >
            {' '}
            {
              APP_CONSTANTS
                .SORT_BY_LABELS
                .SORT_BY_PRICE
            }
          </div>
        </div>
      </div>
      <div className='hotel-list'>
        {hotelList}
      </div>
    </div>
  );
};
