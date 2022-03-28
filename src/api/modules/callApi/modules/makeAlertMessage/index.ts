import { MESSAGE } from "@/api/modules/callApi/const/message"
import { ApiResult, Status200Error } from "@/api/modules/callApi/types"
import { isObject } from "@/shared/utils/isObject"

const successButError = ["400", "403", "404"]
/**
 * status200でエラーが返却されるため、そのチェック処理
 * https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
 * @param data
 */
const isStatus200Error = (data: unknown): data is Status200Error => {
  const isResStatusCode = typeof data === "string" && successButError.includes(data)
  const hasStatusCodeProperty = isObject(data) && "statusCode" in data
  return isResStatusCode || hasStatusCodeProperty
}

/**
 * errorMessage生成関数
 * @param data
 * @param status
 */
export const makeAlertMessage = <T>({ data, status }: ApiResult<T>): string => {
  if (status === "success") {
    if (isStatus200Error(data)) {
      const statusCode = typeof data === "string" ? data : data.statusCode
      return MESSAGE[statusCode || "OtherError"]
    }
    return ""
  }

  return MESSAGE[data.errorResponse.message || "OtherError"]
}
