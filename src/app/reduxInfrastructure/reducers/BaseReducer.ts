import { injectable } from "inversify";
import { IActionPayloaded } from "../actions/shared/IAction";

@injectable()
export abstract class BaseReducer<State> {
    protected abstract initialState: State;

    public getReducer = () => {
        return (state: State, action: IActionPayloaded<any>): State =>
            this.reduce(state, action);
    }

    protected abstract reduce: (
        state: State,
        action: IActionPayloaded<any>
    ) => State;
}