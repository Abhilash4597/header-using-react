import "./App.css";
import "./login.css";
import MainHeader from "./Component/MainHeader";
import Login from "./Component/Login";
import { useState } from "react";

function App() {
  const [handle, setHandle] = useState(false);

  function handleClick() {
    setHandle(!handle);
  }

  return (
    <div className="App">
      {handle ? (
        <Login handling={handleClick} />
      ) : (
        <MainHeader handling={handleClick} />
      )}
    </div>
  );
}

export default App;
