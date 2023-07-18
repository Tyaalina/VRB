import React from "react";
import { RouteProps } from "react-router-dom";

type NoAuthRouteProps = RouteProps;

interface ILocationState {
    from: ILocationStateFrom;
}

interface ILocationStateFrom {
    pathname: string;
}

export const NoAuthRoute : (props: NoAuthRouteProps) => JSX.Element = (props: NoAuthRouteProps) => {
    return(<p>Данная страница не доступна</p>);
};
