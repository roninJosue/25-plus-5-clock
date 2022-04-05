import styled from "styled-components";
import Clock from "./components/Clock";
import {GlobalStyles} from "./styles/GlobalStyles";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";
import ClockContextProvider from "./context/ClockContextProvider";
import Beep from "./components/Beep";

const Wrapped = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <ClockContextProvider>
      <GlobalStyles />
      <Wrapped>
        <Clock />
        <Timer />
        <Buttons />
        <Beep />
      </Wrapped>
    </ClockContextProvider>
  );
}

export default App;
