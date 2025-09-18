import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DatePicker from './components/DatePicker'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center fixed inset-0">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-700 to-teal-800 drop-shadow-lg animate-pulse mb-8">
          Hello KBTG
        </h1>
        <div className="mt-8 w-32 h-1 bg-gradient-to-r from-green-600 to-teal-800 mx-auto rounded-full mb-12"></div>
        
        {/* DatePicker Component */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select a Date</h2>
          <DatePicker />
        </div>
      </div>
    </div>
  )
}

export default App
