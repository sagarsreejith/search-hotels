import React from 'react';
import { APP_CONSTANTS } from '../../../appConstants';
import { ApiError } from '../../../types';
import './NetworkError.scss';

/**
 *
 * `NetworkError` component diplay when network error
 * get while fetching data from remote.
 *
 * @return {JSX.Element}
 *
 */
const NetworkError = (error: ApiError) => {
  return error?.hasError ? (
    <div className='network-error'>
      <h3>
        {APP_CONSTANTS.NETWORK_ERROR_MESSAGE}
      </h3>
      <div className='error-message'>
        {error?.message}
      </div>
    </div>
  ) : null;
};

export default NetworkError;
