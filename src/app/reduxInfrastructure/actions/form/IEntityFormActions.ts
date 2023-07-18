import { ISubmitFormPayload } from "../../../types/form/ISubmitFormPayload";
import { IActionPayloaded } from "../shared/IAction";
import { IBaseFormActions } from "./IBaseFormActions";

export interface IEntityFormActions<TDto, TCreateDto, TUpdateDTO> extends IBaseFormActions {
    postItem?(payload: ISubmitFormPayload<TCreateDto, {}>): IActionPayloaded<ISubmitFormPayload<TCreateDto, {}>>;
    putItem?(payload: ISubmitFormPayload<TUpdateDTO, {}>): IActionPayloaded<ISubmitFormPayload<TUpdateDTO, {}>>;
    getRecord(id: string): IActionPayloaded<string>;
    receivedRecord(payload: TDto): IActionPayloaded<TDto>;
}