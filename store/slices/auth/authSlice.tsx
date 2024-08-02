import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../apollo/client";
import {
  LoginInput,
  LoginMutation,
  UserInput,
  RegisterMutation,
  User,
  LoginDocument,
  RegisterDocument,
} from "../../../graphql/generated/schema";
export interface IinitialStateAuth {
  isAuthenticated: Boolean;
  user: User | undefined | null;
  token: String | null | undefined;
  loading: Boolean;
  isError: Boolean;
  error: String | undefined;
}
const initialState: IinitialStateAuth = {
  isAuthenticated: false,
  user: {},
  token: null,
  loading: false,
  isError: false,
  error: "",
};

export const login = createAsyncThunk<
  LoginMutation | null | undefined,
  LoginInput
>(
  "auth/login",

  async (user: LoginInput) => {
    try {
      const { data } = await client.mutate({
        mutation: LoginDocument,
        variables: {
          user: user,
        },
      });

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
);

export const register = createAsyncThunk<
  RegisterMutation | null | undefined,
  UserInput
>("auth/register", async (user: UserInput) => {
  try {
    const { data } = await client.mutate({
      mutation: RegisterDocument,
      variables: {
        user: user,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      // state.user = "";
      // state.token = '';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(login.fulfilled, (state, payload) => {
        state.loading = false;
        state.user = payload.payload?.login?.user;
        state.isAuthenticated = true;
        state.token = payload.payload?.login?.accessToken;
        state.isError = false;
        state.error = "";
      })
      .addCase(login.rejected, (state, payload) => {
        state.user = null;
        state.loading = false;
        state.isError = true;

      });
    //===== sign up =======

    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(register.fulfilled, (state, payload) => {
        state.loading = false;

        state.isError = false;
        state.error = "";
      })
      .addCase(register.rejected, (state, payload) => {
        state.user = null;
        state.loading = false;
        state.isError = true;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;


