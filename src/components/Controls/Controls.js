import React, {useContext} from "react";
import styled from "styled-components";
import LabelControl from "../LabelControl";
import ClockContext from "../../context/ClockContext";

const WrappedControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Controls = () => {
  const {
    breakLength,
    sessionLength,
    incrementBreakLength,
    incrementSessionLength,
    decrementBreakLength,
    decrementSessionLength,
  } = useContext(ClockContext);
  return(
    <WrappedControls>
      <LabelControl
        label={'Break Length'}
        value={breakLength}
        id={'break-label'}
        buttonIdUp={'break-increment'}
        buttonIdDown={'break-decrement'}
        idValue={'break-length'}
        increment={incrementBreakLength}
        decrement={decrementBreakLength}
      />
      <LabelControl
        label={'Session Length'}
        value={sessionLength}
        id={'session-label'}
        buttonIdUp={'session-increment'}
        buttonIdDown={'session-decrement'}
        idValue={'session-length'}
        increment={incrementSessionLength}
        decrement={decrementSessionLength}
      />
    </WrappedControls>
  )
}

export default React.memo(Controls);