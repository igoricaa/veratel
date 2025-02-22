'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('py-2 md:py-3 border-b last:border-b-0 last:pb-0 first:pt-0', className)}
      {...props}
    />
  );
}

const TriggerIcon = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'icon relative w-8 h-8 transition-transform duration-300 ease-out',
        className
      )}
    >
      <div className='absolute w-4 h-[1px] bg-foreground top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute w-4 h-[1px] bg-foreground top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90'></div>
    </div>
  );
};

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-2 text-left text-sm font-medium transition-all hover:opacity-100 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 opacity-50 [&[data-state=open]]:opacity-100 [&[data-state=open]>.icon]:rotate-45 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
        <TriggerIcon />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm'
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
