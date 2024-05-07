import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // local Storage로 지정
import { combineReducers } from 'redux';
import user from './user'

// Reduce Persist의 구성 객체를 생성
const persistConfig = {
  //  key: 저장된 데이터를 식별하는 데 사용
  // storage: Redux 상태를 저장할 방법 지정
  key: 'root',
  storage: storage,
};

// combineReducers를 사용해 user를 rootReducer로 설정
const rootReducer = combineReducers({ user })
// persistReducer를 사용해 reudx-persist 적용
const persistedReducer = persistReducer(persistConfig, rootReducer);

// persistedReducer로 스토어 생성
export const store = createStore(persistedReducer);
// 생성한 store를 persistStore에 담아 persistor 생성
export const persistor = persistStore(store);


