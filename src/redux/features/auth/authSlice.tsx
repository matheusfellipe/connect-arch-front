import { createSlice } from '@reduxjs/toolkit';
import { User, authApi } from '../../app/services/auth/authApiSlice';
import type { RootState } from '../../app/store';

type AuthState = {
  payload: User | null;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
};

const slice = createSlice({
  name: 'auth',
  initialState: {
    payload: null,
    accessToken: '',
    refreshToken: '',
    isAuthenticated: false,
  } as AuthState,
  reducers: {
    setCredentials: (state, action) => {
      const { payload, accessToken } = action.payload;
      state.payload = payload;
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.payload = null;
      state.accessToken = '';
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload: { payload, accessToken, refreshToken } }) => {
        state.payload = payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.isAuthenticated = true;
      },
    );
  },
});

export const { logout, setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.payload;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
