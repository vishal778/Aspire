import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import HomeReducer from './home';

const homeReducerPersistConfig = {
  key: 'homeReducerPersistConfig',
  storage: AsyncStorage,
  whitelist: [],
};
const rootReducer = combineReducers({
  HomeReducer: persistReducer(homeReducerPersistConfig, HomeReducer),
});

export interface RootState {}

export default rootReducer;
