import { useState } from 'react'
import Header from './components/header'
import useTractors from './hooks/useTractors'

function App() {
  const { isLoading, tractors } = useTractors();

  console.log(tractors);
  return isLoading ?(
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <Header/>
    </>
  )
}

export default App
