/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** 地域単位、年単位の年齢構成のデータを返します。 */
  get: {
    query: {
      prefCode: string
      cityCode: string
      addArea?: string | undefined
    }

    status: 200

    /** Example response */
    resBody: {
      message: string | null
      result: Types.Population
    }
  }
}
