'use client';

import { Provider } from 'react-redux';
import { store } from './store';

export function AppProviders({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}