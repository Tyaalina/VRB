import { ChangePasswordActions } from './ChangePasswordActions';
import { ChagnePasswordDto } from './../../../types/models/ChagePasswordDto';
import { takeEvery } from "redux-saga/effects";
import { AppActions } from "../../../appActions";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { IActionPayloaded } from "../../../reduxInfrastructure/actions/shared/IAction";
import { BaseFormSaga } from "../../../reduxInfrastructure/sagas/form/BaseFormSaga";
import { AccountServerInteractionService } from "../../../services/serverInteraction/accountServerInteractionService";
import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { CHANGEPASSWORD__CHANGEPASSWORD } from './ChanagePasswordConstants';

export class ChangePasswordSaga extends BaseFormSaga<ChagnePasswordDto, ChangePasswordActions, AccountServerInteractionService> {

    protected serverInteractionService: AccountServerInteractionService = container.get<AccountServerInteractionService>(SERVICE_IDENTIFIER.AccountServerInteractionService);
    protected actions: ChangePasswordActions = container.get<ChangePasswordActions>(SERVICE_IDENTIFIER.ChangePasswordActions);
    protected readonly _appActions: AppActions = container.get<AppActions>(SERVICE_IDENTIFIER.AppActions);

    public constructor(
    ) {
        super();

        this.changePassword = this.changePassword.bind(this);
    }

    public *watch(): Generator {
        yield takeEvery(CHANGEPASSWORD__CHANGEPASSWORD, this.changePassword);
    }

    private *changePassword(action: IActionPayloaded<ISubmitFormPayload<ChagnePasswordDto, {}>>): Generator {
        yield this.doSubmitApiRequest(action, this.serverInteractionService.changePassword(action.payload.dto));
    }
}