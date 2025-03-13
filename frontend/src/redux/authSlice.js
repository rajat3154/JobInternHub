import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      user: null,
      loading: false,
};

const authSlice = createSlice({
      name: "auth",
      initialState,
      reducers: {
            setUser: (state, action) => {
                  state.user = action.payload; // Ensure this updates the state
            },
            setLoading: (state, action) => {
                  state.loading = action.payload;
            },
      },
});

export const { setUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
