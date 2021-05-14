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
