import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const __addNumber = createAsyncThunk(
  // 첫번째 인자 : action value
  "addNumber",
  // 두번째 인자 : 콜백함수
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 3000);
  }
);

const initialState = {
  number: 0,
};

// slice는 이 createSlice라는 toolkit의 api를 통해서 만들 수가 있습니다.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // 이 함수들의 이름이 actinValue가 되고
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
