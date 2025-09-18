import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import CourseCards from './components/CourseCards'
import MyCourses from './components/MyCourses'
import RightSidebar from './components/RightSidebar'

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Main Dashboard Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Content Area */}
          <div className="flex-1 p-6 overflow-y-auto">
            <CourseCards />
            <MyCourses />
          </div>
          
          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default App
