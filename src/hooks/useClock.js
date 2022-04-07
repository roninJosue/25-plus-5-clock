import {useEffect, useState} from "react";

const INITIAL_BREAK_LENGTH = 1;
const INITIAL_SESSION_LENGTH = 1;
const INITIAL_TIMER_TYPE = "Session";
const INITIAL_TIMER = INITIAL_SESSION_LENGTH * 60;
const TIMER_VELOCITY = 300;

const useClock = () => {
  const [breakLength, setBreakLength] = useState(INITIAL_BREAK_LENGTH);
  const [sessionLength, setSessionLength] = useState(INITIAL_SESSION_LENGTH);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [isRunning, setIsRunning] = useState(false);
  const [timerSessionFinished, setTimerSessionFinished] = useState(false);
  const [timerType, setTimerType] = useState(INITIAL_TIMER_TYPE);

/*  useEffect(() => {
    if (isRunning && !timerSessionFinished) {
      const interval = setInterval(() => {
        if (timer < 1) {
          //playSound()
          clearInterval(interval);
          setIsRunning(r => !r);
          setTimerType('Break');
          setTimer( t => breakLength * 60);
          setTimerSessionFinished(r => !r);
        } else {
          console.log(timer)
          setTimer(t => t - 1);
        }
      }, TIMER_VELOCITY);
      return () => clearInterval(interval);
    }
  }, [breakLength, sessionLength, timer, isRunning]);*/

  useEffect(() => {
    if (timerSessionFinished) {
      //setTimerSessionFinished(r => !r);
      const interval = setInterval(() => {
        if (timer < 1) {
          console.log('end break');
          //playSound()
          setTimer(t => sessionLength * 60);
          setTimerSessionFinished(false);
          setTimerType(INITIAL_TIMER_TYPE)
          setSessionLength(INITIAL_SESSION_LENGTH);
          setBreakLength(INITIAL_BREAK_LENGTH);
          setIsRunning(true);
          clearInterval(interval);
        } else {
          console.log('timer break', timer);
          setTimer( t => t - 1);
        }
      }, TIMER_VELOCITY);
      return () => clearInterval(interval);
    }
  }, []);


  const incrementBreakLength = () => {
    if(!isRunning) {
      if (breakLength < 60) {
        setBreakLength(breakLength + 1);
      }
    }

  };

  const decrementBreakLength = () => {
   if (!isRunning) {
     if (breakLength > 1) {
       setBreakLength(breakLength - 1);
     }
   }
  };

  const incrementSessionLength = () => {
    if (!isRunning) {
      const newSessionLength = sessionLength + 1;
      if (sessionLength < 60) {
        setTimer(newSessionLength * 60);
        setSessionLength(newSessionLength);
      }
    }
  };

  const decrementSessionLength = () => {
   if (!isRunning) {
     const newSessionLength = sessionLength - 1;
     if (sessionLength > 1) {
       setSessionLength(newSessionLength);
       setTimer(newSessionLength * 60);
     }
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

  const playSound = () => {
    const audio = document.getElementById('beep');
    audio.play()
  }

  const resetTimer = () => {
    setSessionLength(INITIAL_SESSION_LENGTH);
    setBreakLength(INITIAL_BREAK_LENGTH);
    setTimer(INITIAL_TIMER);
    setIsRunning(false);
    setTimerType(INITIAL_TIMER_TYPE);
  };

  return {
    breakLength,
    sessionLength,
    timer,
    isRunning,
    timerType,
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