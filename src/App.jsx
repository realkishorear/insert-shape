import React from 'react'
import Toolbar from './Components/Toolbar'
import Canvas from './Components/Canvas'

const App = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      <header className="h-[10%] min-h-[80px] shadow-sm">
        <Toolbar />
      </header>
      <main className="flex-1 overflow-auto p-6 flex justify-center items-center">
        <Canvas />
      </main>
    </div>
  )
}

export default App
