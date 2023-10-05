import { useState, useEffect } from "react"
const Counter = () => {
  const [count, setCount] = useState(30)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1)
      if (count === 0) {
        setCount(30)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [count])

  return <h1>{count}</h1>
}

export default Counter
