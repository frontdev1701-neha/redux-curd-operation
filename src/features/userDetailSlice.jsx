import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createUser = createAsyncThunk(
  "createuser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://69159af184e8bd126afa99a7.mockapi.io/curd/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userDetailSlice = createSlice({
  name: 'userdetail',
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: "",
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
  
});

export const { searchUser } = userDetailSlice.actions;
export default userDetailSlice.reducer;
