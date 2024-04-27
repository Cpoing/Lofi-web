import { useState } from "react";
import "./App.css";

function App() {
  const [video, setVideo] = useState(``);

  const lofi1 = () => {};

  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <div className="logo">LofiWave</div>
        <div className="radioListContainer"></div>
      </div>

      <div className="audioControlContainer"></div>
    </div>
  );
}

export default App;
