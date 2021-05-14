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
import { HotelFilter } from './HotelFilters';
import renderer from 'react-test-renderer';
import {
  mockInitialState,
  mockStateWithDates,
} from '../../../__mocks__/mock_data';
import { mount } from 'enzyme';

it('is render correctly HotelFilter Comeponet', () => {
  const searchComponent = renderer
    .create(
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <HotelFilter
            {...mockStateWithDates}
          />
        </PersistGate>
      </Provider>
    )
    .toJSON();
  expect(
    searchComponent
  ).toMatchSnapshot();
});

test('Checking `Hotel Name Filter` is filled as `something`', () => {
  let wrapped = mount(
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <HotelFilter
          {...mockStateWithDates}
        />
      </PersistGate>
    </Provider>
  );
  expect(
    wrapped
      .find('#hotel-name')
      .getDOMNode<HTMLInputElement>()
      .value
  ).toEqual('something');
});
