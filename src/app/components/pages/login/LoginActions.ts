import { LOGIN__LOGIN, LOGIN__INIT_FORM, LOGIN__CLEAR_FORM_MESSAGES, LOGIN__SET_FORM_ERROR, LOGIN__SET_FORM_SUCCESS, LOGIN__EMAIL_CHANGED, LOGIN__PASSWORD_CHANGED, LOGIN__REVEAL_CHAGNED } from './LoginConstants';
import { LoginDto } from './../../../types/models/LoginDto';
import { injectable } from "inversify";
import { IBaseFormActions } from "../../../reduxInfrastructure/actions/form/IBaseFormActions";
import { IActionPayloaded, IAction } from "../../../reduxInfrastructure/actions/shared/IAction";
import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { IServerErrors } from "../../../types/IServerError";

@injectable()
export class LoginActions implements IBaseFormActions {
    public login = (payload: ISubmitFormPayload<LoginDto, {}>): IActionPayloaded<ISubmitFormPayload<LoginDto, {}>> => ({
        type: LOGIN__LOGIN,
        payload
    });

    public initForm = (): IAction => ({
        type: LOGIN__INIT_FORM
    });

    public clearFormMessages = (): IAction => ({
        type: LOGIN__CLEAR_FORM_MESSAGES
    });

    public setFormError = (payload: IServerErrors): IActionPayloaded<IServerErrors> => ({
        type: LOGIN__SET_FORM_ERROR,
        payload
    });

    public setFormSuccess = (payload: string): IActionPayloaded<string> => ({
        type: LOGIN__SET_FORM_SUCCESS,
        payload
    });

    public emailChanged = (payload: string): IActionPayloaded<string> => ({
        type: LOGIN__EMAIL_CHANGED,
        payload
    });

    public passwordChanged = (payload: string): IActionPayloaded<string> => ({
        type: LOGIN__PASSWORD_CHANGED,
        payload
    });

    public revealChanged = (payload: boolean): IActionPayloaded<boolean> => ({
        type: LOGIN__REVEAL_CHAGNED,
        payload
    });
}
