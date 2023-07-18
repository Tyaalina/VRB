import { TOPIC, TOPIC__SET_FORM_ERROR, TOPIC_CREATE, SET_TOPICS} from './TopicConstants'
import { injectable } from "inversify";
import { IBaseFormActions } from "../../../reduxInfrastructure/actions/form/IBaseFormActions";
import { IActionPayloaded, IAction } from "../../../reduxInfrastructure/actions/shared/IAction";
import { IServerErrors } from "../../../types/IServerError";
import { TopicDto } from '../../../types/models/TopicDto';

@injectable()
export class TopicActions implements IBaseFormActions {
    public initForm = (): IAction => ({
        type: TOPIC
    });

    public setTopics = (payload: TopicDto[]) : IActionPayloaded<TopicDto[]> => ({
        type: SET_TOPICS,
        payload
    })
    
    public createTopic = (payload: string): IActionPayloaded<string> => ({
        type: TOPIC_CREATE,
        payload
    });

    public setFormError = (payload: IServerErrors): IActionPayloaded<IServerErrors> => ({
        type: TOPIC__SET_FORM_ERROR,
        payload
    });
}