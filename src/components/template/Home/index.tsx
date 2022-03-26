import styled from "styled-components"

import { sample } from "@utils/sample"

export function Home() {
  sample()

  return (
    <Root>
      <Inner>Hoge</Inner>
    </Root>
  )
}

const Root = styled.div`
  padding: 20px;
  margin: 100px;
  border: 1px solid black;
`

const Inner = styled.div`
  font-size: 20px;
  font-weight: bold;
`
