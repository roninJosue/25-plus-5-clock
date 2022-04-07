import {useContext} from "react";
import styled from "styled-components";
import ClockContext from "../../context/ClockContext";

const redColor = '#dc3545'
const whiteColor = '#ffffff'
const borderColor = '#ccc'

const Heading = styled.h2`
`

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 4px solid ${({lessThanAMinute}) => lessThanAMinute ? redColor : borderColor};
  padding: .625rem;
  width: 250px;
  color: ${({lessThanAMinute}) => lessThanAMinute ? redColor : whiteColor};
`

const TimeLeft = styled.div`
  font-size: 4em;
  font-weight: bold;
`

const Timer = () => {
  const {formatTime, timerType, timer} = useContext(ClockContext);
return (
  <TimerWrapper lessThanAMinute={timer < 60}>
    <Heading id='timer-label'>{timerType}</Heading>
    <TimeLeft id='time-left'>{formatTime()}</TimeLeft>
  </TimerWrapper> )
}
export default Timer