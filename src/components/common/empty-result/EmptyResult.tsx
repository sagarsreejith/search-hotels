import React, { Component } from 'react';
import { APP_CONSTANTS } from '../../../appConstants';
import './EmptyResult.scss';

/**
 *
 * `EmptyResult` is class component to show when the result 
 * come as empty fro  remote.
 *
 * @return {JSX.Element}
 *
 */
class EmptyResult extends Component {
  render() {
    return (
      <div className='empty-result'>
        <h1>{APP_CONSTANTS.EMPTY_RESULT}</h1>
      </div>
    );
  }
}

export default EmptyResult;
