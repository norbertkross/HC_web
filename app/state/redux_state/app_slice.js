
'use client';

import { createSlice } from "@reduxjs/toolkit"
import AllFoodsForApp from "./all_foods_list"
import {createAnOrder} from '../method_helpers/app_firebase_helper_methods'


const initialState = {
  selectedFoodIndex: 0,
  displayMobileMoreMenu: false,
  selectedFoodImage: "/ybls.jpeg",
  items: ['/ybls.jpeg', '/food_1.jpeg', '/food_2.jpeg', '/food_3.jpeg', '/food_4.jpeg'
  ],
  allFoods: AllFoodsForApp,
  addingToCart: false,
  showDialog: {statusOK:false,show:false},
  index:0,
}


export const appMainState = createSlice({
  name: "stateMain",
  initialState,
  reducers: {
    // update Selected Food index
    setSelectedFoodIndex: (state, action) => {
      state.selectedFoodIndex = action.payload
    },

    setDisplayMobileMoreMenu: (state, action) => {
      state.displayMobileMoreMenu = action.payload
    },

    setSelectedFoodImage: (state, action) => {
      state.selectedFoodImage = action.payload
    },

    setItemsArray: (state, action) => {
      state.items = action.payload
    },

    setAllFoods: (state, action) => {
      state.allFoods = action.payload
    },
    updateAddingToCartState: (state, action) => {
      // state.addingToCart = action.payload
      console.log("ADDING: ", state.addingToCart)
      createAnOrder(state,action);
    },
    updateShowDialog: (state, action) => {
      state.showDialog = { ...state.showDialog, show: action.payload }
    },
    showErrorFailedDialog: (state, action) => {
      state.showDialog = { ...state.showDialog, show: true, statusOK:false }
    },
    showSuccessDialog: (state, action) => {
      state.showDialog = { ...state.showDialog, show: true, statusOK: true }
    },
    resetCartProcessDialog: (state, action) => {
      state.showDialog = { ...state.showDialog, show: false, statusOK: false }
    },

  }
})

export const { setSelectedFoodIndex, setDisplayMobileMoreMenu, setSelectedFoodImage, setItemsArray, setAllFoods, updateAddingToCartState } = appMainState.actions

export default appMainState.reducer