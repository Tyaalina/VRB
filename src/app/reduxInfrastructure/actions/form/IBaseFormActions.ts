import { IServerErrors } from "../../../types/IServerError";
import { IAction, IActionPayloaded } from "../shared/IAction";

export interface IBaseFormActions {
    setFormError(errors: IServerErrors): any;
    initForm(): IAction;
}