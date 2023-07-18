import "./LoginPage.css";
import "./../registration/RegistrationPage.css";
import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Translation } from "react-i18next";
import { LoginForm } from "./LoginForm";

class LoginPage extends Component<RouteComponentProps>  {
  state = {};

  render(): JSX.Element {
    document.body.className = "";
    return (
      <Translation>
      {(t) => (
      <div className="registrationPage">
        <LoginForm {...this.props}/>
      </div>
      )}
      </Translation>
    );
  }
}

export default LoginPage;
