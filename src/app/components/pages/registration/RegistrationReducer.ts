import { IRegistrationState } from './RegisrationState';
import { RegistrationDto } from './../../../types/models/RegistrationDto';
import { BaseFormReducer } from '../../../reduxInfrastructure/reducers/form/BaseFormReducer';
import { IActionPayloaded } from '../../../reduxInfrastructure/actions/shared/IAction';
import { REGISTRATION__INIT_FORM, REGISTRATION__SET_FORM_ERROR, REGISTRATION__SET_FORM_SUCCESS } from './RegistrationContants';


type State = IRegistrationState;

export class RegistrationReducer extends BaseFormReducer<State, RegistrationDto, {}> {
  protected initialState = {
    form: {},
    helpers: {
    }
  } as IRegistrationState;

  public reduce = (
    state: State = this.initialState,
    action: IActionPayloaded<any>
  ): State => {
    switch (action.type) {
      case REGISTRATION__INIT_FORM: {
        state = this.setFormInitial(state);
        break;
      }

      case REGISTRATION__SET_FORM_ERROR: {
        state = this.setFormError(state, action.payload);
        break;
      }

      case REGISTRATION__SET_FORM_SUCCESS: {
        state = this.setFormSuccess(state, action.payload);
        break;
      }
    }
    return state;
  }
}
