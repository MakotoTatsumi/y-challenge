import { GetStaticProps } from "next"

import { apiClient } from "@/api/resas/apiClient"
import { Prefectures } from "@/libs/apiClient/resas/@types"

export type StaticProps = {
  prefectureData: Prefectures
}

// TODO: aspidaの型定義がおかしい? 確認する
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const { body } = await apiClient.api.v1.prefectures.get()
    return {
      props: {
        prefectureData: body.result,
      },
    }
  } catch {
    return {
      props: {
        prefectureData: [],
      },
    }
  }
}
