import { createContext } from "react"

const ClockContext = createContext({
  breakLength: 5,
  sessionLength: 25,
  updateSessionLength: () => {},
  updateBreakLength: () => {},
})

export default ClockContext