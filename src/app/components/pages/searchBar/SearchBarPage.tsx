import React, { Component } from "react";
import { SearchBarForm } from "./SearchBarForm";
import { RouteComponentProps } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";

class SearchBarPage extends Component<RouteComponentProps>  {
  state = {};

  render(): JSX.Element {
    document.body.className = "";
    return (
      <Translation>
      {(t) => (
      <div>
        <h2>{t('search bar')}</h2>
        <SearchBarForm {...this.props}/>
      </div>
      )}
      </Translation>
    );
  }
}

export default SearchBarPage;