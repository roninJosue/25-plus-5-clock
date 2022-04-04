import ClockContext from "./ClockContext";
import useClock from "../hooks/useClock";

const ClockContextProvider = (props) => {
  return (
    <ClockContext.Provider value={useClock()}>
      {props.children}
    </ClockContext.Provider>
  );
}

export default ClockContextProvider;