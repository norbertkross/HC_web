import './globals.css'
import { Inter } from 'next/font/google'
import AppProviders from './state/redux_state/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HalleysComete',
  description: 'A mordern restaurant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <AppProviders>
          {children}
        </AppProviders>
      
      </body>
    </html>
  )
}
