import { IServerErrors } from "../../types/IServerError";

export interface IBaseFormState<TDto, THelpers> {
    form: {
        record: TDto;
        formError?: IServerErrors;
        formSuccess?: string;
    };
    helpers: THelpers;
}