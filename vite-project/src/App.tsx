import "./App.css";
// import { useRef, useEffect } from 'react';

import FocusedInputElement from "./components/InputElement";
import ColorSelector from "./components/colorSelector";
import ButtonWithCount from "./components/countButton";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/thirdPage";

function App() {
  return (
    <div className="wrapper">
      <div>
        <FocusedInputElement />
      </div>
      <div>
        <ButtonWithCount />
      </div>
      <div>
        <ColorSelector />
      </div>
      <div>
        <SecondPage />
      </div>
      <div>
        <ThirdPage />
      </div>
  
    </div>
  );
}

export default App;
