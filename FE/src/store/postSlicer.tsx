import { createSlice } from '@reduxjs/toolkit';

interface IPostsObj {
  title?: string;
  content?: string;
  imageUrl?: string;
}
interface IPosts {
  search: string;
  posts: IPostsObj[];
}

const initialState: IPosts = {
  search: '',
  posts: [],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
