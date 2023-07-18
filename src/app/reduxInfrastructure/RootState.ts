import { ILoginState } from './../components/pages/login/LoginState';
import { IChangePasswordState } from './../components/pages/changePassword/ChangePasswordState';
import { IRegistrationState } from './../components/pages/registration/RegisrationState';
import { IEmailConfirmationState } from './../components/pages/emailConfirmation/EmailConfirmationState';
import { RouterState } from "connected-react-router";
import { IAppState } from "./../IAppState";
import { ITopicState } from '../components/pages/topic/TopicState';
import { IMessageState } from '../components/pages/message/MessageState';

export interface IRootState {
    router: RouterState;
    app: IAppState;
    registration: IRegistrationState;
    changePassword: IChangePasswordState;
    emailConfirmation: IEmailConfirmationState;
    login: ILoginState;
    topic: ITopicState;
    message: IMessageState;
}