import { userEvent, within } from "@storybook/testing-library"

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { Checkbox } from "."

type CheckboxStoryObj = ComponentStoryObj<typeof Checkbox>

const Meta: ComponentMeta<typeof Checkbox> = {
  title: "atoms/checkbox",
  component: Checkbox,
}

export const Default: CheckboxStoryObj = {
  args: {
    children: "東京都",
  },
}

export const Checked: CheckboxStoryObj = {
  args: {
    children: "東京都",
  },
  play: (context) => {
    const ui = within(context.canvasElement)
    const target = ui.getByRole("checkbox")
    userEvent.click(target)
  },
}

export default Meta
