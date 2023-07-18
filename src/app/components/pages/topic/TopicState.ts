import { IBaseFormState } from '../../../reduxInfrastructure/state/IBaseFormState';
import { TopicDto } from '../../../types/models/TopicDto';

export type ITopicState = IBaseFormState<TopicDto[], {}>;