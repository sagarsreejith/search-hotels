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
