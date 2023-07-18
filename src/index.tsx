import { ConnectedRouter } from "connected-react-router";
import history from "../src/app/utils/helpers/HistoryHelper";
import React from "react";
import ReactDOM from 'react-dom';
import "react-confirm-alert/src/react-confirm-alert.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import { App } from "./App";
import { configureStore } from "./app/reduxInfrastructure/reduxStore";
import "./index.css";

const store = configureStore(history);
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    rootElement
);