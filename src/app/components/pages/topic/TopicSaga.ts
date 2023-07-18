import { AccountServerInteractionService } from "../../../services/serverInteraction/accountServerInteractionService";
import { TopicDto } from "../../../types/models/TopicDto";
import { TopicActions } from "./TopicAction";
import { takeEvery, put } from "redux-saga/effects";
import { IActionPayloaded } from "../../../reduxInfrastructure/actions/shared/IAction";
import { SET_TOPICS, TOPIC } from "./TopicConstants";
import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { AxiosResponse } from "axios";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { Dispatch } from "redux";
import { BaseSaga } from "../../../reduxInfrastructure/sagas/BaseSaga";


export class TopicSaga extends BaseSaga<TopicActions, AccountServerInteractionService> {
    protected serverInteractionService: AccountServerInteractionService = container.get<AccountServerInteractionService>(SERVICE_IDENTIFIER.AccountServerInteractionService);
    
    public constructor(
        ) {
            super();
    
            this.topic = this.topic.bind(this);
        }
    
        public *watch(): Generator {
            yield takeEvery(TOPIC, this.topic);
        }
    
        private *topic(): Generator {
            yield this.doApiRequest( this.serverInteractionService.getTopic(),
            (response: AxiosResponse<TopicDto[]>) => {
                put({ type: SET_TOPICS, response });
             });
        }
}