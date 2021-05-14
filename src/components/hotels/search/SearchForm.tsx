import {
  ChangeEvent,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { getHotelList } from '../../../actions/RootActions';
import { APP_CONSTANTS } from '../../../appConstants';
import {
  addDays,
  getToday,
  toDateIsVaid,
} from '../../../helpers';
import {
  ActionsEnum,
  AppState,
} from '../../../types';
import './SearchForm.scss';

/**
 * SearchFrom, is the definition of our inpuit component,
 * which will be used to select the date range type 
 * and trigger search.
 * 
 * @param {AppState} appState - first param
 * 
 * @return {JSX.Element}
 */
export const SearchFrom = (
  appState: AppState
) => {
  const dispatch = useDispatch();
  const fromDate = appState?.fromDate
    ? appState.fromDate
    : getToday();
  const toDate = appState?.toDate
    ? appState.toDate
    : addDays(appState.fromDate, 1);

  useEffect(() => {
    setToDate();
  }, [fromDate]);

  /**
   *
   * `setToDate` function will  set the todate
   * based on fromDate.
   *
   * @returns {void}
   *
   */
  const setToDate = (): void => {
    if (
      !toDateIsVaid(
        appState.fromDate,
        appState.toDate
      )
    )
      dispatch({
        type:
          ActionsEnum.UPDATE_TO_DATE,
        payload: {
          toDate: addDays(
            appState.fromDate,
            1
          ),
        },
      });
  };

  /**
   *
   * `updateFromDate` function will  set the fromDate
   * based on date input value.
   *
   * @param {ChangeEvent<HTMLInputElement>} event as first param
   *
   * @returns {void}
   *
   */
  const updateFromDate = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch({
      type:
        ActionsEnum.UPDATE_FROM_DATE,
      payload: {
        fromDate: event?.target?.value,
      },
    });
  };

  /**
   *
   * `updateTotDate` function will  set the todate
   * based on date input value.
   *
   * @param {ChangeEvent<HTMLInputElement>} event as first param
   *
   * @returns {void}
   *
   */
  const updateTotDate = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch({
      type: ActionsEnum.UPDATE_TO_DATE,
      payload: {
        toDate: event?.target?.value,
      },
    });
  };

  /**
   *
   * `triggerSearch` function will dispatch an event
   * for triggering api call.
   *
   * @returns {void}
   *
   */
  const triggerSearch = (): void => {
    dispatch(
      getHotelList(
        appState?.fromDate,
        appState?.toDate
      )
    );
  };

  return (
    <div className='search-container'>
      <div>
        <span>
          {APP_CONSTANTS.SEARCH.FROM}
        </span>
        <input
          type='date'
          id='start'
          name='from-date'
          value={fromDate}
          onChange={updateFromDate}
          min='2018-05-05'
          max='2021-12-31'
        ></input>
      </div>
      <div>
        <span>
          {APP_CONSTANTS.SEARCH.TO}
        </span>{' '}
        <input
          type='date'
          id='end'
          name='to-date'
          value={toDate}
          onChange={updateTotDate}
          readOnly={
            fromDate ? false : true
          }
          min={fromDate}
          max='2021-12-31'
        ></input>
      </div>
      <div>
        <input
          disabled={
            !toDateIsVaid(
              appState.fromDate,
              appState.toDate
            )
          }
          type='button'
          value='Search'
          onClick={triggerSearch}
        />
      </div>
    </div>
  );
};
