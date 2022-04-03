import styled from "styled-components";
import Clock from "./components/Clock";
import {GlobalStyles} from "./styles/GlobalStyles";

const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapped>
        <Clock />
      </Wrapped>
    </>
  );
}

export default App;
