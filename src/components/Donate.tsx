import { Button } from "./ui/button"
import { Card } from "./ui/card"

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Support Our Mission</h1>
      <div className="max-w-3xl mx-auto">
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Donate?</h2>
              <p className="text-muted-foreground">
                Your donation helps us continue our mission of fostering sustainable communities
                and empowering local initiatives. Every contribution makes a difference in
                building resilient roots for future generations.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">How Your Donation Helps</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Support community garden initiatives</li>
                <li>Fund educational workshops and training programs</li>
                <li>Develop sustainable infrastructure projects</li>
                <li>Enable community outreach programs</li>
              </ul>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-2xl font-semibold">Make a Donation</h2>
              <p className="text-center text-muted-foreground mb-4">
                Choose an amount to donate or enter a custom amount
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="outline">$10</Button>
                <Button size="lg" variant="outline">$25</Button>
                <Button size="lg" variant="outline">$50</Button>
                <Button size="lg" variant="outline">$100</Button>
              </div>
              <Button className="mt-6" size="lg">
                Donate Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                * Secure payments powered by Stripe
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}