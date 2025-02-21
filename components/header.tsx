import Link from 'next/link';
import Logo from './ui/logo/logo';
import MobileMenu from './navigation/mobile-menu';
import { Route } from '@/types';
import { routes } from '@/data';

const Header = () => {
  return (
    <header className='container sticky top-0 h-24 sm:h-32 lg:h-40 flex justify-between items-center'>
      <div className='relative z-50'>
        <Link href='/'>
          <Logo className='h-auto w-24 sm:w-36 lg:w-44' />
        </Link>
      </div>

      <ul className='hidden lg:flex items-center gap-4 sm:gap-6 text-foreground font-medium text-lg sm:text-2xl'>
        {routes.map((route: Route) => (
          <li key={route.name}>
            <Link href={route.path} className='uppercase underline-link'>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>

      <MobileMenu className='lg:hidden' />
    </header>
  );
};

export default Header;
