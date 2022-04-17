import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const depositedReducer: CaseReducer<CounterState, PayloadAction<number>> = (state, action) => {
    state.value += action.payload;
};

const withdrawnReducer: CaseReducer<CounterState> = (state) => {
    state.value -= 20;
};

const counterSlice = createSlice({
    name: 'couter',
    initialState,
    reducers: {
        // Immer takes care of the immutability.
        // increment
        deposited: depositedReducer,
        // withdraw
        withdrawn: withdrawnReducer,
        // bankRupted
        bankRupted: (state) => {
            state.value = 0;
        },
    },
});

export const { deposited, withdrawn, bankRupted } = counterSlice.actions;

export default counterSlice.reducer;
