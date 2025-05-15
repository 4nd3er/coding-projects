import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar';

export const Layout: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/LogIn' || location.pathname === '/SingUp';
  return (
    <>
      <Navbar />

      <aside
        className={`w-full min-h-[88vh] flex flex-col items-center pt-2
          ${isLoginPage ? 'justify-start' : 'justify-start'}
        `}
      >
        <Outlet />
      </aside>
    </>
  )
}
