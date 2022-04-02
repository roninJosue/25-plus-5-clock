import styled from "styled-components";

const Style = styled.div`
  display: flex
`
const LabelControl = ({label, value}) => (
  <Style>
    <div>{label}</div>
    <div>{value}</div>
  </Style>
)

export default LabelControl;