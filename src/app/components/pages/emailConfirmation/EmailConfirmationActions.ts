import { EmailConfirmationDto } from './../../../types/models/EmailConfirmationDto';
import { injectable } from "inversify";
import { IBaseFormActions } from "../../../reduxInfrastructure/actions/form/IBaseFormActions";
import { IActionPayloaded, IAction } from "../../../reduxInfrastructure/actions/shared/IAction";
import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { IServerErrors } from "../../../types/IServerError";
import { EMAILCONFIRMATION__EMAILCONFIRMATION as EMAILCONFIRMATION__EMAILCONFIRMATION, EMAILCONFIRMATION__INIT_FORM as EMAILCONFIRMATION__INIT_FORM, EMAILCONFIRMATION__SET_FORM_ERROR as EMAILCONFIRMATION__SET_FORM_ERROR } from "./EmailConfirmationConstants";

@injectable()
export class EmailConfirmationActions implements IBaseFormActions {
    public emailConfirmation = (payload: ISubmitFormPayload<EmailConfirmationDto, {}>): IActionPayloaded<ISubmitFormPayload<EmailConfirmationDto, {}>> => ({
        type: EMAILCONFIRMATION__EMAILCONFIRMATION,
        payload
    });

    public initForm = (): IAction => ({
        type: EMAILCONFIRMATION__INIT_FORM
    });

    public setFormError = (payload: IServerErrors): IActionPayloaded<IServerErrors> => ({
        type: EMAILCONFIRMATION__SET_FORM_ERROR,
        payload
    });
}
