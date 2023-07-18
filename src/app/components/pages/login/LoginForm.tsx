import { ILoginState } from './LoginState';
import React from "react";
import { Form } from 'semantic-ui-react';
import * as Yup from "yup";
import './LoginPage.css'
import { TextInput, Grid, Box, Button, Grommet, Header } from 'grommet';
import {customTheme} from '../../../../App'
import history from "../../../utils/helpers/HistoryHelper";
import { REGISTRATION_PAGE } from "../../../../shared/constants/routes";
import { View, Hide } from 'grommet-icons';
import { Translation } from 'react-i18next';
import { connect } from 'react-redux';
import { IRootState } from '../../../reduxInfrastructure/RootState';
import { LoginDto } from '../../../types/models/LoginDto';
import { IBaseFormProps } from '../../../types/form/IBaseFormProps';
import { LoginActions } from './LoginActions';
import container from '../../../inversify/inversifyContainer';
import { SERVICE_IDENTIFIER } from '../../../inversify/inversifyTypes';
import { Formik, FormikBag, FormikHelpers } from 'formik';
import { FormMessageWrapper } from '../../shared/wrappers/FormMessageWrapper';
import Loader from 'react-loader-spinner';



type IFormState = LoginDto;
type ILoginFormProps = IBaseFormProps<IFormState, { reveal: boolean, isLoading: boolean }>;

class LoginFormComponent extends React.Component<ILoginFormProps> {
    protected readonly actions: LoginActions;

    public validationSchema = {
        username: Yup.string().required('Поле является обязательным').trim(),
        password: Yup.string().required('Поле является обязательным').trim(),
    };

    public getInitialValues = (): IFormState => (
    {
        username: '',
        password: '',
    });

    private _createValidationSchemaObject = (): Yup.ObjectSchema => {
        return Yup.object().shape(this.validationSchema);
    };

    private _onSubmit = (dto: LoginDto, form: FormikHelpers<LoginDto> | undefined): void => {
        this.props.dispatch(this.actions.clearFormMessages());
        const payload = {
            dto: dto,
            formHelpers: form as FormikBag<{}, IFormState>,
            id: undefined
        };
        this.props.dispatch(this.actions.login(payload));
    };

    public constructor(props: ILoginFormProps) {
        super(props);
        this.actions = container.get<LoginActions>(SERVICE_IDENTIFIER.LoginAction);
        props.dispatch(this.actions.initForm());
    }

    protected getCustomErrorMessage: () => React.ReactNode | null = () => {
        return this.props.form.formError?.message;
    };

    protected getCustomSuccessMessage: () => React.ReactNode | null = () => {
        return this.props.form.formSuccess;
    };

    render() {

        return (
            <>
            {this.props.helpers.isLoading && <div className="loader">
                <Loader
                    type="Puff"
                    color="#ADFF00"
                    height={100}
                    width={100}
                />
                </div>
            }
            <Formik
                onSubmit={this._onSubmit}
                enableReinitialize={true}
                validationSchema={this._createValidationSchemaObject()}
                validateOnBlur={true}
                initialValues={this.getInitialValues()}
            >
            {(props): JSX.Element => (
                <Translation>
                    {(t) => ( 
                    <Grommet theme={customTheme}>
                        <Header><h2 id='LoginHeader'>{t("Log in")}</h2></Header>
                        <Box
                            direction="column"
                            align="center"
                            justify="center"
                            pad={{ horizontal: 'medium', vertical: 'small' }}
                            className="loginBody"
                        >
                            <div>
                                <p className="loginText">{t("Login")}</p>
                                
                                <Box
                                    width="medium"
                                    direction="row"
                                    align="center"
                                    round="xlarge"
                                    border
                                >
                                    <TextInput
                                        id='usernameInput'
                                        value={this.props.form.record?.username}
                                        onChange={event => this.props.dispatch(this.actions.emailChanged(event.target.value))}
                                    />
                                </Box>
                                <div className={"fields__error__text"}>{this.props.form.formError?.errors?.filter(t => t.fieldName == "Username")[0]?.message}</div>
                                <p className="loginText">{t("Password")}</p>
                                <Box
                                    width="medium"
                                    direction="row"
                                    align="center"
                                    round="xlarge"
                                    border
                                >
                                    <TextInput
                                        id='passwordInput'
                                        type={this.props.helpers.reveal ? 'text' : 'password'}
                                        value={this.props.form.record?.password}
                                        onChange={event => this.props.dispatch(this.actions.passwordChanged(event.target.value))}
                                    />
                                    <Button
                                        icon={this.props.helpers.reveal ? <View size="medium" /> : <Hide size="medium" />}
                                        disabled={false}
                                        onClick={event => this.props.dispatch(this.actions.revealChanged(!this.props.helpers.reveal))}
                                    />

                                </Box>
                                <div className={"fields__error__text"}>{this.props.form.formError?.errors?.filter(t => t.fieldName == "Password")[0]?.message}</div>

                                <Grid
                                    fill
                                    margin={{ top: 'medium' }}
                                    rows={['auto', 'auto']}
                                    columns={['auto', 'auto']}
                                    areas={[
                                        { name: 'loginButton', start: [0, 0], end: [1, 0] },
                                        { name: 'singinButton', start: [1, 0], end: [1, 1] },
                                    ]}
                                >
                                    <Box
                                        gridArea="loginButton"
                                        direction="column"
                                        align="center"
                                        justify="center"
                                        pad={{ horizontal: 'medium', vertical: 'small' }}
                                    >
                                        <Button
                                            type="submit"
                                            label={t("Log in")} 
                                            onClick={() => this._onSubmit({
                                                    username: this.props.form.record?.username,
                                                    password: this.props.form.record?.password
                                                },
                                                undefined
                                            )} />
                                    </Box>

                                    <Box
                                        gridArea="singinButton"
                                        direction="column"
                                        align="center"
                                        justify="center"
                                        pad={{ horizontal: 'medium', vertical: 'small' }}
                                    >
                                        <Button onClick={() => history.push(REGISTRATION_PAGE)} label={t("Sign in")} />
                                    </Box>
                                </Grid>
                            </div>
                        </Box>
                        <FormMessageWrapper isSuccess={true}>
                            {this.getCustomSuccessMessage()}
                        </FormMessageWrapper>
                        <FormMessageWrapper isError={true}>
                            {this.getCustomErrorMessage()}
                        </FormMessageWrapper>
                    </Grommet>
                    )}
                </Translation>
            )}
        </Formik>
        </>
        )
        
    }
}


function mapStateToProps(state: IRootState): ILoginState {
    return {
        ...state.login
    };
}

export const LoginForm = connect(
    mapStateToProps,
)(LoginFormComponent);