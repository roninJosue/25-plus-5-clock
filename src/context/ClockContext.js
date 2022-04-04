import { createContext } from "react"

const ClockContext = createContext({
  breakLength: 5,
  sessionLength: 25,
  timer: 25,
  incrementSessionLength: () => {},
  decrementSessionLength: () => {},
  incrementBreakLength: () => {},
  decrementBreakLength: () => {},
  handleStartStop: () => {},
  formatTime: () => {},
})

export default ClockContext