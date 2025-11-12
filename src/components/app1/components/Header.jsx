import { Link } from 'react-router-dom';

export function Header({ title }) {
  return (
    <header className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <nav className="flex gap-4">
          <Link
            to="/"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-200 text-sm"
          >
            Home
          </Link>
          <Link
            to="/app2"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-200 text-sm"
          >
            View Messy Code
          </Link>
        </nav>
      </div>
    </header>
  );
}

