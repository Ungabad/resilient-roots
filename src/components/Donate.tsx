import { Button } from "./ui/button"
import { Card } from "./ui/card"
import React from "react"

export default function Donate() {
  const scrollToForm = () => {
    document.getElementById("donate-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      {/* Hero background matching main page */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d64gsuwffb70l.cloudfront.net/6907e8f4379da1835909a334_1762126124707_fda12f63.webp"
            alt="Forest path"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">Support Our Mission</h1>
          <p className="text-white/90 mb-6">Help us provide trauma-informed peer support and community programs in King County.</p>
          <div className="flex gap-4 justify-center">
            <Button onClick={scrollToForm} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold">Donate Now</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto" id="donate-form">
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
    </div>
  )
}