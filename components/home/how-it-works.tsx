import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, Rocket, Zap } from "lucide-react"

const steps = [
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Sign Up",
    description: "Create your account in minutes.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Test for Free",
    description: "Evaluate our service with no commitment.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Seamless Integration",
    description: "Connect via API and start sending immediately.",
  },
]

export default function HowItWorks() {
  return (
    <section className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quick and Easy Setup</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <Card key={i} className="relative border-1 hover:border-[hsla(163,100%,41%,1)] transition-colors">
            <CardContent className="pt-6">
              <div className="absolute -top-4 left-6 p-2 rounded-lg bg-[hsla(163,100%,41%,1)] text-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

