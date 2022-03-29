/* eslint-disable */
export type Prefectures = {
  prefCode: string
  prefName: string
}[]

export type Population = {
  boundaryYear: number
  data: {
    label: string
    data: {
      year: number
      value: number
    }[]
  }[]
}
