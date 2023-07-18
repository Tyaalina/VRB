import { IActionPayloaded } from "../../../reduxInfrastructure/actions/shared/IAction";
import { BaseFormReducer } from "../../../reduxInfrastructure/reducers/form/BaseFormReducer";
import { TopicDto } from "../../../types/models/TopicDto";
import { SET_TOPICS, TOPIC } from "./TopicConstants";
import { ITopicState } from "./TopicState";

type State = ITopicState;

export class TopicReducer extends BaseFormReducer<State, TopicDto[], {}> {
    protected initialState = {
        form: {
            record: []
        },
        helpers: {
        }
    } as ITopicState;

    public reduce = (
        state: State = this.initialState,
        action: IActionPayloaded<any>
    ): State => {
        switch (action.type) {
            case TOPIC: { 
                state = this.setFormInitialArray(state);
          
                break;
            }

            case SET_TOPICS: {
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