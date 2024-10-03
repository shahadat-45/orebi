import { configureStore } from '@reduxjs/toolkit'
import addToCard from './components/addToCard'

export const store = configureStore({
  reducer: {
    myCard: addToCard,
  },
})