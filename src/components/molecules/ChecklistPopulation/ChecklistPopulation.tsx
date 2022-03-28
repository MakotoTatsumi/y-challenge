import { VFC } from "react"
import styled from "styled-components"

import { Prefectures } from "@/libs/apiClient/resas/@types"
import { Checkbox } from "@components/atoms/Checkbox"

type ChecklistType = {
  listData: Prefectures
}

export const ChecklistPopulation: VFC<ChecklistType> = (props) => {
  const { listData } = props
  console.log(listData)

  return (
    <Root>
      {listData.map(({ prefName, prefCode }) => (
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
