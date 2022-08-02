import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const addUser = () => {
    Axios.post("http://localhost:3001/api/register", {
      username: username,
      password: password,
    }).then(() => {
      console.log("Success");
    }).catch( (err) => console.log(err));
    
    // fetch("http://localhost:3001/api/register", {
      //   method: "post",
      //   body: JSON.stringify({
        //     username: username,
    //     password: password,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //   },
    // })
    //   .then(async (response) => {
    //     if (response.status === 200) {
    //       return response.json();
    //     } else if (response.status === 500) {
    //       throw new Error("Server error");
    //     } else {
    //       console.log("Photo upload was not successful!");
    //     }
    //   })
    //   .then((result) => {
    //     console.log("Photo upload was successful!");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

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
