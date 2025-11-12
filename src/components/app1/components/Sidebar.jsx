import { Link } from 'react-router-dom';

export function Sidebar({ currentPage }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/app1' },
    { id: 'profile', label: 'Profile', icon: '👤', path: '/app1' },
    { id: 'settings', label: 'Settings', icon: '⚙️', path: '/app1' },
    { id: 'messages', label: 'Messages', icon: '💬', path: '/app1' },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-700 min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-1">Menu</h2>
        <p className="text-gray-400 text-sm">Navigation</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200 ${
              currentPage === item.id
                ? 'bg-indigo-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-8 pt-8 border-t border-gray-700">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition duration-200"
        >
          <span className="text-lg">🏠</span>
          <span className="font-medium">Home</span>
        </Link>
      </div>
    </aside>
  );
}

