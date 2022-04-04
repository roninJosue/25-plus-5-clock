import {useContext} from "react";
import styled from "styled-components";
import ClockContext from "../../context/ClockContext";

const Heading = styled.h2`
`

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 4px solid #ccc;
  padding: .625rem;
  width: 250px;
`

const TimeLeft = styled.div`
  font-size: 4em;
  font-weight: bold;
`

const Timer = () => {
  const {formatTime} = useContext(ClockContext);
return (
  <TimerWrapper>
    <Heading id='timer-label'>Session</Heading>
    <TimeLeft id='time-left'>{formatTime()}</TimeLeft>
  </TimerWrapper> )
}
export default Timer