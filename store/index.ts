import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import checkout from './checkout.slice';

export const actions = {
  checkout: checkout.actions,
};

const rootReducer = combineReducers({
  checkout: checkout.reducer,
});

// export function createStore(initialState = {}): Store {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState: initialState
//   });
// }

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch