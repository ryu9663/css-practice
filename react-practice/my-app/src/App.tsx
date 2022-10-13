import "./App.css";
import RefInput from "./components/RefInput";

import StateInput from "./components/StateInput";
import useToast from "./hooks/useToast";

function App() {
  const { showToast } = useToast();

  return (
    <div className="App">
      <button onClick={() => showToast(false, "bye", 1000)}>토스트 빨강</button>
      <button onClick={() => showToast(true, "hi", 3000)}>토스트 파랑</button>
      <hr />
      <StateInput />
      <hr />
      <RefInput />
    </div>
  );
}

export default App;
