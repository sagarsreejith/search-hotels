/**
 *
 * `HotelDetailsProps` will define the type of
 *  hotel details card props
 *
 */
export interface HotelDetailsProps {
  hotel: Hotel;
  totalNights: number;
}

/**
 *
 * `Hotel` will define the type of
 *  hotel object returning in API
 *
 */
export interface Hotel {
  name: string;
  price: string;
  city: string;
  available_on: string;
}

/**
 * `Filters` will define the type of
 *  hotel filters object
 *
 */
export interface Filters {
  hotelName: string;
  hotelPrice: string;
}

/**
 * `Sort` will define the type of
 *  hotel sorting object
 *
 */
export interface Sort {
  name: boolean;
  price: boolean;
}
