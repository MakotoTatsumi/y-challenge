import React, { VFC } from "react"
import { useMediaQuery } from "react-responsive"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import styled from "styled-components"

import { LEGEND_STYLE_PC, LEGEND_STYLE_SP } from "@components/atoms/Charts/Charts.const"
import { ChartsType } from "@components/atoms/Charts/Charts.type"

export const Charts: VFC<ChartsType> = (props) => {
  const { data, checked } = props
  const isMobile = useMediaQuery({
    query: "(max-width: 834px)",
  })

  const legendStyleProps = isMobile ? LEGEND_STYLE_SP : LEGEND_STYLE_PC

  return (
    <Root>
      <ResponsiveContainer width={"100%"} height={400}>
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
          <Legend {...legendStyleProps} wrapperStyle={{ padding: "20px" }} />
          {checked.map((list) => {
            return (
              <Line
                key={list.prefCode}
                type="monotone"
                dataKey={list.prefName}
                stroke={list.colorCode}
                activeDot={{ r: 8 }}
              />
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
