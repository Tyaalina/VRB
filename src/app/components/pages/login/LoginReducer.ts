import { LoginDto } from './../../../types/models/LoginDto';
import { ILoginState } from './LoginState';
import { BaseFormReducer } from '../../../reduxInfrastructure/reducers/form/BaseFormReducer';
import { IActionPayloaded } from '../../../reduxInfrastructure/actions/shared/IAction';
import { LOGIN__EMAIL_CHANGED, LOGIN__INIT_FORM, LOGIN__SET_FORM_ERROR, LOGIN__SET_FORM_SUCCESS, LOGIN__PASSWORD_CHANGED, LOGIN__REVEAL_CHAGNED, LOGIN__LOGIN } from './LoginConstants';


type State = ILoginState;

export class LoginReducer extends BaseFormReducer<State, LoginDto, {}> {
  protected initialState = {
    form: {},
    helpers: {
    }
  } as ILoginState;

  public reduce = (
    state: State = this.initialState,
    action: IActionPayloaded<any>
  ): State => {
    switch (action.type) {
        case LOGIN__INIT_FORM: {
            state = this.setFormInitial(state);
            state = {
                ...state,
                helpers: {
                    ...state.helpers,
                    isLoading: false
                }
            }
            break;
        }

        case LOGIN__LOGIN: {
            state = {
                ...state,
                helpers: {
                    ...state.helpers,
                    isLoading: true
                }
            }
            break;
        }

        case LOGIN__SET_FORM_ERROR: {
            state = this.setFormError(state, action.payload);
            state = {
                ...state,
                helpers: {
                    ...state.helpers,
                    isLoading: false
                }
            }
            break;
        }

        case LOGIN__SET_FORM_SUCCESS: {
            state = this.setFormSuccess(state, action.payload);
            state = {
                ...state,
                helpers: {
                    ...state.helpers,
                    isLoading: false
                }
            }
            break;
        }

        case LOGIN__EMAIL_CHANGED: {
            state = {
                ...state,
                form: {
                        ...state.form,
                        record: {
                            username: action.payload,
                            password: state.form.record?.password
                        }
                }
            }
            break;
        }
        case LOGIN__PASSWORD_CHANGED: {
            state = {
                ...state,
                form: {
                        ...state.form,
                        record: {
                            username: state.form.record?.username,
                            password: action.payload
                        }
                }
            }
            break;
        }
        case LOGIN__REVEAL_CHAGNED: {
            state = {
                ...state,
                helpers: {
                    ...state.helpers,
                    reveal: action.payload
                }
            }
            break;
        }
    }
    return state;
  }
}
