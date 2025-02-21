import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Zap,
  Code,
  HeadphonesIcon,
  MessageSquare,
  TestTube,
} from 'lucide-react';

const features = [
  {
    icon: <Zap className='w-6 h-6' />,
    title: 'High Delivery Rates',
    description:
      'Maximize your campaign effectiveness with industry-leading delivery rates.',
  },
  {
    icon: <Code className='w-6 h-6' />,
    title: 'API Integration',
    description: 'Integrate seamlessly with our simple, robust API.',
  },
  {
    icon: <HeadphonesIcon className='w-6 h-6' />,
    title: 'Superior Support',
    description: 'Our dedicated team is here to ensure your success 24/7.',
  },
  {
    icon: <MessageSquare className='w-6 h-6' />,
    title: 'Flexible Use Cases',
    description:
      "From marketing SMS to SMS OTP authentication, we've got you covered.",
  },
  {
    icon: <TestTube className='w-6 h-6' />,
    title: 'Free Testing',
    description: 'Try our service risk-free before you commit.',
  },
];

export default function FeaturesSection() {
  return (
    <section id='features' className='container py-24'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          What We Offer
        </h2>
        <p className='mt-4 text-lg text-muted-foreground'>
          Your Reliable Partner for High-Quality Communications.
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map((feature, i) => (
          <Card
            key={i}
            className='border-1 hover:border-[hsla(163,100%,41%,1)] transition-colors duration-200'
          >
            <CardHeader>
              <div className='p-2 w-fit rounded-lg bg-[hsla(163,100%,41%,1)] text-white mb-4'>
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
