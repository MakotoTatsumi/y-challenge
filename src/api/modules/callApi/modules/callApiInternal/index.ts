import axios, { AxiosResponse } from "axios"

import { NETWORK_ERROR, SOMETHING_ERROR } from "@/api/modules/callApi/const/apiError"
import { ApiError, ApiErrorType, ApiResult } from "@/api/modules/callApi/types"

/**
 * errorのレスポンスを統一するための処理
 * @param error
 */
const asApiError = (error: ApiErrorType): ApiError => {
  return {
    statusCode: error.status || 500,
    errorResponse: error.data
      ? {
          message: typeof error.data === "string" ? error.data : error.data?.message || "OtherError",
          args: error.data.args || [],
        }
      : SOMETHING_ERROR,
  }
}

/**
 * fetch処理のerrorHandling
 * @param fn
 */
export const callApiInternal = async <T>(fn: () => Promise<AxiosResponse>): Promise<ApiResult<T>> => {
  try {
    const response = await fn()

    if (response.status / 100 === 2) return { status: "success", data: response.data as T }

    return { status: "error", data: asApiError(response) }
  } catch (error) {
    // axios error
    if (axios.isAxiosError(error) && error.response)
      return {
        status: "error",
        data: asApiError(error.response),
      }

    // other error
    return { status: "error", data: asApiError(NETWORK_ERROR) }
  }
}
