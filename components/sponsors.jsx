import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Megaphone, Mail, Sparkles, Target, Trophy } from "lucide-react"

export default function Sponsors() {
  const sponsorTiers = [
    {
      title: "Title Partner",
      badge: "Top visibility",
      icon: <Trophy className="w-6 h-6" />,
      description: "Premier branding across the competition, from the landing page to stage visibility and winner announcements.",
      highlights: ["Logo on hero and sponsor panels", "Exclusive speaking slot", "Premium social media mentions"],
      accent: "from-orange-500 to-amber-500",
    },
    {
      title: "Powered By Partner",
      badge: "High recall",
      icon: <Sparkles className="w-6 h-6" />,
      description: "A strong association with the event experience, ideal for brands looking to engage innovation-focused students.",
      highlights: ["Logo on event materials", "Brand mention in communications", "On-ground presence at the venue"],
      accent: "from-blue-500 to-cyan-500",
    },
    {
      title: "Associate Partner",
      badge: "Community reach",
      icon: <Target className="w-6 h-6" />,
      description: "A practical way to support the competition while reaching a curated audience of founders and student innovators.",
      highlights: ["Placement on sponsor wall", "Digital recognition", "Post-event visibility"],
      accent: "from-violet-500 to-fuchsia-500",
    },
  ]

  const benefits = [
    "Connect with a high-intent audience of student founders and faculty mentors",
    "Showcase your brand around a national-level prototype and business model competition",
    "Support innovation, entrepreneurship, and problem-solving in a campus setting",
  ]

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">Sponsors</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Sponsors & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in empowering the next generation of innovators and entrepreneurs
          </p>
        </div>

        {/* Sponsor Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {sponsorTiers.map((tier, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${tier.accent}`} />
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${tier.accent} bg-opacity-10 text-white`}>
                    {tier.icon}
                  </div>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                    {tier.badge}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{tier.title}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-orange-500 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Handshake className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-gray-900">Why Partner With Us?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8">
                <Mail className="w-4 h-4 mr-2" />
                Become a Sponsor
              </Button>
              <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                <Megaphone className="w-4 h-4 mr-2" />
                View Sponsorship Deck
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}