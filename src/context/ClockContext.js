import { createContext } from "react"

const ClockContext = createContext({
  breakLength: 5,
  sessionLength: 25,
  timer: 25,
  isSession: true,
  timerType: "Session",
  beepRef: null,
  incrementSessionLength: null,
  decrementSessionLength: null,
  incrementBreakLength: null,
  decrementBreakLength: null,
  handleStartStop: null,
  formatTime: null,
  resetTimer: null,
})

export default ClockContext