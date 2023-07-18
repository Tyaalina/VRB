import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import { ProfileHeader } from "./ProfileHeaderForm";

class ProfileHeaderPage extends Component<RouteComponentProps>  {
  state = {};

  render(): JSX.Element {
    document.body.className = "";
    return (
      <Translation>
      {(t) => (
      <div>
        <h2>{t('profile header')}</h2>
        <ProfileHeader />
      </div>
      )}
      </Translation>
    );
  }
}

export default ProfileHeaderPage;