import { VFC } from "react"
import styled from "styled-components"

import { StaticProps } from "@/pages/modules/getStaticProps"
import { Charts } from "@components/atoms/Charts"
import { ChecklistPopulation } from "@components/molecules/ChecklistPopulation"
import { useChartData } from "@components/template/Home/hooks/useChartData"

export const Home: VFC<StaticProps> = (props) => {
  const { prefectureData } = props
  const { handleClickCheckbox, chartData, checked } = useChartData()

  return (
    <Root>
      <Header>
        <Title>Title</Title>
      </Header>
      <CheckListArea>
        <CheckListTitle>都道府県</CheckListTitle>
        <ChecklistPopulation listData={prefectureData} handleClickCheckbox={handleClickCheckbox} />
      </CheckListArea>
      <Charts data={chartData} checked={checked} />
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
