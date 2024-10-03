import { createSlice } from '@reduxjs/toolkit'

export const addToCard = createSlice({
  name: 'addToCard',
  initialState: {
    card: [],
},
reducers: {
    increment: (state , action) => {
        if (action.payload.length >= 0) {
            state.card = action.payload;
        }
        else{
            state.card.push(action.payload);
        }
    },
},
})
// console.log(card);

// Action creators are generated for each case reducer function
export const { increment } = addToCard.actions

export default addToCard.reducer