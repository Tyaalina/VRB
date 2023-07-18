import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { IAppState } from "../../../IAppState";
import { LOGIN_PAGE } from "../../../../shared/constants/routes";
import { IRootState } from "../../RootState";

interface IPrivateRouteComponentProps extends IAppState, RouteProps {
}

class PrivateRouteComponent extends React.Component<IPrivateRouteComponentProps> {
  render(): JSX.Element {
    if (!this.props.user) {
      return (
        <Redirect
          to={{
            pathname: LOGIN_PAGE,
            state: { from: this.props.location }
          }}
        />
      );
    }

    return (
        <Route {...this.props} />
    );
  }
}

function mapStateToProps(state: IRootState): IAppState {
  return state.app;
}

export const PrivateRoute: any = connect(mapStateToProps)(PrivateRouteComponent);