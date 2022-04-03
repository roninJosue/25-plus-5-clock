import styled from "styled-components";
import {FaArrowDown, FaArrowUp} from "react-icons/fa"

const Style = styled.div`
  display: flex;
  flex-direction: column;
`

const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`

const ArrowButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  background-color: transparent;
`

const LabelControl = ({label, value, id, buttonIdUp, buttonIdDown, idValue}) => (
  <Style>
    <div id={id}>{label}</div>
    <Arrows>
      <ArrowButton id={buttonIdUp}>
        <FaArrowUp />
      </ArrowButton>
      <div id={idValue}>{value}</div>
      <ArrowButton id={buttonIdDown}>
        <FaArrowDown />
      </ArrowButton>
    </Arrows>
  </Style>
)

export default LabelControl;