import { ComponentType } from "react";

export interface IComponentRoute {
    path: string;
    component: ComponentType<any>;
    exact?: boolean;
}