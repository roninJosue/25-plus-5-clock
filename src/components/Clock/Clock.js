import styled from "styled-components";
import Heading from "../Heading";
import Controls from "../Controls";

const WrappedClock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 200px;
  padding: 3rem;
`;

const Clock = () => {
  return (
    <WrappedClock>
      <Heading />
      <Controls />
    </WrappedClock>
  );
};

export default Clock;