'use client';

import { contactFormAction } from '@/lib/actions';
import Script from 'next/script';
import { useActionState, useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

declare const grecaptcha: any;
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export function ContactForm({ className }: { className?: string }) {
  const [captchaToken, setCaptchaToken] = useState('');
  const [state, formAction, pending] = useActionState(contactFormAction, {
    defaultValues: {
      name: '',
      email: '',
      message: '',
      recaptcha_token: '',
    },
    success: false,
    errors: null,
  });

  return (
    <>
      <form action={formAction} className={cn(className)}>
        <div className='space-y-4'>
          <div
            className='group/field grid gap-2'
            data-invalid={!!state.errors?.name}
          >
            <Input
              id='name'
              name='name'
              placeholder='Name'
              // className={inputClasses}
              aria-invalid={!!state.errors?.name}
              aria-errormessage='error-name'
              defaultValue={state.defaultValues.name}
            />
            {state.errors?.name && (
              <p id='error-name' className='text-destructive text-sm'>
                {state.errors.name}
              </p>
            )}
          </div>
          <div
            className='group/field grid gap-2'
            data-invalid={!!state.errors?.email}
          >
            <Input
              id='email'
              name='email'
              placeholder='Email'
              // className={inputClasses}
              aria-invalid={!!state.errors?.email}
              aria-errormessage='error-email'
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <p id='error-email' className='text-destructive text-sm'>
                {state.errors.email}
              </p>
            )}
          </div>
          <div
            className='group/field grid gap-2'
            data-invalid={!!state.errors?.message}
          >
            <Textarea
              id='message'
              name='message'
              placeholder='Type your message here...'
              rows={8}
              className={`resize-none h-40`}
              aria-invalid={!!state.errors?.message}
              aria-errormessage='error-message'
              defaultValue={state.defaultValues.message}
            />
            {state.errors?.message && (
              <p id='error-message' className='text-destructive text-sm'>
                {state.errors.message}
              </p>
            )}
          </div>

          <Input
            type='hidden'
            id='recaptcha_token'
            name='recaptcha_token'
            value={captchaToken}
          />
        </div>
        <div className='flex items-center gap-14 mt-8 md:mt-10'>
          <Button
            type='submit'
            className='w-full bg-[hsla(163,100%,41%,1)] hover:bg-[hsla(163,100%,41%,0.9)] text-white cursor-pointer h-12'
            size='lg'
            disabled={pending}
          >
            {pending ? 'Sending...' : 'Send Message'}
          </Button>
          {state.success ? (
            <p className='text-muted-foreground flex items-center gap-2'>
              Your message has been sent. Thank you.
            </p>
          ) : null}
          {state.errors &&
            (state.errors.recaptcha_token || state.errors.custom) && (
              <p className='text-destructive flex items-center gap-2'>
                {state.errors.custom ||
                  'Something went wrong, please try again.'}
              </p>
            )}
        </div>
      </form>
      <Script
        id='recaptcha-load'
        strategy='lazyOnload'
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        onLoad={() => {
          grecaptcha.ready(function () {
            grecaptcha
              .execute(RECAPTCHA_SITE_KEY, {
                action: 'contact',
              })
              .then(function (token: string) {
                setCaptchaToken(token);
              })
              .catch((error: any) => {
                console.error('ReCAPTCHA Error:', error);
              });
          });
        }}
        onError={(e) => console.error('Script failed to load', e)}
      />
    </>
  );
}
