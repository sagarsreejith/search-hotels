import { useSelector } from 'react-redux';
import { AppState } from '../../types';
import { HotelFilter } from './filters/HotelFilters';
import { HotelList } from './hotel-list/HotelList';
import { SearchFrom } from './search/SearchForm';
import './Hotels.scss';

export const Hotels = () => {
  const appState = useSelector(
    (state: AppState) => state
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
    </div>
  );
};
