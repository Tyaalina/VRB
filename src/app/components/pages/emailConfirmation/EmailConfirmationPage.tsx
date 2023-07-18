import React, { Component } from "react";
import { EmailConfirmationForm } from "./EmailConfirmationForm";
import { RouteComponentProps } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import "./EmailConfirmationPage.css";

class EmailConfirmationPage extends Component<RouteComponentProps>  {
  state = {};

  render(): JSX.Element {
    document.body.className = "";
    return (
      <Translation>
      {(t) => (
      <div className="emailConfirmationPage">
        <h2>{t('Email confirmation')}</h2>
        <EmailConfirmationForm {...this.props}/>
      </div>
      )}
      </Translation>
    );
  }
}

export default EmailConfirmationPage;