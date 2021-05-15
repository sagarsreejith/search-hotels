import moment from 'moment';
import { APP_CONSTANTS } from '../appConstants';
import { Hotel } from '../types';

/**
 *
 * `getToday` function  return the current date.
 *
 * @returns {string} as currenet date.
 *
 */
export const getToday = (): string => {
  return moment().format(
    APP_CONSTANTS.DATE_FORMAT
  );
};

/**
 *
 * `addDays` function  will add days to
 * a giver dates.
 *
 * @param {string} date as first param
 *
 * @returns {string} as added dates.
 *
 */
export const addDays = (
  date: string,
  numberOfDays: number
): string => {
  return moment(
    date,
    APP_CONSTANTS.DATE_FORMAT
  )
    .add(numberOfDays, 'days')
    .format(APP_CONSTANTS.DATE_FORMAT)
    .toString();
};

/**
 *
 * `toDateIsVaid` function validates
 * todates is greater than fromDates or not.
 *
 * @param {string} fromDate as first param
 * @param {string} toDate as second param
 *
 * @returns {boolean} true/false
 *
 */
export const toDateIsVaid = (
  fromDate: string,
  toDate: string
): boolean => {
  return moment(toDate).isSameOrAfter(
    fromDate
  );
};

/**
 *
 * `filterHotelListbasedOnAvailableDate` function
 * filter the hotel list based on from date and hotel
 * available_on date.
 *
 * @param {Hotel[]} hotelList as first param
 * @param {string} fromDate as second param
 *
 * @returns {number} as totalNight
 *
 */
export const filterHotelListbasedOnAvailableDate = (
  hotelList: Hotel[],
  fromDate: string
): Hotel[] => {
  return hotelList.filter((hotel) => {
    return moment(
      fromDate
    ).isSameOrAfter(
      moment(
        hotel?.available_on
      ).format(
        APP_CONSTANTS.DATE_FORMAT
      )
    );
  });
};

/**
 *
 * `getNumberOfNight` function
 * find the differancee between two
 * dates and return the total nights.
 *
 * @param {string} fromDate as first param
 * @param {string} toDate as second param
 *
 * @returns {number} as totalNight
 *
 */
export const getNumberOfNight = (
  fromDate: string,
  toDate: string
): number => {
  return moment(toDate).diff(
    moment(fromDate),
    'days'
  );
};
