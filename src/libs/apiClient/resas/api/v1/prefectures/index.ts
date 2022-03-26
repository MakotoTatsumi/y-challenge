/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 都道府県情報を取得 */
  get: {
    status: 200

    resBody: {
      message: string | null
      result: Types.Prefectures[]
    }
  }
}
