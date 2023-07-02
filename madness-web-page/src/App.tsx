import { useState } from 'react'

import './App.css'
import HomePage from './auth/pages/HomePage'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

function App() {


  return (
    <>
     <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
     </QueryClientProvider>
      
    </>
  )
}

export default App
