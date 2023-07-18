import { LoginReducer } from './../components/pages/login/LoginReducer';
import { ChangePasswordReducer } from './../components/pages/changePassword/ChangePasswordReducer';
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { AppReducer } from "../appReducer";
import { RegistrationReducer } from "../components/pages/registration/RegistrationReducer";
import { EmailConfirmationReducer } from "../components/pages/emailConfirmation/EmailConfirmationReducer";
import container from "../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../inversify/inversifyTypes";
import { TopicReducer } from '../components/pages/topic/TopicReducer';
import { MessageReducer } from '../components/pages/message/MessageReduser';

const registationReducer = container.get<RegistrationReducer>(SERVICE_IDENTIFIER.RegistrationReducer);
const changePasswordReducer = container.get<ChangePasswordReducer>(SERVICE_IDENTIFIER.ChangePasswordReducer);
const emailConfirmationReducer = container.get<EmailConfirmationReducer>(SERVICE_IDENTIFIER.EmailConfirmationReducer);
const loginReducer = container.get<LoginReducer>(SERVICE_IDENTIFIER.LoginReducer);
const appReducer = container.get<AppReducer>(SERVICE_IDENTIFIER.AppReducer);
const topicReducer = container.get<TopicReducer>(SERVICE_IDENTIFIER.TopicReducer);
const messageReducer = container.get<MessageReducer>(SERVICE_IDENTIFIER.MessageReducer);

export const rootReducer: (history: any) => any = (history: any): any => {
        return combineReducers({
                app: appReducer.getReducer(),
                registration: registationReducer.getReducer(),
                changePassword: changePasswordReducer.getReducer(),
                emailConfirmation: emailConfirmationReducer.getReducer(),
                login: loginReducer.getReducer(),
                router: connectRouter(history),
                topic: topicReducer.getReducer(),
                message: messageReducer.getReducer()
        });
};