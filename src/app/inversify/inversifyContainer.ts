import "reflect-metadata";
import { AuthService } from './../services/authService';
import "reflect-metadata";
import { LoginReducer } from './../components/pages/login/LoginReducer';
import { LoginSaga } from './../components/pages/login/LoginSaga';
import { ChangePasswordReducer } from './../components/pages/changePassword/ChangePasswordReducer';
import { ChangePasswordSaga } from './../components/pages/changePassword/ChangePasswordSaga';
import { RegistrationSaga } from './../components/pages/registration/RegistrationSaga';
import { NotificationService } from './../../shared/helpers/notificationService';
import { ObjectHelper } from './../services/objectHelper';
import { ApiHelper } from '../../shared/helpers/apiHelper';
import { ServerInteractionsUtils } from '../../shared/helpers/serverInteractionUtins';
import { AppActions } from '../appActions';
import { AppReducer } from '../appReducer';
import { AppSaga } from '../appSaga';
import { AccountServerInteractionService } from '../services/serverInteraction/accountServerInteractionService';
import { BaseServerInteractionService } from '../services/serverInteraction/baseServiceInteractionService';
import { TableServerInteractionService } from '../services/serverInteraction/tableServerInteractionService';
import { SERVICE_IDENTIFIER } from './inversifyTypes';
import { RegistrationActions } from '../components/pages/registration/RegistrationActions';
import { RegistrationReducer } from '../components/pages/registration/RegistrationReducer';
import { Container } from "inversify";
import { ChangePasswordActions } from "../components/pages/changePassword/ChangePasswordActions";
import { EmailConfirmationActions } from "../components/pages/emailConfirmation/EmailConfirmationActions";
import { EmailConfirmationReducer } from './../components/pages/emailConfirmation/EmailConfirmationReducer';
import { EmailConfirmationSaga } from './../components/pages/emailConfirmation/EmailConfirmationSaga';
import { LoginActions } from "../components/pages/login/LoginActions";
import { TopicSaga } from './../components/pages/topic/TopicSaga';
import { TopicActions } from './../components/pages/topic/TopicAction';
import { TopicReducer } from "../components/pages/topic/TopicReducer";
import { MessageReducer } from "../components/pages/message/MessageReduser";
import { MessageActions } from "../components/pages/message/MessageActions";

const container = new Container();

container.bind<BaseServerInteractionService>(SERVICE_IDENTIFIER.BaseServerInteractionService).to(BaseServerInteractionService);
container.bind<TableServerInteractionService>(SERVICE_IDENTIFIER.TableServerInteractionService).to(TableServerInteractionService);
container.bind<AccountServerInteractionService>(SERVICE_IDENTIFIER.AccountServerInteractionService).to(AccountServerInteractionService);


container.bind<ServerInteractionsUtils>(SERVICE_IDENTIFIER.ServerInteractionsUtils).to(ServerInteractionsUtils).inSingletonScope();
container.bind<NotificationService>(SERVICE_IDENTIFIER.NotificationService).to(NotificationService);

container.bind<ApiHelper>(SERVICE_IDENTIFIER.ApiHelper).to(ApiHelper);
container.bind<AuthService>(SERVICE_IDENTIFIER.AuthService).to(AuthService);
container.bind<ObjectHelper>(SERVICE_IDENTIFIER.ObjectHelper).to(ObjectHelper);


container.bind<AppActions>(SERVICE_IDENTIFIER.AppActions).to(AppActions).inSingletonScope();
container.bind<RegistrationActions>(SERVICE_IDENTIFIER.RegistrationActions).to(RegistrationActions).inSingletonScope();
container.bind<ChangePasswordActions>(SERVICE_IDENTIFIER.ChangePasswordActions).to(ChangePasswordActions).inSingletonScope();
container.bind<EmailConfirmationActions>(SERVICE_IDENTIFIER.EmailConfirmationActions).to(EmailConfirmationActions).inSingletonScope();
container.bind<LoginActions>(SERVICE_IDENTIFIER.LoginAction).to(LoginActions).inSingletonScope();
container.bind<TopicActions>(SERVICE_IDENTIFIER.TopicAction).to(TopicActions).inSingletonScope();
container.bind<MessageActions>(SERVICE_IDENTIFIER.MessageAction).to(MessageActions).inSingletonScope();

container.bind<AppSaga>(SERVICE_IDENTIFIER.AppSaga).to(AppSaga);
container.bind<RegistrationSaga>(SERVICE_IDENTIFIER.RegistrationSaga).to(RegistrationSaga);
container.bind<ChangePasswordSaga>(SERVICE_IDENTIFIER.ChangePasswordSaga).to(ChangePasswordSaga);
container.bind<EmailConfirmationSaga>(SERVICE_IDENTIFIER.EmailConfirmationSaga).to(EmailConfirmationSaga);
container.bind<LoginSaga>(SERVICE_IDENTIFIER.LoginSaga).to(LoginSaga);
container.bind<TopicSaga>(SERVICE_IDENTIFIER.TopicSaga).to(TopicSaga);

container.bind<AppReducer>(SERVICE_IDENTIFIER.AppReducer).to(AppReducer);
container.bind<RegistrationReducer>(SERVICE_IDENTIFIER.RegistrationReducer).to(RegistrationReducer);
container.bind<ChangePasswordReducer>(SERVICE_IDENTIFIER.ChangePasswordReducer).to(ChangePasswordReducer);
container.bind<EmailConfirmationReducer>(SERVICE_IDENTIFIER.EmailConfirmationReducer).to(EmailConfirmationReducer);
container.bind<LoginReducer>(SERVICE_IDENTIFIER.LoginReducer).to(LoginReducer);
container.bind<TopicReducer>(SERVICE_IDENTIFIER.TopicReducer).to(TopicReducer);
container.bind<MessageReducer>(SERVICE_IDENTIFIER.MessageReducer).to(MessageReducer);

export default container;

