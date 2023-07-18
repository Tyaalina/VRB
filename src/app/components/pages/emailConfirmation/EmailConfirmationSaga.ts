import { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { AppActions } from "../../../appActions";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { IActionPayloaded } from "../../../reduxInfrastructure/actions/shared/IAction";
import { BaseFormSaga } from "../../../reduxInfrastructure/sagas/form/BaseFormSaga";
import { AccountServerInteractionService } from "../../../services/serverInteraction/accountServerInteractionService";
import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { EmailConfirmationDto } from "../../../types/models/EmailConfirmationDto";
import { EmailConfirmationActions } from "./EmailConfirmationActions";
import { EMAILCONFIRMATION__EMAILCONFIRMATION } from "./EmailConfirmationConstants";

export class EmailConfirmationSaga extends BaseFormSaga<EmailConfirmationDto, EmailConfirmationActions, AccountServerInteractionService> {

    protected serverInteractionService: AccountServerInteractionService = container.get<AccountServerInteractionService>(SERVICE_IDENTIFIER.AccountServerInteractionService);
    protected actions: EmailConfirmationActions = container.get<EmailConfirmationActions>(SERVICE_IDENTIFIER.RegistrationActions);
    protected readonly _appActions: AppActions = container.get<AppActions>(SERVICE_IDENTIFIER.AppActions);

    public constructor(
    ) {
        super();

        this.emailConfirmation = this.emailConfirmation.bind(this);
    }

    public *watch(): Generator {
        yield takeEvery(EMAILCONFIRMATION__EMAILCONFIRMATION, this.emailConfirmation);
    }

    private *emailConfirmation(action: IActionPayloaded<ISubmitFormPayload<EmailConfirmationDto, {}>>): Generator {
        yield this.doSubmitApiRequest(action, this.serverInteractionService.emailConfirmation(action.payload.dto));
    }
}