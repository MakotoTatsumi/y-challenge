import { MESSAGE } from "@/api/modules/callApi/const/message"
import { makeAlertMessage } from "@/api/modules/callApi/modules/makeAlertMessage/index"
import { ResponseError, ResponseSuccess, Status200Error } from "@/api/modules/callApi/types"

describe("makeAlertMessage", () => {
  describe("Status200 Error", () => {
    it("400 Error", () => {
      const result: ResponseSuccess<string> = {
        status: "success",
        data: "400",
      }

      expect(makeAlertMessage(result)).toEqual(MESSAGE["400"])
    })

    it("403 Error", () => {
      const result: ResponseSuccess<Status200Error> = {
        status: "success",
        data: {
          statusCode: "403",
          message: "Forbidden.",
          description: "",
        },
      }

      expect(makeAlertMessage(result)).toEqual(MESSAGE["403"])
    })
  })

  describe("Other Error", () => {
    it("429 Error", () => {
      const result: ResponseError = {
        status: "error",
        data: {
          statusCode: 429,
          errorResponse: {
            args: [],
            message: "OtherError",
          },
        },
      }

      expect(makeAlertMessage(result)).toEqual(MESSAGE["OtherError"])
    })

    it("Network Error", () => {
      const result: ResponseError = {
        status: "error",
        data: {
          statusCode: 500,
          errorResponse: { message: "NetworkError", args: [] },
        },
      }

      expect(makeAlertMessage(result)).toEqual(MESSAGE["NetworkError"])
    })
  })
})
