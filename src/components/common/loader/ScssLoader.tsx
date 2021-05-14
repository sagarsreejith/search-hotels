import React from 'react';
import { APP_CONSTANTS } from '../../../appConstants';
import './ScssLoader.scss';

/**
 *
 * `ScssLoader` component diplay while fetching data
 * from api or finding the result from store.
 *
 * @return {JSX.Element}
 *
 */
const ScssLoader = () => {
  return (
    <div className='loader'>
      <div className='loading'></div>
    </div>
  );
};

export default ScssLoader;
