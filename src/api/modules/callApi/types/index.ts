import { AxiosResponse } from "axios"

export type ResponseSuccess<T> = {
  status: "success"
  data: T
}

export type ResponseError = {
  status: "error"
  data: ApiError
}

export type ApiError = {
  statusCode: number
  errorResponse: {
    message: string
    args: Array<string>
  }
}

export type ErrorResponse = {
  message: string
  args: Array<string>
}

export type Status200Error = {
  statusCode: string
  message: string
  description: string
}

export type ApiResult<T> = ResponseSuccess<T> | ResponseError

export type ApiErrorType = AxiosResponse | { status: number; data: ErrorResponse }
