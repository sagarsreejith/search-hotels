import { Hotel } from '../types';

/**
 *
 * `getMaxPriceFromHotelList` function
 * finds the max price hotel obect from hotel list.
 *
 * @param {Hotel[]} hotelList as first param
 *
 * @returns {Hotel} as result
 *
 */
export const getMaxPriceFromHotelList = (
  hotelList: Hotel[]
): Hotel => {
  return hotelList.reduce(
    (prev, next) => {
      return parseInt(next?.price) <=
        parseInt(prev?.price)
        ? prev
        : next;
    }
  );
};

/**
 *
 * `getMinPriceFromHotelList` function
 * finds the min price hotel obect from hotel list.
 *
 * @param {Hotel[]} hotelList as first param
 *
 * @returns {Hotel} as result
 *
 */
export const getMinPriceFromHotelList = (
  hotelList: Hotel[]
): Hotel => {
  return hotelList.reduce(
    (prev, next) => {
      return parseInt(next?.price) >=
        parseInt(prev?.price)
        ? prev
        : next;
    }
  );
};

/**
 *
 * `filterHotelListByHotelFilters` function
 * will filter hotel arrays based on filters.
 *
 * @param {Hotel[]} hotelList as first param
 * @param {string} name as second param
 * @param {string} price as third param
 *
 * @returns {Hotel[]}
 *
 */
export const filterHotelListByHotelFilters = (
  hotelList: Hotel[],
  name: string,
  price: string
): Hotel[] => {
  const filterCondition = (
    hotel: Hotel
  ): boolean => {
    switch (true) {
      case name !== '' && price !== '':
        return (
          parseInt(hotel?.price) <=
            parseInt(price) &&
          hotel?.name
            .toLowerCase()
            .includes(
              name.toLowerCase()
            )
        );
      case price !== '':
        return (
          parseInt(hotel?.price) <=
          parseInt(price)
        );
      case name !== '':
        return hotel?.name
          .toLowerCase()
          .includes(name.toLowerCase());
      default:
        return true;
    }
  };
  return hotelList.filter((hotel) =>
    filterCondition(hotel)
  );
};

/**
 *
 * `sortHoletListByNamePrice` function
 * will sort hotel arrays based on sort key.
 *
 * @param {Hotel[]} hotelList as first param
 * @param {string} sortBy as second param
 *
 * @returns {Hotel[]}
 *
 */
export const sortHoletListByNamePrice = (
  hotelList: Hotel[],
  sortBy: string
): Hotel[] => {
  return hotelList.sort(
    dynamicSortWithKey(sortBy)
  );
};

/**
 * Function to sort alphabetically
 * an array of objects by some specific key.
 *
 * @param {String} property Key of the object to sort.
 */
const dynamicSortWithKey = (
  property: string
) => {
  var sortOrder = 1;

  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }

  return (a: any, b: any) => {
    if (sortOrder == -1) {
      return b[property].localeCompare(
        a[property]
      );
    } else {
      return a[property].localeCompare(
        b[property]
      );
    }
  };
};
