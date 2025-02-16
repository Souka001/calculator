import { configureStore, createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: { display: '0', expression: '' },
    reducers: {
        append: (state, action) => {
            const value = action.payload;

            // Si l'affichage est "0", remplacer directement sauf si l'entrée est "."
            if (state.display === "0" && value !== ".") {
                state.display = value;
                state.expression = value;
            } else {
                state.display += value;
                state.expression += value;
            }
        },
        clear: (state) => {
            state.expression = '';
            state.display = '0';
        },
        evaluate: (state) => {
            try {
                state.display = eval(state.expression).toString();
                state.expression = state.display;
            } catch (error) {
                state.display = 'Error';
                state.expression = '';
            }
        }
    }
});

export const { append, clear, evaluate } = calculatorSlice.actions;
export const store = configureStore({ reducer: calculatorSlice.reducer });
