import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './contact-form';
import { Mail } from 'lucide-react';
import TelegramIcon from '../ui/icons/telegram-icon';
import SkypeIcon from '../ui/icons/skype-icon';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section id='contact' className='container py-14 md:py-24'>
      <div className='space-y-6 md:space-y-0 md:grid grid-cols-3 gap-10'>
        <Card className='col-span-2 border-1'>
          <CardHeader className='text-center'>
            <CardTitle className='text-3xl font-bold'>
              Start Your Free Trial Today
            </CardTitle>
            <p className='text-lg text-muted-foreground mt-4'>
              Experience the Veratel difference. No risks, no commitments—just
              results.
            </p>
          </CardHeader>
          <ContactForm className='px-side py-6 md:p-6' />
        </Card>
        <div className='md:max-w-sm h-fit bg-primary rounded-lg px-side py-6 md:p-6 text-white'>
          <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
          <div className='space-y-4'>
            <Link
              href='mailto:info@veratel.io'
              target='_blank'
              className='flex gap-3 w-fit'
            >
              <Mail className='size-7' />
              <div>
                <p className='font-bold'>Email</p>
                <p>info@veratel.io</p>
              </div>
            </Link>
            <Link
              href='https://t.me/veratel_io'
              target='_blank'
              className='flex gap-3 w-fit'
            >
              <TelegramIcon className='size-8 fill-white' />
              <div>
                <p className='font-bold'>Telegram</p>
                <p>@veratel_io</p>
              </div>
            </Link>
            <Link
              href='skype:veratel_io'
              target='_blank'
              className='flex gap-3 w-fit'
            >
              <SkypeIcon className='size-8 fill-white' />
              <div>
                <p className='font-bold'>Skype</p>
                <p>veratel_io</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
