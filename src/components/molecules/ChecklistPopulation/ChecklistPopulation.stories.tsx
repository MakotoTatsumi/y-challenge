import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { ChecklistPopulation } from "."

type CheckboxStoryObj = ComponentStoryObj<typeof ChecklistPopulation>

const Meta: ComponentMeta<typeof ChecklistPopulation> = {
  title: "molecules/ChecklistPopulation",
  component: ChecklistPopulation,
}

export const Default: CheckboxStoryObj = {
  args: {
    listData: Array.from(new Array(10)).map((_, index) => ({ prefName: "北海道", prefCode: `${index}` })),
  },
}

export default Meta
