/**
 *
 * `GenericApiResponse` is a
 * generic interface for API response.
 * @param T - fist input as generic
 * type. We can pass any interface insted of T
 *
 */
export interface GenericApiResponse<T> {
  status: number;
  data: T;
}

/**
 *
 * `ApiError` will define type 
 * of API Error object
 *
 */
export interface ApiError {
  hasError: boolean;
  message: string;
}
