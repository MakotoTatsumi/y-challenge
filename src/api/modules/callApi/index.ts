import { AxiosResponse } from "axios"

import { callApiInternal } from "@/api/modules/callApi/modules/callApiInternal"
import { makeAlertMessage } from "@/api/modules/callApi/modules/makeAlertMessage"
import { ApiResult } from "@/api/modules/callApi/types"

/**
 * APICall時のエラー処理のためのラッパー関数
 * @param fn
 */
export const callApi = async <T>(fn: () => Promise<AxiosResponse>): Promise<ApiResult<T>> => {
  const result = await callApiInternal<T>(fn)
  const errorMessage = makeAlertMessage(result)
  if (errorMessage) alert(errorMessage)

  return result
}
