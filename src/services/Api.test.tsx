import { AxiosResponse } from 'axios';
import mockAxios from '../__mocks__/axios';
import {
  GenericApiResponse,
  Hotel,
} from '../types';
import { getHotels } from './Api';
import { hotelData } from '../__mocks__/mock_data';
/**
 *
 * This test will mock the API call and check the mock result.
 *
 */
it('get mocked API reesult', async () => {
  mockAxios.get.mockImplementationOnce(
    () =>
      Promise.resolve<
        AxiosResponse<
          GenericApiResponse<Hotel[]>
        >
      >({
        config: {},
        headers: {
          'Content-type': 'application/json'
        },
        status: 200,
        statusText: 'Success',
        request: '',
        data: {
          status: 200,
          data: [hotelData],
        },
      })
  );

  const response = await getHotels();
  const hotels = (await response?.data
    ?.data) as Hotel[];
  expect(
    hotels?.filter(
      (e) =>
        e.name.indexOf(
          'Kempinski Hotel Mall of the Emirates'
        ) >= 0
    )?.length
  ).toBeGreaterThan(0);
  expect(
    mockAxios.get
  ).toHaveBeenCalledTimes(1);
});
