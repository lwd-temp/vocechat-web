import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authDataReducer from "./slices/auth.data";
import uiReducer from "./slices/ui";
import channelsReducer from "./slices/channels";
import channelMsgReducer from "./slices/message.channel";
import userMsgReducer from "./slices/message.user";
import { authApi } from "./services/auth";
import { contactApi } from "./services/contact";
import { channelApi } from "./services/channel";
import { serverApi } from "./services/server";

const getStore = () => {
  const reducer = combineReducers({
    ui: uiReducer,
    channels: channelsReducer,
    userMsg: userMsgReducer,
    channelMsg: channelMsgReducer,
    authData: authDataReducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [channelApi.reducerPath]: channelApi.reducer,
    [serverApi.reducerPath]: serverApi.reducer,
  });
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authApi.middleware,
        contactApi.middleware,
        channelApi.middleware,
        serverApi.middleware
      ),
  });
  setupListeners(store.dispatch);
  return store;
};
export default getStore;