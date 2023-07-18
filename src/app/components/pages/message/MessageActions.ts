import { injectable } from "inversify";
import { IBaseFormActions } from "../../../reduxInfrastructure/actions/form/IBaseFormActions";
import { IAction, IActionPayloaded } from "../../../reduxInfrastructure/actions/shared/IAction";
import { IServerErrors } from "../../../types/IServerError";
import { TopicMessageDto } from "../../../types/models/TopicMessageDto";
import { MESSAGE, MESSAGE__SET_FORM_ERROR, SET_MESSAGE } from "./MessageConstants";

@injectable()
export class MessageActions implements IBaseFormActions {
    public initForm = (): IAction => ({
        type: MESSAGE
    });

    public setMessage = (payload: TopicMessageDto[]) : IActionPayloaded<TopicMessageDto[]> => ({
        type: SET_MESSAGE,
        payload
    })

    public setFormError = (payload: IServerErrors): IActionPayloaded<IServerErrors> => ({
        type: MESSAGE__SET_FORM_ERROR,
        payload
    });
}