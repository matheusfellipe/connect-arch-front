import { createSlice } from '@reduxjs/toolkit';
import { api, User } from './auth';
import type { RootState } from '../../store';

type AuthState = {
  user: User | null;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
};

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: '',
    refreshToken: '',
    isAuthenticated: false,
  } as AuthState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = '';
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload: { user, accessToken } }) => {
        state.user = user;
        state.accessToken = accessToken;
        state.isAuthenticated = true;
      },
    );
  },
});

export const { logout, setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
