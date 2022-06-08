import React from 'react'

export default function UpDown({up,down,ucb,dcb}) {
  return (
    <span>
        <button onClick={ucb}>{up} ^^^</button>  <button onClick={dcb}>{down} VVV</button>
    </span>
  )
}
