import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

type RootStateType = ReturnType<typeof rootReducer>;
type AppStoreType = ReturnType<typeof setupStore>;
type AppDispatchType = AppStoreType['dispatch'];

export { setupStore, RootStateType, AppStoreType, AppDispatchType };
