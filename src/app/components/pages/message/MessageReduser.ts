import { MESSAGE } from "../../../../shared/constants/routes";
import { IActionPayloaded } from "../../../reduxInfrastructure/actions/shared/IAction";
import { BaseFormReducer } from "../../../reduxInfrastructure/reducers/form/BaseFormReducer";
import { TopicMessageDto } from "../../../types/models/TopicMessageDto";
import { SET_MESSAGE } from "./MessageConstants";
import { IMessageState } from "./MessageState";

type State = IMessageState;

export class MessageReducer extends BaseFormReducer<State, TopicMessageDto[], {}> {
    protected initialState = {
        form: {
            record: []
        },
        helpers: {
        }
    } as IMessageState;

    public reduce = (
        state: State = this.initialState,
        action: IActionPayloaded<any>
    ): State => {
        switch (action.type) {
            case MESSAGE: { 
                state = this.setFormInitialArray(state);
          
                break;
            }

            case SET_MESSAGE: {
                console.log("зашёл")
                state = this.setFormInitialArray(state);
                state.form.record = action.payload
                state = {
                    ...state,
                    helpers: {
                        ...state.helpers,
                        isLoading: false
                    }
                }
                break;
            }
        }
        return state;
    }
}