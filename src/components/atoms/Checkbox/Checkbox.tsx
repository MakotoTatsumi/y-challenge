import { ComponentPropsWithoutRef, FC } from "react"
import styled from "styled-components"

export const Checkbox: FC<Omit<ComponentPropsWithoutRef<"input">, "type">> = ({ children, ...props }) => {
  return (
    <StyledLabel>
      <StyledInput {...props} />
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
