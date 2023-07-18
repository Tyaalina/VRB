import { AuthService } from './../../../services/authService';
import { AxiosResponse } from 'axios';
import { LOGIN__LOGIN } from './LoginConstants';
import history from "../../../utils/helpers/HistoryHelper";
import { LoginDto } from './../../../types/models/LoginDto';
import { LoginActions } from './LoginActions';
import { takeEvery } from "redux-saga/effects";
import { AppActions } from "../../../appActions";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { IActionPayloaded } from "../../../reduxInfrastructure/actions/shared/IAction";
import { BaseFormSaga } from "../../../reduxInfrastructure/sagas/form/BaseFormSaga";
import { AccountServerInteractionService } from "../../../services/serverInteraction/accountServerInteractionService";
import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { AuthResponseDto } from '../../../types/models/AuthResponseDto';
import { ROOT_ROUTE } from '../../../../shared/constants/routes';

export class LoginSaga extends BaseFormSaga<LoginDto, LoginActions, AccountServerInteractionService> {

    protected serverInteractionService: AccountServerInteractionService = container.get<AccountServerInteractionService>(SERVICE_IDENTIFIER.AccountServerInteractionService);
    protected actions: LoginActions = container.get<LoginActions>(SERVICE_IDENTIFIER.LoginAction);
    protected readonly _appActions: AppActions = container.get<AppActions>(SERVICE_IDENTIFIER.AppActions);
    private readonly _authService: AuthService = container.get<AuthService>(SERVICE_IDENTIFIER.AuthService);

    public constructor(
    ) {
        super();

        this.login = this.login.bind(this);
    }

    public *watch(): Generator {
        yield takeEvery(LOGIN__LOGIN, this.login);
    }

    private *login(action: IActionPayloaded<ISubmitFormPayload<LoginActions, {}>>): Generator {
        yield this.doSubmitApiRequest(action, this.serverInteractionService.login(action.payload.dto),
        (response: AxiosResponse<AuthResponseDto>) => {
            this._authService.setTokens(response.data);
            history.push(ROOT_ROUTE);
        });
    }
}