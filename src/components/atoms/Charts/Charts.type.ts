import { CheckedDataType } from "@components/template/Home/hooks/useChartData/types"

export type ChartsType = {
  data: ChartsDataType[]
  checked: CheckedDataType[]
}

type ChartsDataType = {
  [key: string]: string | number
}
