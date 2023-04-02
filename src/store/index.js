import { configureStore } from "@reduxjs/toolkit";
import slice from '../components/GameTable/slice'
const store = configureStore({
  reducer: { slice },
  devTools: process.env.NODE_ENV !== 'production'
})
export default store;
