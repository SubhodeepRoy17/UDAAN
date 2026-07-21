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
  const benefits = [
    "Connect with a high-intent audience of student founders and faculty mentors",
    "Showcase your brand around a national-level prototype and business model competition",
    "Support innovation, entrepreneurship, and problem-solving in a campus setting",
  ]
    "Showcase your brand around a national-level prototype and business model competition",
    "Support innovation, entrepreneurship, and problem-solving in a campus setting",
  ]

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">Sponsors</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{