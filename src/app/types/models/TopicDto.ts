import {subTopicInfosDto} from "./subTopicInfosDto"
import {TopicMessageDto} from "./TopicMessageDto"

export interface TopicDto {
    topicId: number,
    title: string,
    topicTitle: string,
    parentTopicInfo: string | undefined,
    subTopicInfos: Array<subTopicInfosDto[]>,
    topicMessageInfos:  Array<TopicMessageDto[]>,
    subscriberIds:  Array<string>
}