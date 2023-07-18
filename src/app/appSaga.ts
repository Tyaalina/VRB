import { inject } from "inversify";
import { takeEvery, put } from "redux-saga/effects";
import { ApiHelper } from "../shared/helpers/apiHelper";
import { NotificationService } from "../shared/helpers/notificationService";
import { AppActions } from "./appActions";
import { APP__INIT } from "./appConstants";
import container from "./inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "./inversify/inversifyTypes";
import { IAction } from "./reduxInfrastructure/actions/shared/IAction";
import { BaseSaga } from "./reduxInfrastructure/sagas/BaseSaga";
import { AccountServerInteractionService } from "./services/serverInteraction/accountServerInteractionService";

export class AppSaga extends BaseSaga<AppActions, AccountServerInteractionService> {

    protected actions: AppActions = container.get<AppActions>(SERVICE_IDENTIFIER.AppActions);
    protected serverInteractionService: AccountServerInteractionService = container.get<AccountServerInteractionService>(SERVICE_IDENTIFIER.AccountServerInteractionService);
    protected CommunicationService: ApiHelper = container.get<ApiHelper>(SERVICE_IDENTIFIER.ApiHelper);


    public constructor(
        @inject(SERVICE_IDENTIFIER.AccountServerInteractionService) serverInteractionService: AccountServerInteractionService,
        @inject(SERVICE_IDENTIFIER.AppActions) actions: AppActions,
        @inject(SERVICE_IDENTIFIER.NotificationService) notificationService: NotificationService,
        @inject(SERVICE_IDENTIFIER.ApiHelper) apiHelper: ApiHelper
    ) {
        super();

        this.initApp = this.initApp.bind(this);
    }

    public *watch(): Generator {
        yield takeEvery(APP__INIT, this.initApp);
    }

    protected *initApp(action: IAction): Generator {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        yield put(this.actions.hideLoader());
    }
}