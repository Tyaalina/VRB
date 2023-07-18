import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import { ChangePasswordForm } from "./ChangePasswordForm";
import "./ChangePasswordPage.css";

class ChangePasswordPage extends Component<RouteComponentProps>  {
  state = {};

  render(): JSX.Element {
    return (
      <Translation>
      {(t) => (
      <div className="changePasswordPage">
        <h2>{t('ChangePassword')}</h2>
        <ChangePasswordForm {...this.props}/>
      </div>
      )}
      </Translation>
    );
  }
}

export default ChangePasswordPage;