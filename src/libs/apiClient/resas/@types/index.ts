/* eslint-disable */
export type Prefectures = {
  prefCode: string
  prefName: string
}[]

export type Population = {
  boundaryYear: number
  data: {
    year: number
    value: number
  }[]
}

export type PopulationQuery = {
  prefCode: number
  cityCode: string
  addArea?: string | undefined
}
