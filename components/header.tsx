import Link from 'next/link';
import Logo from './ui/logo/logo';
import MobileMenu from './navigation/mobile-menu';
import { Route } from '@/types';
import { routes } from '@/data';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

const Header = () => {
  return (
    <header className='container sticky top-0 py-4 flex justify-between items-center bg-white/30 backdrop-blur-sm z-50'>
      <div className='relative z-50'>
        <Link href='/'>
          <Logo className='h-auto w-30 sm:w-36 lg:w-44' />
        </Link>
      </div>

      <ul className='hidden lg:flex items-center gap-4 sm:gap-6 text-foreground font-medium text-lg sm:text-lg'>
        {routes.map((route: Route) => (
          <li key={route.name}>
            <Link
              href={route.path}
              className='uppercase underline-link hover:text-primary transition-colors duration-300'
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-4 sm:gap-6'>
        <Link href='/contact' className={cn(buttonVariants({ size: 'lg' }))}>
          Contact Us
        </Link>

        <MobileMenu className='lg:hidden' />
      </div>
    </header>
  );
};

export default Header;
