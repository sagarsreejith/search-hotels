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
import { HotelList } from './HotelList';
import renderer from 'react-test-renderer';
import {
  mockInitialState,
  mockStateWithDates,
} from '../../../__mocks__/mock_data';

it('render correctly SearchForm Comeponet', () => {
  const searchComponent = renderer
    .create(
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <HotelList
            {...mockInitialState}
          />
        </PersistGate>
      </Provider>
    )
    .toJSON();
  expect(
    searchComponent
  ).toMatchSnapshot();
});

test('Cecking `Total Nights` text is present or not', () => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelList
          {...mockInitialState}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    screen.getByText(/Total Nights/i)
  ).toBeInstanceOf(Node);
});

test('Cecking `Search by Price` text is present or not', () => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelList
          {...mockInitialState}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    screen.getByText(/Sort by Price/i)
  ).toBeInstanceOf(Node);
});

test('Cecking `Search by Name` text is present or not', () => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelList
          {...mockInitialState}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    screen.getByText(/Sort by Name/i)
  ).toBeInstanceOf(Node);
});
