import LabelControl from "../LabelControl";
import styled from "styled-components";

const WrappedControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Controls = () => {
  return(
    <WrappedControls>
      <LabelControl
        label={'Break Length'}
        value={'5'}
        id={'break-label'}
        buttonIdUp={'break-increment'}
        buttonIdDown={'break-decrement'}
        idValue={'break-length'}
      />
      <LabelControl
        label={'Session Length'}
        value={'25'}
        id={'session-label'}
        buttonIdUp={'session-increment'}
        buttonIdDown={'session-decrement'}
        idValue={'session-length'}
      />
    </WrappedControls>
  )
}

export default Controls;