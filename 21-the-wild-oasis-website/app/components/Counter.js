'use client'
import React, { useState } from 'react'


export default function Counter({data}) {
const [count, setCount] = useState(0)


  return (
    <div>
      <button onClick={() => setCount(c=> c+1)}>{count}</button>
    </div>
  )
}
 