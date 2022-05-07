import api from "@/services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { NewsletterSend, NewsletterState } from "./Newsletter.types";

const INITIAL_STATE: NewsletterState = {
  hasSended: false,
  hasError: false,
  isLoading: false  
};

export const sendNewsletter = createAsyncThunk(
  "newsletter/sendNewsletter",
  async (data: NewsletterSend) => {
    await api.post("newsletter", data);
  }
);

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState: INITIAL_STATE,
  reducers: {
    canResendNewsletter: (state) => {
      state.hasSended = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendNewsletter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendNewsletter.fulfilled, (state) => {
        state.isLoading = false;
        state.hasSended = true;
      })
      .addCase(sendNewsletter.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
});

export const { canResendNewsletter } = newsletterSlice.actions;
export default newsletterSlice.reducer;
