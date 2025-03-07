import { useState } from 'react'

export default function Dashboard() {
  const [counter, setCounter] = useState<any>(0)

  return (
    <div
      style={{
        minHeight: '45em',
        maxHeight: '45em',
        width: '100%',
        marginLeft: '4em',
      }}
    >
      <h1>Hello World!</h1>
    </div>
  )
}
