/* eslint-disable */
export type Methods = {
  /** 都道府県情報を取得 */
  get: {
    status: 200

    /** OK */
    resBody: {
      result: {
        prefCode: number
        prefName: string
      }[]
    }

    resHeaders: {
    }
  }
}
