import React from 'react';

const CourseCards = () => {
  const courses = [
    {
      title: 'Geography',
      lessons: '12 lessons',
      color: 'from-orange-400 to-orange-500',
      icon: '🗺️',
      students: ['👤', '👤', '👤']
    },
    {
      title: 'JavaScript Course',
      lessons: '15 lessons',
      color: 'from-purple-400 to-purple-500',
      icon: '</>', 
      students: ['👤', '👤', '👤']
    },
    {
      title: 'Photography Course',
      lessons: '8 lessons',
      color: 'from-blue-400 to-blue-500',
      icon: '📸',
      students: ['👤', '👤', '👤']
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">New Courses</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            {/* Course Header */}
            <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative`}>
              <div className="flex items-center justify-between">
                <div className="text-3xl">{course.icon}</div>
                <div className="text-right">
                  <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                  <p className="text-white/80 text-sm">{course.lessons}</p>
                </div>
              </div>
            </div>
            
            {/* Course Footer */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex -space-x-2">
                {course.students.map((student, idx) => (
                  <div key={idx} className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-sm">
                    {student}
                  </div>
                ))}
              </div>
              <div className={`w-8 h-8 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;