'use client';

import AppState from './state/app_state'
import HoldViews from './home/hold_views'

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { useState, useEffect } from 'react';
import { LoaderBody, LoaderIndicator } from './components/home_background_circle/home_background_circle';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoading(false)
     }
    
  }, []);
  return (
    <main >

      {loading == true ?
        
        <LoaderIndicator>
            <LoaderBody/>
        </LoaderIndicator>
        // <div>
        //   LOADING PAGE... { loading.toString()}
        // </div>
        :
        <div>
        <AppState>
          <HoldViews></HoldViews>
        </AppState>
      </div>}
    </main>
  )
}

