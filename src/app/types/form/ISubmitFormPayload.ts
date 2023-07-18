import { IFormHelperPayload } from "./IFormHelperPaload";

export interface ISubmitFormPayload<TDto, TProps> extends IFormHelperPayload<TDto, TProps> {
    dto: TDto;
    id: string | undefined;
}