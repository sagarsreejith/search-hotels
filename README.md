## Hotel Search

The main goal of the project is, to create a sample project in [React](https://reactjs.org/) with typscript. Based on user date range input, fetch `Hotel` list from mocky API and store the result in the `redux-store`.

![Project Screenshot](/src/__mocks__/screens/application_screen_shot_desktop.png)

---
## Libraries used in this project

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
- [Redux Persist](https://www.npmjs.com/package/redux-persist)
- [Moment.js](https://momentjs.com/)
- [Sass](https://sass-lang.com/)

---
## Table of contents
### [Usage](#usage)
### [Project folder structure](#projectfolderstructure)
### [Implementation](#implementation)
---
## Usage
User can able to search `hotels` based on the `input date` range. API response user can filter based on `hotel name` and its `price`. Use will have tow sortin option over the hotel list. User can either sort the hotel list by `Sort by Name` nor `Sort by Price` in `ascending order`. Based on the input range, have to notify the user `Total Nights` (for eg: lets say user chose from: 12-05-2021 to: 17-05-2021 the the `Total Nights` will shown as `5`);
    
Based on these two `dates inputs` app will perform fetch data from mocky API. After getting successfull response, the data stored in the `redux-store`. Baseed on the store hotel list will show.

---
## Project Folder Structure

    -- docs
    -- public
        -- assets
    -- src
        -- __mocks__
        -- actions
        -- components
        -- helpers
        -- reducers
        -- scss
        -- services
        -- types
---
## Implementation
### App initial state  

#### initialState.ts

`initialState.ts` defines the `initial state` of the application.

``` ts

import { AppState } from "./types/state";

/**
 * This will be the application initial state
 */
export const InitialState: AppState = {
  isLoading: false, /* based in the value show the loader*/
  fromDate: '', /* based on input selection this value will be filled and stored*/
  toDate: '', /* based on input selection this value will be filled and stored*/
  hotelList: [], /* based on API response this array will be filled and stored*/
  filters: { /* based on the filter selection this object will be filled and stored*/
    hotelName: '',
    hotelPrice: '',
  },
  sortBy: { /* based on sort selection this value will be filled and stored*/
    name: false,
    price: false,
  },
  totalNumberOfNigts: 0, /* based on fromDate input and toDate input selection this value will be  caluculated and stored*/
  error: { /* This will use to store, if the network call failed */
    hasError: false,
    message: 'Please try after some time!'
  }

};

```

#### store.ts
`Redux persist` takes app Redux state object and save it to `Persistence storage`. This wrap your app’s root reducers and pass it to the persistStore function it ensures your redux state is stored to persisted storage whenever it changes. `Redux Thunk middleware` allows us to `write action creators` that return a function instead of an action. The `thunk` can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters. `persistConfig` sorage we are using `localforage`.

 ``` ts

 import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import localforage from 'localforage';
import { rootReducer } from './reducers/RootReducer';
const persistConfig = {
  key: 'root',
  storage: localforage,
};
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

 ```
The`rootAction` action creator will handlle the `api` call and read from localstore operations and the reullt will dispatch to `rootReducer` with appropriate `action.type` and `action.payload`.

Finally the reducer will change the `state` based on `type` and `payload` values.
#### index.tsx

```ts

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

```

### Searchform.tsx

The below mentioneed input componet will be called the api based on the date input field filled. For date manipulation project is using `Moment.js`.
``` ts

import {
  ChangeEvent,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { getHotelList } from '../../../actions/RootActions';
import { APP_CONSTANTS } from '../../../appConstants';
import {
  addDays,
  getToday,
  toDateIsVaid,
} from '../../../helpers';
import {
  ActionsEnum,
  AppState,
} from '../../../types';
import './SearchForm.scss';

/**
 * SearchFrom, is the definition of our inpuit component,
 * which will be used to select the date range type 
 * and trigger search.
 * 
 * @param {AppState} appState - first param
 * 
 * @return {JSX.Element}
 */
export const SearchFrom = (
  appState: AppState
) => {
  const dispatch = useDispatch();
  const fromDate = appState?.fromDate
    ? appState.fromDate
    : getToday();
  const toDate = appState?.toDate
    ? appState.toDate
    : addDays(appState.fromDate, 1);

  useEffect(() => {
    setToDate();
  }, [fromDate]);

  /**
   *
   * `setToDate` function will  set the todate
   * based on fromDate.
   *
   * @returns {void}
   *
   */
  const setToDate = (): void => {
    if (
      !toDateIsVaid(
        appState.fromDate,
        appState.toDate
      )
    )
      dispatch({
        type:
          ActionsEnum.UPDATE_TO_DATE,
        payload: {
          toDate: addDays(
            appState.fromDate,
            1
          ),
        },
      });
  };

  /**
   *
   * `updateFromDate` function will  set the fromDate
   * based on date input value.
   *
   * @param {ChangeEvent<HTMLInputElement>} event as first param
   *
   * @returns {void}
   *
   */
  const updateFromDate = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch({
      type:
        ActionsEnum.UPDATE_FROM_DATE,
      payload: {
        fromDate: event?.target?.value,
      },
    });
  };

  /**
   *
   * `updateTotDate` function will  set the todate
   * based on date input value.
   *
   * @param {ChangeEvent<HTMLInputElement>} event as first param
   *
   * @returns {void}
   *
   */
  const updateTotDate = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch({
      type: ActionsEnum.UPDATE_TO_DATE,
      payload: {
        toDate: event?.target?.value,
      },
    });
  };

  /**
   *
   * `triggerSearch` function will dispatch an event
   * for triggering api call.
   *
   * @returns {void}
   *
   */
  const triggerSearch = (): void => {
    dispatch(
      getHotelList(
        appState?.fromDate,
        appState?.toDate
      )
    );
  };

  return (
    <div className='search-container'>
      <div>
        <span>
          {APP_CONSTANTS.SEARCH.FROM}
        </span>
        <input
          type='date'
          id='start'
          name='from-date'
          value={fromDate}
          onChange={updateFromDate}
          min='2021-05-05'
          max='2021-12-31'
        ></input>
      </div>
      <div>
        <span>
          {APP_CONSTANTS.SEARCH.TO}
        </span>{' '}
        <input
          type='date'
          id='end'
          name='to-date'
          value={toDate}
          onChange={updateTotDate}
          readOnly={
            fromDate ? false : true
          }
          min={fromDate}
          max='2021-12-31'
        ></input>
      </div>
      <div>
        <input
          disabled={
            !toDateIsVaid(
              appState.fromDate,
              appState.toDate
            )
          }
          type='button'
          value='Search'
          onClick={triggerSearch}
        />
      </div>
    </div>
  );
};


```

Search button only enable when the datee condition satisfies. If the search `triggered`, then we will disactch an action to the action creators with user date range selection. 

``` ts

import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { getHotels } from '../services/Api';
import {
  ActionsEnum,
  ActionType,
  Filters,
  GenericApiResponse,
  Hotel,
} from '../types';

/**
 *
 * `getDataFromApi` action creator dipatch
 * afunction to the rootReducer.
 *
 * @param {string} searchText - first input as string
 * @param {string} searchType - second input as string
 *
 * @return will dipatch an event
 * to reducers for changing the sate.
 *
 */
export const getHotelList = (
  fromDate: string,
  toDate: string
) => async (
  dispatch: Dispatch<ActionType>
) => {
  isShowLoader(dispatch, true);
  dispatch({
    type: ActionsEnum.UPDATE_HOTEL_LIST,
    payload: {
      hotelList: [],
    },
  });
  try {
    const apiResponse = (await getHotels()) as AxiosResponse<
      GenericApiResponse<Hotel[]>
    >;
    const hotelList = eval(
      apiResponse.data.toString()
    );
    dispatch({
      type:
        ActionsEnum.UPDATE_HOTEL_LIST,
      payload: {
        hotelList,
        fromDate: fromDate,
        toDate: toDate,
      },
    });
    isShowLoader(dispatch, false);
  } catch (e) {
    isShowLoader(dispatch, false);
    dispatch({
      type: ActionsEnum.NETWORK_ERROR,
      payload: null,
    });
  }
};

/**
 *
 * `updateFilters` action creator dipatch
 * afunction to the rootReducer.
 *
 * @param {Filters} filters - first input as string
 *
 * @return will dipatch an event to
 * reducers for changing the sate.
 *
 */
export const updateFilters = (
  filters: Filters
) => async (
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: ActionsEnum.UPDATE_FILTERS,
    payload: {
      filters: {
        hotelName: filters?.hotelName,
        hotelPrice: filters?.hotelPrice,
      },
    },
  });
};

/**
 *
 * `updateSortBy` action creator dipatch
 * a function to the rootReducer.
 *
 * @param {string} key - first input as string
 *
 * @return will dipatch an event to
 * reducers for changing the sate.
 *
 */
export const updateSortBy = (
  key: string
) => async (
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: ActionsEnum.UPDATE_SORT_BY,
    payload: {
      sortBy: {
        name:
          key === 'name' ? true : false,
        price:
          key === 'price'
            ? true
            : false,
      },
    },
  });
};

/**
 *
 * `isShowLoader` action creator dipatch
 * a function to the rootReducer.
 *
 *@param {Dispatch<ActionType>} dispatch - first input as string
 * @param {boolean} loaderStatus - first input as string
 *
 * @return will dipatch an event
 * to reducers for changing the sate.
 *
 */
const isShowLoader = (
  dispatch: Dispatch<ActionType>,
  loaderStatus: boolean
) => {
  dispatch({
    type: ActionsEnum.SHOW_LOADER,
    payload: {
      loaderStatus,
    },
  });
};

```
Based on the action finction its will dispath an event to the reducer ans update the state.

``` ts

import { ActionsEnum } from '../types';
import { InitialState } from '../initialSate';
import { AppState } from '../types/state';
import {
  filterHotelListbasedOnAvailableDate,
  getNumberOfNight,
} from '../helpers';
/**
 *
 * `rootReducer` will handle the state manupoulatuon.
 *
 */
export const rootReducer = (
  state: AppState = InitialState,
  action: any
): AppState => {
  switch (action.type) {
    case ActionsEnum.NETWORK_ERROR: {
      return {
        ...state,
        isLoading: false,
        hotelList: [],
        error: {
          hasError: true,
          message:
            'Please try After Some time',
        },
      };
    }

    case ActionsEnum.UPDATE_FROM_DATE: {
      return {
        ...state,
        fromDate:
          action.payload.fromDate,
      };
    }

    case ActionsEnum.UPDATE_TO_DATE: {
      return {
        ...state,
        toDate: action?.payload?.toDate,
      };
    }

    case ActionsEnum.UPDATE_HOTEL_LIST: {
      return {
        ...state,
        hotelList: filterHotelListbasedOnAvailableDate(
          action?.payload?.hotelList,
          state?.fromDate
        ),
        filters: {
          hotelName: '',
          hotelPrice: '',
        },
        sortBy: {
          name: false,
          price: false,
        },
        totalNumberOfNigts: getNumberOfNight(
          action?.payload?.fromDate,
          action?.payload?.toDate
        ),
      };
    }

    case ActionsEnum.UPDATE_FILTERS: {
      return {
        ...state,
        filters: {
          hotelName:
            action?.payload?.filters
              ?.hotelName,
          hotelPrice:
            action?.payload?.filters
              ?.hotelPrice,
        },
      };
    }

    case ActionsEnum.UPDATE_SORT_BY: {
      return {
        ...state,
        sortBy: {
          name:
            action?.payload?.sortBy
              ?.name,
          price:
            action?.payload?.sortBy
              ?.price,
        },
      };
    }

    case ActionsEnum.SHOW_LOADER: {
      return {
        ...state,
        isLoading:
          action?.payload?.loaderStatus,
      };
    }

    default:
      return state;
  }
};

```

Once `Store` updated the components will re-render with its conditions ans updated `state` values.

All Objects have its on `model` can find in the `types` folder under `src` directory. Below you can find the state object modeling.

# state.ts
``` ts

import { ApiError } from './api';
import {
  Filters,
  Hotel,
  Sort,
} from './hotel';

/**
 *
 * `AppState` will define the model of our global application sate
 *
 */
export interface AppState {
  isLoading: boolean;
  error: ApiError;
  fromDate: string;
  toDate: string;
  hotelList: Hotel[];
  filters: Filters;
  sortBy: Sort;
  totalNumberOfNigts: number;
}

```

`Unit Tests` are done with jest configuration file you can find below.

# setupTests.ts
``` ts

import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

```

`API Call` i just mocked the response and axios and done it. you can find the code below.

# axios.ts
``` ts

import { AxiosResponse } from 'axios';
import {
  GenericApiResponse,
  Hotel,
} from '../types';
import { hotelData } from './mock_data';
/**
 *
 * This is a common test for checking the API call with mock
 * requst anb response
 *
 */
export default {
  get: jest.fn(() =>
    Promise.resolve<
      AxiosResponse<GenericApiResponse<Hotel[]>>
    >({
      config: {},
      headers: '',
      status: 200,
      statusText: 'Suceess',
      request: '',
      data: {
        status: 200,
        data: [
          hotelData
        ],
      },
    })
  ),
};

```
One component test case you can find below.

# DeetailsCard.test.ts
``` ts
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


```


The project documentation done with the help of `typedoc`.[typedoc](https://typedoc.org/)

---

Handling environment for api calls is seprated in a file.

# env.ts

``` ts

/**
 *
 * `apiBaseUrl` exports apiBaseUrl for network call.
 *
 */
export const apiBaseUrl: string =
  'https://www.mocky.io/v2';

/**
 *
 * `apiHeaders` exports Axios API header for calling API
 *
 */
export const apiHeaders = {
    'Content-type': 'application/json'
};

/**
 *
 * `apiUrls` const exports apiUrl.
 *
 */
export const apiUrls = {
  listOfHotels: `${apiBaseUrl}/5eb8fcb12d0000d088357f2a`,
};


```

calling api with endpoint giving below

# Api.ts

``` ts

import axios from 'axios';
import { apiHeaders, apiUrls } from '../env';
import {
  GenericApiResponse,
  Hotel,
} from '../types';

/**
 *
 * Async function will call the hotel list API.
 *
 *
 * @retruns Promise<GenericApiResponse<Hotel[]>>>
 */
export const getHotels = async () => {
  return axios.get<
    GenericApiResponse<Hotel[]>
  >(`${apiUrls.listOfHotels}`, {
    headers: apiHeaders,
  });
};


```

## Installation
  ### Prerequisite
    -- Node.js
    -- npm

In the project directory, you can run: 
 ### clone the repo
>git clone `repo-url`

### Install npm packages
>npm i

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

![Project Screenshot](/src/__mocks__/screens/unit-test.png)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---
