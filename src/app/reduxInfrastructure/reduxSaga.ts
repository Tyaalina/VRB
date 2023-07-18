import { LoginSaga } from './../components/pages/login/LoginSaga';
import { ChangePasswordSaga } from './../components/pages/changePassword/ChangePasswordSaga';
import { AppSaga } from './../appSaga';
import { RegistrationSaga } from './../components/pages/registration/RegistrationSaga';
import { EmailConfirmationSaga } from './../components/pages/emailConfirmation/EmailConfirmationSaga';
import { all } from "@redux-saga/core/effects";
import container from "../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from '../inversify/inversifyTypes';
import { EmbedHTMLAttributes } from 'react';
import { TopicSaga } from '../components/pages/topic/TopicSaga';

export const rootSaga: () => Generator  = function* root(): Generator {
    yield all([
        container.get<RegistrationSaga>(SERVICE_IDENTIFIER.RegistrationSaga).watch(),
        container.get<AppSaga>(SERVICE_IDENTIFIER.AppSaga).watch(),
        container.get<ChangePasswordSaga>(SERVICE_IDENTIFIER.ChangePasswordSaga).watch(),
        container.get<EmailConfirmationSaga>(SERVICE_IDENTIFIER.EmailConfirmationSaga).watch(),
        container.get<LoginSaga>(SERVICE_IDENTIFIER.LoginSaga).watch(),
        container.get<TopicSaga>(SERVICE_IDENTIFIER.TopicSaga).watch(),
    ]);
};