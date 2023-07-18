import { Formik, FormikBag, FormikHelpers, FormikProps } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import { IRootState } from "../../../reduxInfrastructure/RootState";
import { IBaseFormProps } from "../../../types/form/IBaseFormProps";
import { Translation, useTranslation } from "react-i18next";
import { InputComponent } from "../../shared/input/inputComponent";
import { SearchBarDto } from "../../../types/models/SearchBarDto";
import { ISearchBarState } from "./SearchBarState";
import "./SearchBarPage.css";

type IFormState = SearchBarDto;
type ISearchBarProps = IBaseFormProps<IFormState, {}>;

class SearchBarComponent extends React.Component<ISearchBarProps> {
  public render(): JSX.Element {
    return (
      <Translation>
        {(t) => (
          <>
            <div className="SearchBar">
              <InputComponent placeholder={t("Search Bar")} required={true} autoFocus={true} name="SearchBar"/>
            </div>
          </>
        )}
      </Translation>
    );
  }
}

function mapStateToProps(state: IRootState): ISearchBarState {
  return state.registration;
}

export const SearchBarForm = connect(mapStateToProps)(
  SearchBarComponent
);