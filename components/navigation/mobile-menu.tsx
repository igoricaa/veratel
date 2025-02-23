'use client';

import Link from 'next/link';
import { useState } from 'react';
import Burger from './burger';
import { routes } from '@/data';
import { Route } from '@/types';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

const MobileMenu = ({ className }: { className: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    toggleScroll();
  };

  const toggleScroll = () => {
    document.body.toggleAttribute('data-lenis-prevent', !menuOpen);
  };

  return (
    <div className={`${className}`}>
      <div className='flex items-center gap-6 sm:gap-8 z-50 relative '>
        <Burger handleClick={toggleMenu} isOpen={menuOpen} />
      </div>

      <div
        className={`fixed top-0 left-0 w-screen z-40 px-side pt-24 sm:pt-32 pb-6 sm:pb-8 bg-white flex flex-col justify-between gap-8 transition-all duration-300 shadow-lg ${
          menuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-[calc(100%-4rem)]'
        }`}
      >
        <ul className='flex flex-col gap-4 sm:gap-6'>
          {routes.map((route: Route, index: number) => (
            <li
              key={route.name}
              className={cn(
                `${
                  menuOpen ? 'opacity-100 delay-300' : 'opacity-0'
                } transition-opacity duration-300 `
              )}
            >
              <Link
                href={route.path}
                className='text-2xl sm:text-3xl'
                onClick={toggleMenu}
              >
                {route.name}
              </Link>
            </li>
          ))}
          <Link
            href='/#contact'
            className={cn(
              buttonVariants({ size: 'lg' }),
              'mt-4 sm:w-fit',
              `${
                menuOpen ? 'opacity-100 delay-300' : 'opacity-0'
              } transition-opacity duration-300 `
            )}
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
