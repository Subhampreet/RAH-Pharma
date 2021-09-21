import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./style.css";

const SignUpForm = () => {
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>

      <form>
        <TextField
          name="username"
          floatingLabelText="user name"
         
        />
        <TextField
          name="email"
          floatingLabelText="email"
         
        />
        <TextField
          name="password"
          floatingLabelText="password"
         
        />

    
        <TextField
          name="pwconfirm"
          floatingLabelText="confirm password"
        
        />
        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
