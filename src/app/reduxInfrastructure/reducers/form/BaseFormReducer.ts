import { IServerErrors } from "../../../types/IServerError";
import { IBaseFormState } from "../../state/IBaseFormState";
import { BaseReducer } from "../BaseReducer";

export abstract class BaseFormReducer<TState extends IBaseFormState<TDto, THelpers>, TDto, THelpers> extends BaseReducer<TState> {
    protected setFormInitial(state: TState): TState {
        const newState = this.clearFormMessages(state);

        return {
            ...newState, form: {
                ...newState.form,
                record: undefined
            }
        };
    }

    protected setFormInitialArray(state: TState): TState {
        const newState = this.clearFormMessages(state);

        return {
            ...newState, form: {
                ...newState.form,
                record: []
            }
        };
    }

    protected clearFormMessages(state: TState): TState {
        return {
            ...state, form: {
                ...state.form,
                formError: undefined,
                formSuccess: undefined,
            }
        };
    }

    protected setFormError(state: TState, payload: IServerErrors): TState {
        return {
            ...state, form: {
                ...state.form,
                formError: payload
            }
        };
    }

    protected setFormSuccess(state: TState, payload: string): TState {
        return {
            ...state, form: {
                ...state.form,
                formSuccess: payload
            }
        };
    }

    protected receivedRecord = (state: TState, payload: TDto): TState => {
        return { ...state, form: { ...state.form, record: payload } };
    }
}