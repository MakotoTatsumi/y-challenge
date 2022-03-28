import { VFC } from "react"
import styled from "styled-components"

import { StaticProps } from "@/pages/modules/getStaticProps"
import { ChecklistPopulation } from "@components/molecules/ChecklistPopulation"

export const Home: VFC<StaticProps> = (props) => {
  const { prefectureData } = props

  return (
    <Root>
      <Header>
        <Title>Title</Title>
      </Header>
      <CheckListArea>
        <CheckListTitle>都道府県</CheckListTitle>
        <ChecklistPopulation listData={prefectureData} />
      </CheckListArea>
    </Root>
  )
}

const Root = styled.div`
  padding: 20px;
  margin: 10px auto;
  max-width: 1200px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`

const CheckListArea = styled.div`
  margin: 20px auto;
  max-width: 800px;
`

const CheckListTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`
