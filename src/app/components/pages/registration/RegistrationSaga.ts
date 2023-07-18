import { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { AppActions } from "../../../appActions";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { IActionPayloaded } from "../../../reduxInfrastructure/actions/shared/IAction";
import { BaseFormSaga } from "../../../reduxInfrastructure/sagas/form/BaseFormSaga";
import { AccountServerInteractionService } from "../../../services/serverInteraction/accountServerInteractionService";
import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { RegistrationDto } from "../../../types/models/RegistrationDto";
import { RegistrationActions } from "./RegistrationActions";
import { REGISTRATION__REGISTRATION } from "./RegistrationContants";
import { AuthService } from './../../../services/authService';
import { AuthResponseDto } from '../../../types/models/AuthResponseDto';
import history from "../../../utils/helpers/HistoryHelper";
import { ROOT_ROUTE } from '../../../../shared/constants/routes';

export class RegistrationSaga extends BaseFormSaga<RegistrationDto, RegistrationActions, AccountServerInteractionService> {

    protected serverInteractionService: AccountServerInteractionService = container.get<AccountServerInteractionService>(SERVICE_IDENTIFIER.AccountServerInteractionService);
    protected actions: RegistrationActions = container.get<RegistrationActions>(SERVICE_IDENTIFIER.RegistrationActions);
    protected readonly _appActions: AppActions = container.get<AppActions>(SERVICE_IDENTIFIER.AppActions);
    private readonly _authService: AuthService = container.get<AuthService>(SERVICE_IDENTIFIER.AuthService);

    public constructor(
    ) {
        super();

        this.registration = this.registration.bind(this);
    }

    public *watch(): Generator {
        yield takeEvery(REGISTRATION__REGISTRATION, this.registration);
    }

    private *registration(action: IActionPayloaded<ISubmitFormPayload<RegistrationDto, {}>>): Generator {
        yield this.doSubmitApiRequest(action, this.serverInteractionService.register(action.payload.dto),
        (response: AxiosResponse<AuthResponseDto>) => {
            this._authService.setTokens(response.data);
            history.push(ROOT_ROUTE);
        });
    }
}