import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../apollo/client";
import {

  FetchAllServiceResponsce,
  FetchAllServiceQuery,
  FetchAllServiceDocument,
  FetchAllServiceQueryVariables
} from "../../../graphql/generated/schema";
export interface IinitialStateService {
services: FetchAllServiceResponsce| undefined | null
  loading: Boolean;
  isError: Boolean;
  error: String | undefined;
}
const initialState: IinitialStateService = {
  services: {},
  loading: false,
  isError: false,
  error: "",
};

export const fetchAllServices = createAsyncThunk<
  FetchAllServiceQuery | null | undefined,
  FetchAllServiceQueryVariables
>(
  "service/fetchAll",

  async ({filters , page , limit}) => {
    try {
      const { data } = await client.query({
        query: FetchAllServiceDocument,
        variables: {
filters,         page,limit
        },
      });

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
);



export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllServices.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchAllServices.fulfilled, (state, payload) => {
        state.loading = false;
        state.services = payload.payload?.fetchAllService;

        state.isError = false;
        state.error = "";
      })
      .addCase(fetchAllServices.rejected, (state, payload) => {
        state.services = {};
        state.loading = false;
        state.isError = true;

      });



  },
});

export const {  } = serviceSlice.actions;

export default serviceSlice.reducer;


