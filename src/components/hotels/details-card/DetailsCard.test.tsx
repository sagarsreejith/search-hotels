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
import { HotelDetails } from './DetailsCard';
import { mockHotelCardDetails } from '../../../__mocks__/mock_data';
import { mount } from 'enzyme';

test('Cecking `Name` text is present or not', () => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelDetails
          {...mockHotelCardDetails}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    screen.getByText(/Name/i)
  ).toBeInstanceOf(Node);
});

test('Cecking `Price` text is present or not', () => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelDetails
          {...mockHotelCardDetails}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    screen.getByText(/Price/i)
  ).toBeInstanceOf(Node);
});

test('Cecking `City` text is present or not', () => {
  render(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelDetails
          {...mockHotelCardDetails}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    screen.getByText(/City/i)
  ).toBeInstanceOf(Node);
});

test('Checking `Hotel Name` is to the props label name + hotl name', () => {
  let wrapped = mount(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelDetails
          {...mockHotelCardDetails}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    wrapped.find('.hotel-name').text()
  ).toEqual(
    'Name: ' +
      mockHotelCardDetails?.hotel?.name
  );
});

test('Checking `Price` is equal to the props label name + hotl price * no of nights', () => {
  let wrapped = mount(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelDetails
          {...mockHotelCardDetails}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    wrapped.find('.hotel-price').text()
  ).toEqual(
    'Price: ' +
      parseInt(
        mockHotelCardDetails?.hotel
          ?.price
      ) *
        mockHotelCardDetails?.totalNights +
      ' AED'
  );
});

test('Checking `City` is to the props label name + hotl name', () => {
  let wrapped = mount(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelDetails
          {...mockHotelCardDetails}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    wrapped.find('.hotel-city').text()
  ).toEqual(
    'City: ' +
      mockHotelCardDetails?.hotel?.city
  );
});
