import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:3001/register", {
      username: username,
      password: password,
    }).then(() => {
      console.log("Success");
    });
  };

  return (
    <div className="App">
      <div>
        <label>Username: </label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <button onClick={addUser}> Login </button>
      </div>
    </div>
  );
}

export default App;
