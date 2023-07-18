import { Formik, FormikBag, FormikHelpers, FormikProps } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import * as Yup from "yup";
import { ROOT_ROUTE } from "../../../../shared/constants/routes";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { IRootState } from "../../../reduxInfrastructure/RootState";
import { IBaseFormProps } from "../../../types/form/IBaseFormProps";
import { EmailConfirmationDto } from "../../../types/models/EmailConfirmationDto";
import history from "../../../utils/helpers/HistoryHelper";
import { ButtonComponent } from "../../shared/buttons/buttonComponent";
import { FormMessageWrapper } from "../../shared/wrappers/FormMessageWrapper";
import { FormPlaceholder } from "../../shared/wrappers/FormPlaceholder";
import { IEmailConfirmationState } from "./EmailConfirmationState";
import { EmailConfirmationActions } from "./EmailConfirmationActions";
import { Translation, useTranslation } from "react-i18next";


type IFormState = EmailConfirmationDto;
type IEmailConfirmationFormProps = IBaseFormProps<IFormState, {}>;

class EmailConfirmationFormComponent extends React.Component<IEmailConfirmationFormProps> {
    protected readonly actions: EmailConfirmationActions;

    public constructor(props: IEmailConfirmationFormProps) {
        super(props);
        this.actions = container.get<EmailConfirmationActions>(SERVICE_IDENTIFIER.EmailConfirmationActions);
        props.dispatch(this.actions.initForm());
    }

    public render(): JSX.Element {

        return (
                <Translation>
                    {(t) => ( 
                        <>
                        <div className="text">
                            <p>{t("Your email has been successfully confirmed.")}</p>
                        </div>
                        <div className="pushButtons">
                            <ButtonComponent onClick={() => history.push(ROOT_ROUTE)} isValidating={false} formSuccess={this.props.form.formSuccess} type="button" className="login" value={t("To the main page")}/>
                        </div>
                        </>
                            )
                    }
                </Translation>
        );
    };
}

function mapStateToProps(state: IRootState): IEmailConfirmationState {
  return state.emailConfirmation;
}

export const EmailConfirmationForm = connect(
  mapStateToProps
)(EmailConfirmationFormComponent);