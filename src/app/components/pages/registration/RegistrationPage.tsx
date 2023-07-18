import "./RegistrationPage.css";
import React, { Component } from "react";
import { RegistrationForm } from "./RegistrationForm";
import { RouteComponentProps } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";

class RegistrationPage extends Component<RouteComponentProps>  {
  state = {};

  render(): JSX.Element {
    document.body.className = "";
    return (
      <Translation>
      {(t) => (
      <div className="registrationPage">
        <h2>{t('Sign in')}</h2>
        <RegistrationForm {...this.props}/>
      </div>
      )}
      </Translation>
    );
  }
}

export default RegistrationPage;
