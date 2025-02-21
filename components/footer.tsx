import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './ui/logo/logo';

export default function Footer() {
  return (
    <footer className='border-t'>
      <div className='container py-16'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='col-span-2 md:col-span-1'>
            <Link href='/' className='flex items-center gap-2 mb-4'>
              <Logo className='h-auto w-24 sm:w-36 lg:w-44' />
            </Link>
            <p className='text-sm text-muted-foreground'>
              CPaaS solutions for iGaming and online casinos
            </p>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#about'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#features'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='#pricing'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/privacy'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Connect</h3>
            <div className='flex gap-4'>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Facebook className='w-5 h-5' />
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Twitter className='w-5 h-5' />
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Linkedin className='w-5 h-5' />
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Instagram className='w-5 h-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
