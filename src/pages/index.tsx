import type { NextPage } from "next"

import { apiClient } from "@/api/resas/apiClient"
import { Home } from "@components/template/Home"

const getPref = async () =>
  await apiClient.api.v1.prefectures.get({
    config: {
      headers: {
        "X-API-KEY": "",
      },
    },
  })

const HomePage: NextPage = () => {
  const data = getPref()
  console.log(data)

  return (
    <div>
      <Home />
    </div>
  )
}

export default HomePage
