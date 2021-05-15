import { useSelector } from 'react-redux';
import { AppState } from '../../types';
import { HotelFilter } from './filters/HotelFilters';
import { HotelList } from './hotel-list/HotelList';
import { SearchFrom } from './search/SearchForm';
import EmptyResult from '../common/empty-result/EmptyResult';
import './Hotels.scss';

/**
 * Hotels, is the definition of Hotel component
 * which will hold the all related components
 * based on hotelLis and search inputs.
 *
 * @param {AppState} appState - first param
 *
 * @return {JSX.Element}
 */
export const Hotels = () => {
  const appState = useSelector(
    (state: AppState) => state
  );

  const emptyResult =
    !appState?.isLoading &&
    appState?.hotelList?.length === 0 &&
    appState?.fromDate &&
    appState?.toDate ? (
      <EmptyResult />
    ) : (
      ''
    );

  return (
    <div>
      <SearchFrom
        {...appState}
      ></SearchFrom>
      {appState?.hotelList?.length >
        0 && (
        <div className='search-result-container'>
          <div>
            <HotelFilter
              {...appState}
            ></HotelFilter>
          </div>
          <div>
            <HotelList
              {...appState}
            ></HotelList>
          </div>
        </div>
      )}
      {emptyResult}
    </div>
  );
};
