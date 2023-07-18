
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./app/i18n/i18n";
import routesConfig from "./shared/constants/routesConfig";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export const customTheme = {
    global: {
        colors: {
            focus: 'none',
            border: '#E9FFE1',
            placeholder: '#E9FFE1',
        },
        control: {
            border: {
                radius: '50px',
            },
        },
        font: {
            family: 'Prosto One'
        },
    },
    button: {
        color: '#ADFF00',
        border: {
            color: '#E9FFE1',
        }
    },

    text: {
        medium: {
            size: '20px',
        }
    }
}

export const App: () => JSX.Element = () => {
    const routeKey = 'route';
    return (
        <>
            <Switch>
                {routesConfig.map((item, index) => (
                    <Route key={routeKey} component={item.component} path={item.path} exact />
                ))}
				<Redirect from="/" to="/home" />
            </Switch>
        </>
    );
};
