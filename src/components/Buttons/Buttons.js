import {FaPlay, FaPause} from "react-icons/fa";
import {HiOutlineRefresh} from "react-icons/hi";
import styled from "styled-components";
import ClockContext from "../../context/ClockContext";
import {useContext} from "react";

const ButtonsWrapped = styled.div`
  margin-top: 20px;
  display: flex;
  width: 120px;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`

const Buttons = () => {
  const {handleStartStop, resetTimer} = useContext(ClockContext);
  return (
    <ButtonsWrapped>
      <Button onClick={handleStartStop} id='start_stop'>
        <FaPlay/>
        <FaPause/>
      </Button>
      <Button id='reset' onClick={resetTimer}>
        <HiOutlineRefresh/>
      </Button>
    </ButtonsWrapped>
  )
}

export default Buttons;