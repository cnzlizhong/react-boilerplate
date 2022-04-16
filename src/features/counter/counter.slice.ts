import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'couter',
    initialState,
    reducers: {
        // increment
        deposited: (state, action: PayloadAction<number>) => {
            // Immer takes care of the immutability.
            state.value += action.payload;
        },
        // withdraw
        withdrawn: (state) => {
            state.value -= 20;
        },
        // bankRupted
        bankRupted: (state) => {
            state.value = 0;
        },
    },
});

export const { deposited, withdrawn, bankRupted } = counterSlice.actions;

export default counterSlice.reducer;
