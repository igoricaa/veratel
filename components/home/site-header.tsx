import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image src='/Layer_1.svg' alt='Veratel Logo' width={32} height={32} />
          <span className='text-xl font-bold'>Veratel</span>
        </Link>
        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='#features'
            className='text-sm font-medium hover:text-primary'
          >
            Features
          </Link>
          <Link
            href='#pricing'
            className='text-sm font-medium hover:text-primary'
          >
            Pricing
          </Link>
          <Link
            href='#contact'
            className='text-sm font-medium hover:text-primary'
          >
            Contact
          </Link>
        </nav>
        <div className='flex items-center gap-4'>
          <Link href='/login'>
            {/* <Button variant="ghost">Log In</Button> */}
          </Link>
          <Link href='#trial'>
            <Button>Start my free trial</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
