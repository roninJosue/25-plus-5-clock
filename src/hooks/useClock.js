import {useState} from "react";

const useClock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const updateBreakLength = (newLength, direction) => {
    setBreakLength(newLength);
  };

  const updateSessionLength = (newLength, direction) => {
    setSessionLength(newLength);
  };

  return {
    breakLength,
    sessionLength,
    updateBreakLength,
    updateSessionLength,
  };
}

export default useClock;