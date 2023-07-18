import { IActionPayloaded } from "./IAction";
import { IFilterChangedPayload } from "../../payloads/IFilterChangedPayload";

export interface IFilterActions {
    filterChanged(payload: IFilterChangedPayload): IActionPayloaded<IFilterChangedPayload>;
}