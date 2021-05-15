import { APP_CONSTANTS } from '../../../appConstants';
import { HotelDetailsProps } from '../../../types';
import './DetailsCard.scss';

export const HotelDetails = (
  props: HotelDetailsProps
) => {
  return (
    <div className='details-card'>
      <div className='hotel-name'>
        <strong>
          {
            APP_CONSTANTS.HOTEL_DETAILS
              .NAME
          }
        </strong>
        {props?.hotel?.name}
      </div>
      <div className='hotel-price'>
        <strong>
          {
            APP_CONSTANTS.HOTEL_DETAILS
              .PRICE
          }
        </strong>
        {parseInt(props?.hotel.price) *
          props?.totalNights}{' '}
        {
          APP_CONSTANTS.HOTEL_DETAILS
            .CURRENCY_CODE
        }
      </div>
      <div className='hotel-city'>
        <strong>
          {
            APP_CONSTANTS.HOTEL_DETAILS
              .CITY
          }
        </strong>
        {props?.hotel?.city
          ?.charAt(0)
          .toUpperCase() +
          props?.hotel.city?.slice(1) ||
          'NIL'}
      </div>
    </div>
  );
};
