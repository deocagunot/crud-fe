import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./dataActions";

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postsSlice;
