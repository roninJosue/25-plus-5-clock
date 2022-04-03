import styled from "styled-components";
import Clock from "./components/Clock";
import {GlobalStyles} from "./styles/GlobalStyles";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";

const Wrapped = styled.main`
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
        <Timer />
        <Buttons />
      </Wrapped>
    </>
  );
}

export default App;
