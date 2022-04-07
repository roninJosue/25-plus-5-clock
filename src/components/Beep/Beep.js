import {useContext} from "react";
import ClockContext from "../../context/ClockContext";

const Beep = () => {
  const {beepRef} = useContext(ClockContext)
  return(
    <audio
      ref={beepRef}
      id='beep'
      preload='auto'
      src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
    />
  )
}

export default Beep;