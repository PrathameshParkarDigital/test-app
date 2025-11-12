import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function Layout({ children, currentPage, headerTitle }) {
  return (
    <div className="min-h-screen bg-gray-800 flex">
      <Sidebar currentPage={currentPage} />
      <div className="flex-1 flex flex-col">
        <Header title={headerTitle} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

