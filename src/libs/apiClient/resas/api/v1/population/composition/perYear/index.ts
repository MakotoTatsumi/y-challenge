/* eslint-disable */
export type Methods = {
  /** 地域単位、年単位の年齢構成のデータを返します。 */
  get: {
    status: 200

    /** OK */
    resBody: {
      result: {
        boundaryYear: number
        data: {
          label: string
          data: {
            year: number
            label: number
          }[]
        }[]
      }
    }

    /** https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html */
    reqBody: {
      /** 都道府県コード */
      prefCode: number
      /** 追加エリアコード（他地域と合算した値を取得する際に使用するパラメータ） */
      addArea?: string | undefined
    }
  }
}
