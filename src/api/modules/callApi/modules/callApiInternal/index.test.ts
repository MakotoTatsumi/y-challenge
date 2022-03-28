import { AxiosError, AxiosResponse } from "axios"

import { callApiInternal } from "@/api/modules/callApi/modules/callApiInternal/index"
import { AnyObject } from "@/shared/types/utils"

const successData = { data: [{ label: "北海道", id: "1" }], status: 200 } as const
const mockApiSuccess = (res: AxiosResponse) => () => Promise.resolve(res)
const mockApiError = (res: AxiosError | Error) => () => Promise.reject(res)

describe("callApiInternal", () => {
  describe("2XX response", () => {
    it("response success", async () => {
      const result = { status: "success", data: successData }
      const sampleAxiosRes: AxiosResponse<typeof successData> = {
        data: successData,
        status: 200,
        statusText: "",
        headers: {},
        config: {},
      }

      expect.assertions(1)
      const response = await callApiInternal(mockApiSuccess(sampleAxiosRes))
      expect(response).toEqual(result)
    })

    it("2XX error", async () => {
      const result = {
        status: "error",
        data: {
          statusCode: 201,
          errorResponse: {
            args: [],
            message: "OtherError",
          },
        },
      }
      const axiosRes: AxiosResponse<AnyObject> = {
        data: {},
        status: 201,
        statusText: "",
        headers: {},
        config: {},
      }

      expect.assertions(1)
      const response = await callApiInternal(mockApiSuccess(axiosRes))
      expect(response).toEqual(result)
    })
  })

  describe("Error Response", () => {
    it("isAxiosError, too many Request", async () => {
      const axiosRes: AxiosError = {
        name: "",
        message: "",
        config: {},
        isAxiosError: true,
        toJSON: () => ({}),
        response: {
          data: {
            message: null,
          },
          status: 429,
          statusText: "",
          headers: {},
          config: {},
        },
      }

      const result = {
        status: "error",
        data: {
          statusCode: 429,
          errorResponse: {
            args: [],
            message: "OtherError",
          },
        },
      }

      expect.assertions(1)
      const response = await callApiInternal(mockApiError(axiosRes))
      expect(response).toEqual(result)
    })

    it("Network Error", async () => {
      const result = {
        status: "error",
        data: {
          statusCode: 500,
          errorResponse: { message: "NetworkError", args: [] },
        },
      }

      expect.assertions(1)
      const response = await callApiInternal(mockApiError(new Error("Network Error")))
      expect(response).toEqual(result)
    })
  })
})
