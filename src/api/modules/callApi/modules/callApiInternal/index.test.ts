import { AspidaResponse } from "aspida"
import { AxiosError } from "axios"

import { callApiInternal } from "@/api/modules/callApi/modules/callApiInternal/index"
import { AnyObject } from "@/shared/types/utils"

const successData = { data: [{ label: "北海道", id: "1" }] } as const
const mockApiSuccess = (res: AspidaResponse<unknown>) => () => Promise.resolve(res)
const mockApiError = (res: AxiosError | Error) => () => Promise.reject(res)

describe("callApiInternal", () => {
  describe("2XX response", () => {
    it("response success", async () => {
      const result = { status: "success", data: successData }
      const sampleAspidaRes: AspidaResponse<typeof successData> = {
        body: successData,
        status: 200,
        originalResponse: {},
        headers: {},
      }

      expect.assertions(1)
      const response = await callApiInternal(mockApiSuccess(sampleAspidaRes))
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
      const AspidaRes: AspidaResponse<AnyObject> = {
        body: {},
        status: 201,
        originalResponse: {},
        headers: {},
      }

      expect.assertions(1)
      const response = await callApiInternal(mockApiSuccess(AspidaRes))
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
