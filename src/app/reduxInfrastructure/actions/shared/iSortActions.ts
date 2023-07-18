import { IActionPayloaded } from "./IAction";
import { ISortChangedPayload } from "../../payloads/ISortChangedPayload";

export interface ISortActions {
    sortChanged(
        sortBy: string
    ): IActionPayloaded<ISortChangedPayload>;
}