import { injectable } from "inversify";
import { APP__HIDE_LOADER } from "./appConstants";
import { IAppState } from "./IAppState";
import { IActionPayloaded } from "./reduxInfrastructure/actions/shared/IAction";
import { BaseReducer } from "./reduxInfrastructure/reducers/BaseReducer";

type State = IAppState;

@injectable()
export class AppReducer extends BaseReducer<State> {
    initialState = {
        isAppLoading: true
    };

    public reduce = (
        state: State = this.initialState,
        action: IActionPayloaded<any>
    ): State => {
        switch (action.type) {

            case APP__HIDE_LOADER: {
                state = this._hideLoader(state);
                break;
            }

        }
        return state;
    }

    private _hideLoader(state: State): State {
        const newState = { ...state };

        newState.isAppLoading = false;

        return newState;
    }
}