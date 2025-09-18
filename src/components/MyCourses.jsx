import React from 'react';

const MyCourses = () => {
  const courses = [
    {
      icon: '🎨',
      name: 'Web Design',
      lessons: '10 lessons',
      date: 'May 12',
      rate: '4.8',
      level: 'Elementary',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: '</>',
      name: 'Development Basics',
      lessons: '8 lessons',
      date: 'May 14',
      rate: '4.4',
      level: 'Intermediate',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: '🐍',
      name: 'Data with Python',
      lessons: '7 lessons',
      date: 'May 17',
      rate: '4.6',
      level: 'Intermediate',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: '📝',
      name: 'Html Basics',
      lessons: '12 lessons',
      date: 'May 26',
      rate: '4.7',
      level: 'Elementary',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: '⚡',
      name: 'JavaScript',
      lessons: '9 lessons',
      date: 'May 30',
      rate: '4.9',
      level: 'Elementary',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">My Courses</h2>
        <a href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
          View All
        </a>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 text-sm font-medium text-gray-600">
          <div className="col-span-4">Course name</div>
          <div className="col-span-2 text-center">Start</div>
          <div className="col-span-2 text-center">Rate</div>
          <div className="col-span-4 text-center">Level</div>
        </div>
        
        {/* Table Body */}
        {courses.map((course, index) => (
          <div key={index} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors">
            {/* Course Name */}
            <div className="col-span-4 flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg ${course.color} flex items-center justify-center text-lg`}>
                {course.icon}
              </div>
              <div>
                <div className="font-medium text-gray-900">{course.name}</div>
                <div className="text-sm text-gray-500">{course.lessons}</div>
              </div>
            </div>
            
            {/* Start Date */}
            <div className="col-span-2 flex items-center justify-center">
              <span className="text-gray-600">{course.date}</span>
            </div>
            
            {/* Rate */}
            <div className="col-span-2 flex items-center justify-center">
              <span className="font-medium text-gray-900">{course.rate}</span>
            </div>
            
            {/* Level */}
            <div className="col-span-4 flex items-center justify-center">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                course.level === 'Elementary' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {course.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;