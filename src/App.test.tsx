import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import ReactDOM from 'react-dom';

test('render  App', () => {
  const root = document.createElement('root');
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>,
    root
  );
});
