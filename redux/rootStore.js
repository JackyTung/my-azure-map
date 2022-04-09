import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import rootEpic from "./rootEpic";
import rootReducer from "./rootReducer";

const isServer = typeof window !== "object";
const isProduction = process.env.NODE_ENV === "production";

const makeStore = () => {
  const epicMiddleware = createEpicMiddleware();
  const reduxMiddleware = applyMiddleware(epicMiddleware);

  const composeEnhancers =
    !isProduction && !isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const Store = createStore(rootReducer, composeEnhancers(reduxMiddleware));
  epicMiddleware.run(rootEpic);
  return Store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
