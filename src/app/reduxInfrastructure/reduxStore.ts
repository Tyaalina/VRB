import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore, Middleware, Store } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { rootSaga } from "./reduxSaga";
import { rootReducer } from "./rootReducer";

export function configureStore(history: any, initialState: any = undefined): any {
    const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

    const middlewares: Middleware[] = [routerMiddleware(history), sagaMiddleware];

    const logger: Middleware = createLogger({});
    middlewares.push(logger);

    const enhancer: any = compose(applyMiddleware(...middlewares));

    const store: Store = createStore(rootReducer(history), initialState, enhancer);
    sagaMiddleware.run(rootSaga);

    return store;
}
