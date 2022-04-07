import {useCallback, useEffect, useRef, useState} from "react";

const INITIAL_BREAK_LENGTH = 5;
const INITIAL_SESSION_LENGTH = 25;
const INITIAL_TIMER_TYPE = "Session";
const INITIAL_TIMER = INITIAL_SESSION_LENGTH * 60;
const TIMER_VELOCITY = 1000;

const useClock = () => {
  const [breakLength, setBreakLength] = useState(INITIAL_BREAK_LENGTH);
  const [sessionLength, setSessionLength] = useState(INITIAL_SESSION_LENGTH);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [isRunning, setIsRunning] = useState(false);
  const [timerSessionFinished, setTimerSessionFinished] = useState(false);
  const [timerType, setTimerType] = useState(INITIAL_TIMER_TYPE);
  const beepRef = useRef(null);

  useEffect(() => {
    if (isRunning && !timerSessionFinished) {
      const interval = setInterval(() => {
        if (timer === 2) playSound()
        if (timer === 0) {
          clearInterval(interval);
          setIsRunning(r => !r);
          setTimerType('Break');
          setTimer( breakLength * 60);
          setTimerSessionFinished(r => !r);
        } else {
          setTimer(t => t - 1);
        }
      }, TIMER_VELOCITY);
      return () => clearInterval(interval);
    }
  }, [breakLength, sessionLength, timer, isRunning, timerSessionFinished]);

  useEffect(() => {
    if (timerSessionFinished) {
      const interval = setInterval(() => {
        if (timer === 2) playSound()
        if (timer === 0) {
          setTimer(sessionLength * 60);
          setTimerSessionFinished(false);
          setTimerType(INITIAL_TIMER_TYPE)
          setSessionLength(sessionLength);
          setBreakLength(breakLength);
          setIsRunning(true);
          clearInterval(interval);
        } else {
          setTimer( t => t - 1);
        }
      }, TIMER_VELOCITY);
      return () => clearInterval(interval);
    }
  }, [timerSessionFinished, timer, sessionLength, breakLength, isRunning]);


  const incrementBreakLength = useCallback(() => {
    if(!isRunning) {
      if (breakLength < 60) {
        setBreakLength(breakLength + 1);
      }
    }

  }, [breakLength, isRunning]);

  const decrementBreakLength = useCallback(() => {
    if(!isRunning) {
      if (breakLength > 1) {
        setBreakLength(breakLength - 1);
      }
    }
  }, [breakLength, isRunning]);

  const incrementSessionLength = useCallback(() => {
    if (!isRunning) {
      const newSessionLength = sessionLength + 1;
      if (sessionLength < 60) {
        setTimer(newSessionLength * 60);
        setSessionLength(newSessionLength);
      }
    }
  }, [sessionLength, isRunning]);

  const decrementSessionLength = useCallback(() => {
    if (!isRunning) {
      const newSessionLength = sessionLength - 1;
      if (sessionLength > 1) {
        setSessionLength(newSessionLength);
        setTimer(newSessionLength * 60);
      }
    }
  }, [sessionLength, isRunning]);

  const handleStartStop = useCallback(() => {
    setIsRunning(!isRunning);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const playSound = () => {
    beepRef.current.play()
  }

  const resetTimer = () => {
    beepRef.current.pause();
    beepRef.current.currentTime = 0;
    setSessionLength(INITIAL_SESSION_LENGTH);
    setBreakLength(INITIAL_BREAK_LENGTH);
    setTimer(INITIAL_TIMER);
    setIsRunning(false);
    setTimerType(INITIAL_TIMER_TYPE);
    setTimerSessionFinished(false);
  };

  return {
    breakLength,
    sessionLength,
    timer,
    isRunning,
    timerType,
    beepRef,
    incrementSessionLength,
    decrementSessionLength,
    incrementBreakLength,
    decrementBreakLength,
    handleStartStop,
    formatTime,
    resetTimer
  };
}

export default useClock;