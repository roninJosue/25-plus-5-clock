import {FaPlay, FaPause} from "react-icons/fa";
import {HiOutlineRefresh} from "react-icons/hi";
import styled from "styled-components";

const ButtonsWrapped = styled.div`
  margin-top: 20px;
  display: flex;
  width: 250px;
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
  return (
    <ButtonsWrapped>
      <Button onClick={() => console.log('adasd')}>
        <FaPlay/>
      </Button>
      <Button>
        <FaPause/>
      </Button>
      <Button>
        <HiOutlineRefresh/>
      </Button>
    </ButtonsWrapped>
  )
}

export default Buttons;