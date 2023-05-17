'use client';

import HoldViews from './home/hold_views';

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useEffect, useState } from 'react';
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
          <LoaderBody />
        </LoaderIndicator>        
        :
            <HoldViews></HoldViews>
        }
    </main>
  )
}

