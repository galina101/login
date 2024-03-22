import {User} from "../models/User";
import {FormEvent, SyntheticEvent, useState} from "react";


export function LoginEntryForm() {
  const [userName, setUserInput] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");


  function userInputHandler(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setUserInput(textBox.value);
  }

  async function buttonClickHandler() {
    let user: User = {
      username: userName,
      password: userPassword
    }
  }

    function formSubmitHandler(event: FormEvent) {
      event.preventDefault();
      buttonClickHandler();
    }

    return (<>
      <div className={"login-form"}>
        <form onSubmit={formSubmitHandler}>
          <label>Username: </label>
          <input type="text" name="username" onChange={userInputHandler}
                 value={userName}></input>
          <br></br>
          <label>Password: </label>
          <input type="text" name="password" onChange={userInputHandler}
                 value={userPassword}></input>
          <br></br>
          <button type="submit">Login</button>
        </form>
      </div>
    </>)
}