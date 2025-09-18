import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center fixed inset-0">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 drop-shadow-lg animate-pulse">
          Hello KBTG
        </h1>
        <div className="mt-8 w-32 h-1 bg-gradient-to-r from-green-400 to-teal-600 mx-auto rounded-full"></div>
      </div>
    </div>
  )
}

export default App
