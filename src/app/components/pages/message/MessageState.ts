import { IBaseFormState } from '../../../reduxInfrastructure/state/IBaseFormState';
import { TopicMessageDto } from '../../../types/models/TopicMessageDto';

export type IMessageState = IBaseFormState<TopicMessageDto[], {}>;