import { VFC } from "react"
import { Checkbox } from "@components/atoms/Checkbox"
import styled from "styled-components"
import { Prefectures } from "@/libs/apiClient/resas/@types"

type ChecklistType = {
  listData: Prefectures
}

export const ChecklistPopulation: VFC<ChecklistType> = (props) => {
  const { listData } = props
  console.log(listData)

  return (
    <Root>
      {listData.map(({ prefName, prefCode }, index) => (
        <CheckboxWrapper key={prefCode}>
          <Checkbox>{prefName}</Checkbox>
        </CheckboxWrapper>
      ))}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CheckboxWrapper = styled.div`
  margin: 0 10px;
`
