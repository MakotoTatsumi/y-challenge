import { ComponentProps, FC } from "react"
import styled from "styled-components"

export const Checkbox: FC<ComponentProps<"input">> = ({ children }) => {
  return (
    <StyledLabel>
      <StyledInput />
      {children}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

const StyledInput = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  cursor: pointer;
`
