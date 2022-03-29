import { callApi } from "@/api/modules/callApi"
import { apiClient } from "@/api/resas/apiClient"
import { Population } from "@/libs/apiClient/resas/@types"

type GetPopulationResType = { message: string | null; result: Population }

export const getPopulation = async (code: string) => {
  const response = await callApi<GetPopulationResType>(() =>
    apiClient.api.v1.population.composition.perYear.get({
      query: { prefCode: code, cityCode: "-" },
    }),
  )

  return response
}
