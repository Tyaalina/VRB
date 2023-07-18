import { IEmailConfirmationState } from './EmailConfirmationState';
import { EmailConfirmationDto } from './../../../types/models/EmailConfirmationDto';
import { BaseFormReducer } from '../../../reduxInfrastructure/reducers/form/BaseFormReducer';
import { IActionPayloaded } from '../../../reduxInfrastructure/actions/shared/IAction';
import { EMAILCONFIRMATION__INIT_FORM} from './EmailConfirmationConstants';


type State = IEmailConfirmationState;

export class EmailConfirmationReducer extends BaseFormReducer<State, EmailConfirmationDto, {}> {
  protected initialState = {
    form: {},
    helpers: {
    }
  } as IEmailConfirmationState;

  public reduce = (
    state: State = this.initialState,
    action: IActionPayloaded<any>
  ): State => {
    switch (action.type) {
      case EMAILCONFIRMATION__INIT_FORM: {
        state = this.setFormInitial(state);
        break;
      }
    }
    return state;
  }
}