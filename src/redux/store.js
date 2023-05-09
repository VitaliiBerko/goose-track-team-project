import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/auth.slice';
import { calendarReducer } from './calendar/calendar.slice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    calendar: calendarReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
  }),
});

export const persistor = persistStore(store);
