import { Formik, FormikBag, FormikHelpers, FormikProps } from "formik";
import React from "react";
import { Translation, useTranslation } from "react-i18next";
import history from "../../../utils/helpers/HistoryHelper";
import { ProfileHeaderComponent } from "../../shared/profileHeader/profileHeaderComponent"
import "./ProfileHeaderPage.css";
import Logout  from "../../../../assets/static/icons/logout.svg";
import Profile  from "../../../../assets/static/icons/profile.svg";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { AuthService } from "../../../services/authService";
import { PROFILE, ROOT_ROUTE } from "../../../../shared/constants/routes";


export class ProfileHeader extends React.Component {

  private readonly _authService: AuthService = container.get<AuthService>(SERVICE_IDENTIFIER.AuthService);

  private logOut() {
    this._authService.logout();
    history.push(ROOT_ROUTE);
  }

  public render(): JSX.Element {
    return (
      <Translation>
        {(t) => (
          <>
            <div className="profileHeader">
              <ProfileHeaderComponent isValidating={false} type="submit" className="headerProfileComponent" onClick={() => history.push(PROFILE)}>
                <Profile id="profile" />
              </ProfileHeaderComponent>
              <ProfileHeaderComponent isValidating={false}  type="submit" className="headerLogOutComponent" onClick={() => this.logOut()}>
                <Logout  id="logout" />
              </ProfileHeaderComponent>
            </div>
          </>
        )}
      </Translation>
    );
  }
}
