import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle, Link } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const benefits: Benefit[] = [
  {
    title: 'Exceptional Quality',
    description:
      'Our carefully managed routes ensure that your messages are delivered with precision and reliability.',
    icon: <CheckCircle className='w-6 h-6 text-primary' />,
  },
  {
    title: 'Flexibility and Expertise',
    description:
      'Setting up compliant, high-performing SMS routing can be complex, but our diligent team works quickly to get you up and running.',
    icon: <CheckCircle className='w-6 h-6 text-primary' />,
  },
  {
    title: 'Value for Your Investment',
    description:
      'Our customers understand the importance of paying for quality, and we deliver exceptional results that justify your trust.',
    icon: <CheckCircle className='w-6 h-6 text-primary' />,
  },
];

export default function IndustrySection() {
  return (
    <section className='relative py-14 md:py-24'>
      {/* <div className='absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10' /> */}
      <div className='container md:grid grid-cols-2 gap-10'>
        <div className=''>
          <div className='mx-auto md-8 md:mb-12'>
            <h2 className='font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl'>
              Tailored for iGaming
              <br />
              and Online Casino Operators
            </h2>
            <p className='mt-4 text-lg text-muted-foreground'>
              We understand the unique challenges of your industry.
            </p>
          </div>
          <div className='mt-8'>
            <Card className='border-1'>
              <CardHeader>
                <CardTitle className='text-lg leading-relaxed text-muted-foreground'>
                  The iGaming and online casino industry demands precision and
                  reliability when it comes to marketing communications. We know
                  that standard direct SMS routes are often inaccessible for
                  your campaigns.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type='single' collapsible className='mt-4' defaultValue={benefits[0].title}>
                  {benefits.map((benefit) => (
                    <AccordionItem key={benefit.title} value={benefit.title}>
                      <AccordionTrigger className='text-xl md:text-3xl whitespace-nowrap flex gap-2 items-center'>
                        <div className='flex gap-2 md:gap-3 items-center'>
                          {benefit.icon}
                          {benefit.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>{benefit.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='relative'>
          <Image
            src='/placeholder.svg'
            alt='Veratel iGaming and online casino industry'
            fill
            className='object-cover'
          />
        </div>
      </div>
    </section>
  );
}
