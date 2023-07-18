import { CHANGEPASSWORD__CHANGEPASSWORD, CHANGEPASSWORD__CLEAR_FORM_MESSAGES, CHANGEPASSWORD__INIT_FORM, CHANGEPASSWORD__SET_FORM_ERROR, CHANGEPASSWORD__SET_FORM_SUCCESS } from './ChanagePasswordConstants';
import { injectable } from "inversify";
import { IBaseFormActions } from "../../../reduxInfrastructure/actions/form/IBaseFormActions";
import { IActionPayloaded, IAction } from "../../../reduxInfrastructure/actions/shared/IAction";
import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { IServerErrors } from "../../../types/IServerError";
import { ChagnePasswordDto } from "../../../types/models/ChagePasswordDto";

@injectable()
export class ChangePasswordActions implements IBaseFormActions {
    public changePassword = (payload: ISubmitFormPayload<ChagnePasswordDto, {}>): IActionPayloaded<ISubmitFormPayload<ChagnePasswordDto, {}>> => ({
        type: CHANGEPASSWORD__CHANGEPASSWORD,
        payload
    });

    public initForm = (): IAction => ({
        type: CHANGEPASSWORD__INIT_FORM
    });

    public clearFormMessages = (): IAction => ({
        type: CHANGEPASSWORD__CLEAR_FORM_MESSAGES
    });

    public setFormError = (payload: IServerErrors): IActionPayloaded<IServerErrors> => ({
        type: CHANGEPASSWORD__SET_FORM_ERROR,
        payload
    });

    public setFormSuccess = (payload: string): IActionPayloaded<string> => ({
        type: CHANGEPASSWORD__SET_FORM_SUCCESS,
        payload
    });
}
