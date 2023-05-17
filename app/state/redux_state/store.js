import { configureStore } from '@reduxjs/toolkit'
import appMainState from './app_slice'

export const store = configureStore({
  reducer: {
    hcState: appMainState
  },
})