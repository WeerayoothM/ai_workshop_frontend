import React from 'react';
import DatePicker from './DatePicker';

const RightSidebar = () => {
  const homeworkTasks = [
    {
      title: 'Styling with CSS',
      progress: 0,
      color: 'bg-purple-500'
    },
    {
      title: 'Basics of programming',
      progress: 60,
      color: 'bg-blue-500'
    },
    {
      title: 'Learn to Program in Java',
      progress: 25,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="w-80 bg-gray-50 h-screen p-6">
      {/* Profile Section */}
      <div className="bg-white rounded-2xl p-6 mb-6 text-center">
        <div className="w-16 h-16 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">👨‍🦱</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">Esther Howard</h3>
        <p className="text-sm text-gray-500 mb-4">Elementary</p>
        
        {/* Calendar Section */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">May 2022</h4>
          
          {/* Mini Calendar */}
          <div className="grid grid-cols-7 gap-1 text-xs mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-gray-500 font-medium py-2">
                {day.slice(0, 1)}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-sm">
            {/* Previous month days */}
            {[28, 29, 30].map(day => (
              <div key={day} className="text-center py-2 text-gray-300">{day}</div>
            ))}
            
            {/* Current month days */}
            {Array.from({length: 31}, (_, i) => i + 1).map(day => (
              <div 
                key={day} 
                className={`text-center py-2 cursor-pointer hover:bg-purple-100 rounded ${
                  day === 8 ? 'bg-purple-600 text-white rounded-full' : 
                  day === 15 ? 'bg-gray-200 rounded-full' : 'text-gray-700'
                }`}
              >
                {day}
              </div>
            ))}
            
            {/* Next month days */}
            {[1, 2, 3].map(day => (
              <div key={day} className="text-center py-2 text-gray-300">{day}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Homework Progress Section */}
      <div className="bg-white rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Homework progress</h3>
        
        <div className="space-y-4">
          {homeworkTasks.map((task, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${task.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{task.title}</span>
                </div>
                <span className="text-sm text-gray-500">{task.progress}%</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${task.color}`}
                    style={{width: `${task.progress}%`}}
                  ></div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;