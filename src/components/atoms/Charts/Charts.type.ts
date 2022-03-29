export type ChartsType = {
  data: ChartsDataType[]
  checked: { prefCode: string; prefName: string }[]
}

type ChartsDataType = {
  [key: string]: string | number
}
