import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterContextProvider from './context/CounterContextProvider'
import Counter from './components/Counter'

function App() {


  return (
    <CounterContextProvider>
          <h1>This is Counter app</h1>
          <Counter />
    </CounterContextProvider>
  )
}

export default App
