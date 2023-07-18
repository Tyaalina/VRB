import { RegistrationDto } from './../../../types/models/RegistrationDto';
import { injectable } from "inversify";
import { IBaseFormActions } from "../../../reduxInfrastructure/actions/form/IBaseFormActions";
import { IActionPayloaded, IAction } from "../../../reduxInfrastructure/actions/shared/IAction";
import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { IServerErrors } from "../../../types/IServerError";
import { REGISTRATION__REGISTRATION, REGISTRATION__INIT_FORM, REGISTRATION__CLEAR_FORM_MESSAGES, REGISTRATION__SET_FORM_ERROR, REGISTRATION__SET_FORM_SUCCESS } from "./RegistrationContants";

@injectable()
export class RegistrationActions implements IBaseFormActions {
    public registration = (payload: ISubmitFormPayload<RegistrationDto, {}>): IActionPayloaded<ISubmitFormPayload<RegistrationDto, {}>> => ({
        type: REGISTRATION__REGISTRATION,
        payload
    });

    public initForm = (): IAction => ({
        type: REGISTRATION__INIT_FORM
    });

    public clearFormMessages = (): IAction => ({
        type: REGISTRATION__CLEAR_FORM_MESSAGES
    });

    public setFormError = (payload: IServerErrors): IActionPayloaded<IServerErrors> => ({
        type: REGISTRATION__SET_FORM_ERROR,
        payload
    });

    public setFormSuccess = (payload: string): IActionPayloaded<string> => ({
        type: REGISTRATION__SET_FORM_SUCCESS,
        payload
    });
}
