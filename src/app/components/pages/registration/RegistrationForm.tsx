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
import { RegistrationDto } from "../../../types/models/RegistrationDto";
import history from "../../../utils/helpers/HistoryHelper";
import { ButtonComponent } from "../../shared/buttons/buttonComponent";
import { CheckBoxComponent } from "../../shared/checkBox/checkBoxComponent";
import { InputComponent } from "../../shared/input/inputComponent";
import { FormMessageWrapper } from "../../shared/wrappers/FormMessageWrapper";
import { FormPlaceholder } from "../../shared/wrappers/FormPlaceholder";
import { IRegistrationState } from "./RegisrationState";
import { RegistrationActions } from "./RegistrationActions";
import { Translation, useTranslation } from "react-i18next";


function componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/003b2b18f7.js";
    script.async = true;
    document.body.appendChild(script);
}


type IFormState = RegistrationDto;
type IRegistrationFormProps = IBaseFormProps<IFormState, {}>;

class RegistrationFormComponent extends React.Component<IRegistrationFormProps> {
    protected readonly actions: RegistrationActions;

    public validationSchema = {
        userName: Yup.string().required('Поле является обязательным').trim(),
        firstName: Yup.string().required('Поле является обязательным').trim(),
        lastName: Yup.string().required('Поле является обязательным').trim(),
        email: Yup.string().required('Поле является обязательным').trim().email("Email не корректный"),
        // isSubscribe: Yup.boolean().required("Вы должны согласится с правилами"),
        password: Yup.string().required('Поле является обязательным').trim(),
        confirmPassword: Yup.string().required('Поле является обязательным').trim(),
    };

    public getInitialValues = (): IFormState => (
        {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: "user"
        });

    private _onSubmit = (dto: RegistrationDto, form: FormikHelpers<RegistrationDto>| undefined): void => {
        this.props.dispatch(this.actions.clearFormMessages());
        const payload = {
            dto: dto,
            formHelpers: form as FormikBag<{}, IFormState>,
            id: undefined
        };
        this.props.dispatch(this.actions.registration(payload));
    };

    private _createValidationSchemaObject = (): Yup.ObjectSchema => {
        return Yup.object().shape(this.validationSchema);
    };

    public constructor(props: IRegistrationFormProps) {
        super(props);
        this.actions = container.get<RegistrationActions>(SERVICE_IDENTIFIER.RegistrationActions);
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
                        success={!!this.props.form.formSuccess}
                        loading={props.isSubmitting}
                        error={!!this.props.form.formError?.message}
                        onSubmit={props.handleSubmit}
                    >
                        <Translation>
                            {(t) => (
                                <>
                                    <div className="text">
                                        <p>{t("Terms and condition header")}</p>
                                        <p>{t("Privacy policy")}</p>
                                    </div>
                                    <div className="registrationForm">
                                        <InputComponent placeholder={t("Login")} required={true} autoFocus={true} name="userName" />
                                        <InputComponent placeholder={t("First name")} required={true} autoFocus={true} name="firstName" />
                                        <InputComponent placeholder={t("Last name")} required={true} autoFocus={true} name="lastName" />
                                        <InputComponent placeholder="Email" required={true} autoFocus={true} name="email" />
                                        <InputComponent placeholder={t("Password")} required={true} inputProps={{ type: "password" }} name="password" />
                                        <InputComponent placeholder={t("Repeat password")} required={true} inputProps={{ type: "password" }} name="confirmPassword" />
                                    </div>
                                    {/* <div className="checkBox">
                                        <CheckBoxComponent placeholder={t("label")} required={true} name="isSubscribe" />
                                    </div> */}

                                    <div className="pushButtons">
                                        <ButtonComponent onClick={() => this._onSubmit({
                                            userName:this.props.form.record.userName,
                                            firstName:this.props.form.record.firstName,
                                            lastName:this.props.form.record.lastName,
                                            email: this.props.form.record.email,
                                            password:this.props.form.record.password,
                                            confirmPassword: this.props.form.record.confirmPassword,
                                            role: "user"
                                        }, undefined)}  isValidating={props.isInitialValid} formSuccess={this.props.form.formSuccess} type="submit" className="agree" value={t("Agree and continue")} />
                                        <ButtonComponent onClick={() => history.push(LOGIN_PAGE)} isValidating={false} formSuccess={this.props.form.formSuccess} type="button" className="login" value={t("To Log In")} />
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


function mapStateToProps(state: IRootState): IRegistrationState {
    return state.registration;
}

export const RegistrationForm = connect(
    mapStateToProps
)(RegistrationFormComponent);