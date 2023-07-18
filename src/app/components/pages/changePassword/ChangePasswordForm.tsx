import { Formik, FormikBag, FormikHelpers, FormikProps } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import * as Yup from "yup";
import { LOGIN_PAGE } from "../../../../shared/constants/routes";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { IRootState } from "../../../reduxInfrastructure/RootState";
import { IBaseFormProps } from "../../../types/form/IBaseFormProps";
import history from "../../../utils/helpers/HistoryHelper";
import { ButtonComponent } from "../../shared/buttons/buttonComponent";
import { InputComponent } from "../../shared/input/inputComponent";
import { FormMessageWrapper } from "../../shared/wrappers/FormMessageWrapper";
import { FormPlaceholder } from "../../shared/wrappers/FormPlaceholder";
import { Translation, useTranslation } from "react-i18next";
import { ChagnePasswordDto } from "../../../types/models/ChagePasswordDto";
import { ChangePasswordActions } from "./ChangePasswordActions";
import { IChangePasswordState } from "./ChangePasswordState";


type IFormState = ChagnePasswordDto;
type IChangePasswordFormProps = IBaseFormProps<IFormState, {}>;

class ChangePasswordFormComponent extends React.Component<IChangePasswordFormProps> {
    protected readonly actions: ChangePasswordActions;

    public validationSchema = {
        oldPassword: Yup.string().required('Поле является обязательным').trim(),
        newPassword: Yup.string().required('Поле является обязательным').trim(),
        newConfirmPassword: Yup.string().required('').trim()
    };

    public getInitialValues = (): IFormState => (
        {
            oldPassword: '',
            newPassword: '',
            newConfirmPassword: '',
        });

    private _onSubmit = (dto: ChagnePasswordDto, form: FormikHelpers<ChagnePasswordDto>): void => {
        this.props.dispatch(this.actions.clearFormMessages());
        const payload = {
            dto: dto,
            formHelpers: form as FormikBag<{}, IFormState>,
            id: undefined
        };
        this.props.dispatch(this.actions.changePassword(payload));
    };

    private _createValidationSchemaObject = (): Yup.ObjectSchema => {
        return Yup.object().shape(this.validationSchema);
    };

    public constructor(props: IChangePasswordFormProps) {
        super(props);
        this.actions = container.get<ChangePasswordActions>(SERVICE_IDENTIFIER.ChangePasswordActions);
        props.dispatch(this.actions.initForm());
    }

    public render(): JSX.Element {
        const initialValues = this.getInitialValues();
    
        if (!initialValues) {
          return <FormPlaceholder />;
        }

        return (
            <Formik
                enableReinitialize={true}
                onSubmit={this._onSubmit}
                validationSchema={this._createValidationSchemaObject()}
                validateOnBlur={true}
                initialValues={initialValues}
            >
                 {(props): JSX.Element => (
                    <Form
                        loading={props.isSubmitting}
                        onSubmit={props.handleSubmit}
                        success={!!this.props.form.formSuccess}
                        error={!!this.props.form.formError?.message}
                    >
                        <Translation>
                        {(t) => ( 
                            <>
                            <div className="text"></div>
                            <div className="registrationForm">
                                <InputComponent placeholder = {t("OldPassword")} required={true} inputProps={{type: "password"}} name = "oldPassword" />
                                <InputComponent placeholder = {t("NewPassword")} required={true} inputProps={{type: "password"}} name = "newPassword" />
                                <InputComponent placeholder = {t("RepeatePassword")} required={true} inputProps={{type: "password"}} name = "newConfirmPassword" />
                            </div>
                            <div className="pushButtons">
                                <ButtonComponent isValidating={props.isInitialValid} formSuccess={"true"} type="submit" className="agree" value={t("Continue")}/>
                                <ButtonComponent onClick={() => history.push(LOGIN_PAGE)} isValidating={false} formSuccess={"true"} type="button" className="login" value={t("Back")}/>
                            </div>
                            <FormMessageWrapper isSuccess={true}>
                            {this.getCustomSuccessMessage()}
                            </FormMessageWrapper>
                            <FormMessageWrapper isError={true}>
                            {this.getCustomErrorMessage()}
                            </FormMessageWrapper>
                            </>
                             )}
                            </Translation>
                    </Form>
                    )}
            </Formik>
        );
    };

    protected getCustomErrorMessage: () => React.ReactNode | null = () => {
        return this.props.form.formError?.message;
    };

    protected getCustomSuccessMessage: () => React.ReactNode | null = () => {
        return this.props.form.formSuccess;
    };
}


function mapStateToProps(state: IRootState): IChangePasswordState {
  return state.changePassword;
}

export const ChangePasswordForm = connect(
  mapStateToProps
)(ChangePasswordFormComponent);