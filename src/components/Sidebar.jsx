import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Courses', icon: '📚', active: false },
    { name: 'Chats', icon: '💬', active: false },
    { name: 'Grades', icon: '📋', active: false },
    { name: 'Schedule', icon: '📅', active: false },
    { name: 'Settings', icon: '⚙️', active: false },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">Academy</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors ${
              item.active ? 'bg-purple-100 text-purple-700 border-r-2 border-purple-600' : ''
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Premium Subscription Card */}
      <div className="mx-6 mt-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl p-4 text-white">
        <div className="flex items-center mb-3">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">👨‍💻</span>
          </div>
        </div>
        <h3 className="font-semibold mb-1">Premium subscription</h3>
        <p className="text-sm text-purple-100 mb-3">
          Buy Premium and get access to new courses
        </p>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
          More detailed
        </button>
      </div>
    </div>
  );
};

export default Sidebar;