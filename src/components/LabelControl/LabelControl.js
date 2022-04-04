import styled from "styled-components";
import * as FAIcons from "react-icons/fa";

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

const Label = styled.label`
  font-size: 1.5em;
  margin-top: 10px;
`

const StyledValue = styled.div`
  font-size: 1.5em;
`

const LabelControl = (
  {
    label,
    value,
    id,
    buttonIdUp,
    buttonIdDown,
    idValue,
    increment,
    decrement
  }
) => {

  return(
    <Style>
      <Label id={id}>{label}</Label>
      <Arrows>
        <Button
          onClick={increment}
          id={buttonIdUp}
          icon='FaArrowUp'
        />
        <Value value={value} idValue={idValue} />
        <Button
          onClick={decrement}
          id={buttonIdDown}
          icon='FaArrowDown'
        />
      </Arrows>
    </Style>
  )
}

const Value = ({value, idValue}) => {
  return(
    <StyledValue id={idValue}>{value}</StyledValue>
  )
}

const Button = ({icon, id, onClick}) => {
  const Icon = FAIcons[icon];

  return(
    <ArrowButton onClick={onClick} id={id}>
      <Icon color={'#fff'} />
    </ArrowButton>
  )
}

export default LabelControl;