import { ChagnePasswordDto } from './../../../types/models/ChagePasswordDto';
import { IChangePasswordState } from './ChangePasswordState';
import { BaseFormReducer } from '../../../reduxInfrastructure/reducers/form/BaseFormReducer';
import { IActionPayloaded } from '../../../reduxInfrastructure/actions/shared/IAction';
import { CHANGEPASSWORD__INIT_FORM, CHANGEPASSWORD__SET_FORM_ERROR, CHANGEPASSWORD__SET_FORM_SUCCESS } from './ChanagePasswordConstants';


type State = IChangePasswordState;

export class ChangePasswordReducer extends BaseFormReducer<State, ChagnePasswordDto, {}> {
  protected initialState = {
    form: {},
    helpers: {
    }
  } as IChangePasswordState;

  public reduce = (
    state: State = this.initialState,
    action: IActionPayloaded<any>
  ): State => {
    switch (action.type) {
      case CHANGEPASSWORD__INIT_FORM: {
        state = this.setFormInitial(state);
        break;
      }

      case CHANGEPASSWORD__SET_FORM_ERROR: {
        state = this.setFormError(state, action.payload);
        break;
      }

      case CHANGEPASSWORD__SET_FORM_SUCCESS: {
        state = this.setFormSuccess(state, action.payload);
        break;
      }
    }
    return state;
  }
}
