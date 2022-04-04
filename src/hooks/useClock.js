import {useEffect, useState} from "react";

const useClock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        if (timer < 1) {
          setIsRunning(r => !r);
          clearInterval(interval);
        } else {
          setTimer(t => t - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [breakLength, sessionLength, timer, isRunning]);


  const incrementBreakLength = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const decrementBreakLength = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const incrementSessionLength = () => {
    const newSessionLength = sessionLength + 1;
    if (sessionLength < 60) {
      setTimer(newSessionLength);
      setSessionLength(newSessionLength);
    }
  };

  const decrementSessionLength = () => {
    const newSessionLength = sessionLength - 1;
    if (sessionLength > 1) {
      setSessionLength(newSessionLength);
      setTimer(newSessionLength);
    }
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return {
    breakLength,
    sessionLength,
    timer,
    incrementSessionLength,
    decrementSessionLength,
    incrementBreakLength,
    decrementBreakLength,
    handleStartStop,
    formatTime
  };
}

export default useClock;