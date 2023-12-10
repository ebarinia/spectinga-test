import { useState } from 'react'
import Header from './components/header'
import useTractors from './hooks/useTractors'

function App() {
  const { isLoading, tractors, users } = useTractors();

  return isLoading ?(
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <Header users={users}/>
    </>
  )
}

export default App