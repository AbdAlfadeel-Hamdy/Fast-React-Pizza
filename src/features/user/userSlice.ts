import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getAddress } from "../../services/apiGeocoding";
import { getPosition } from "../../utils/helpers";

// Fetch Address Thunk
const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) Get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };
  // 2) Use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
  // 3) Return an object with the data that we are interested in
  return { position, address };
});

type User = {
  username: string;
  status: "idle" | "loading" | "error";
  address: string | null;
  position: {
    latitude: number;
    longitude: number;
  } | null;
  error: undefined | string;
};

const initialState: User = {
  username: "",
  status: "idle",
  address: null,
  position: null,
  error: undefined,
};

type UpdateNameAction = {
  payload: string;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action: UpdateNameAction) {
      state.username = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = (state: RootState) => state.user.username;
