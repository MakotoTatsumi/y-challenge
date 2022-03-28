import type { NextPage } from "next"

import { StaticProps } from "@/pages/modules/getStaticProps"
import { Home } from "@components/template/Home"
export { getStaticProps } from "@/pages/modules/getStaticProps"

const HomePage: NextPage<StaticProps> = (props) => {
  return (
    <div>
      <Home {...props} />
    </div>
  )
}

export default HomePage
