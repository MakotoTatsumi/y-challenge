import { VFC } from "react"
import styled from "styled-components"

import { Prefectures } from "@/libs/apiClient/resas/@types"
import { Checkbox } from "@components/atoms/Checkbox"
import { AnyFunction } from "@shared/types/utils"

type ChecklistType = {
  listData: Prefectures
  handleClickCheckbox: AnyFunction
}

export const ChecklistPopulation: VFC<ChecklistType> = (props) => {
  const { listData, handleClickCheckbox } = props

  return (
    <Root>
      {listData.map((list) => (
        <CheckboxWrapper key={list.prefCode}>
          <Checkbox onClick={() => handleClickCheckbox(list)}>{list.prefName}</Checkbox>
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
