import React, { VFC } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import styled from "styled-components"

import { ChartsType } from "@components/atoms/Charts/Charts.type"

export const Charts: VFC<ChartsType> = (props) => {
  const { data, checked } = props

  return (
    <Root>
      <ResponsiveContainer width={"90%"} height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {checked.map((list) => {
            return (
              <Line key={list.prefCode} type="monotone" dataKey={list.prefName} stroke="#8884d8" activeDot={{ r: 8 }} />
            )
          })}
        </LineChart>
      </ResponsiveContainer>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  margin: 50px 0;
`
