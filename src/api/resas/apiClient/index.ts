import axiosClient from "@aspida/axios"
import axios from "axios"

import api from "@/libs/apiClient/resas/$api"

axios.defaults.headers.common["X-API-KEY"] = process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY || ""

export const apiClient = api(axiosClient(axios))
