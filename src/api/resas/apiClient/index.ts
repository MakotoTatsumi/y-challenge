import axiosClient from "@aspida/axios"

import api from "@/libs/apiClient/resas/$api"

export const apiClient = api(axiosClient())
