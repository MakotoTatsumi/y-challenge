import { apiClient } from "@/api/resas/apiClient"

export const getPrefectureApi = () => {
  return apiClient.api.v1.prefectures.get()
}
