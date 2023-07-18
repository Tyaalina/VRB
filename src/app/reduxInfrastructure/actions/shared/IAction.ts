import { Action } from "redux";

export type IAction = Action;

export interface IActionPayloaded<T> extends IAction {
    type: string;
    payload: T;
}
