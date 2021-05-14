import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { AppState } from './types';
import EmptyResult from './components/common/empty-result/EmptyResult';
import { Hotels } from './components/hotels/Hotels';
import ScssLoader from './components/common/loader/ScssLoader';

const App = () => {
  const appState = useSelector(
    (state: AppState) => state
  );
  const isEmptyResult: boolean =
    appState?.hotelList?.length === 0 &&
    !appState.isLoading &&
    !!!appState?.error?.message;
  const loader = appState.isLoading ? (
    <ScssLoader />
  ) : null;
  const emptyResult = isEmptyResult ? (
    <EmptyResult />
  ) : null;

  return (
    <div className='App'>
      <div className='container'>
        <Hotels></Hotels>
        {loader}
      </div>
    </div>
  );
}

export default App;
