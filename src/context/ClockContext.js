import { createContext } from "react"

const ClockContext = createContext({
  breakLength: 5,
  sessionLength: 25,
  timer: 25,
  isSession: true,
  timerType: "Session",
  incrementSessionLength: () => {},
  decrementSessionLength: () => {},
  incrementBreakLength: () => {},
  decrementBreakLength: () => {},
  handleStartStop: () => {},
  formatTime: () => {},
  resetTimer: () => {},
})

export default ClockContext