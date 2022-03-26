import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://opendata.resas-portal.go.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/population/composition/perYear'
  const GET = 'GET'

  return {
    /**
     * 地域単位、年単位の年齢構成のデータを返します。
     * @param option.body - https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
     * @returns OK
     */
    get: (option: { body: Methods0['get']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 地域単位、年単位の年齢構成のデータを返します。
     * @param option.body - https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
     * @returns OK
     */
    $get: (option: { body: Methods0['get']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
