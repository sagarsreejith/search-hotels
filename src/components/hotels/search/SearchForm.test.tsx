import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  persistor,
  store,
} from '../../../store';
import {
  render,
  screen,
} from '@testing-library/react';
import { SearchFrom } from './SearchForm';
import {
  mockInitialState,
} from '../../../__mocks__/mock_data';

test('Cecking `From` text is present or not', () => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <SearchFrom
          {...mockInitialState}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    screen.getByText(/From/i)
  ).toBeInstanceOf(Node);
});

test('Cecking `To` text is present or not', () => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <SearchFrom
          {...mockInitialState}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    screen.getByText(/To/i)
  ).toBeInstanceOf(Node);
});

test('Cecking `Search` text is present or not', () => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <SearchFrom
          {...mockInitialState}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    screen.getByText(/Search/i)
  ).toBeInstanceOf(Node);
});
