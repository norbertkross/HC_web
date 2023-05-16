'use client'

import { useContext } from 'react';
import AppState, { AppStateMain } from '../state/app_state';

import UserCart from './cart-holder'


export default function UserCartMain(params) {
  return <div>
    <AppState>
      <UserCart>
     </UserCart>
      </AppState>
  </div>
}