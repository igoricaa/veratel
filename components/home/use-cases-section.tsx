import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Megaphone, Shield, Bell } from 'lucide-react';

const useCases = [
  {
    icon: <Megaphone className='w-6 h-6' />,
    title: 'Marketing Campaigns',
    description:
      'Boost engagement and conversions with targeted SMS marketing campaigns.',
  },
  {
    icon: <Shield className='w-6 h-6' />,
    title: 'SMS Authentication',
    description:
      'Enhance security with robust SMS-based two-factor authentication.',
  },
  {
    icon: <Bell className='w-6 h-6' />,
    title: 'Real-Time Notifications',
    description: 'Keep users informed with instant updates and alerts via SMS.',
  },
];

export default function UseCasesSection() {
  return (
    <section className='bg-primary/0'>
      <div className='container py-14 md:py-24'>
        <div className='text-center mb-10 md:mb-16'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Tailored Solutions for Your Needs
          </h2>
          <p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'>
            Whether you're running a high-stakes marketing campaign or securing
            user accounts with SMS OTP, Veratel adapts to meet your
            communication goals.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {useCases.map((useCase, i) => (
            <Card
              key={i}
              className='border-1 hover:border-[hsla(163,100%,41%,1)] transition-colors'
            >
              <CardHeader className='px-side sm:px-6'>
                <div className='p-2 w-fit rounded-lg bg-[hsla(163,100%,41%,1)] text-white mb-4'>
                  {useCase.icon}
                </div>
                <CardTitle>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className='px-side sm:px-6'>
                <CardDescription>{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
