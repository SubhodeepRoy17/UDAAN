import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal, Gift, Star, Zap } from "lucide-react"

export default function Prizes() {
  const prizes = [
    {
      position: "1st Place",
      title: "Winner",
      amount: "₹12,000",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "from-yellow-50 to-orange-50",
      benefits: [
        "Cash Prize of ₹12,000",
        "Mentor Support",
        "Networking Opportunity",
        "Winner Certificate",
      ],
    },
    {
      position: "2nd Place",
      title: "First Runner Up",
      amount: "₹9,000",
      icon: <Award className="w-8 h-8" />,
      color: "from-gray-400 to-gray-600",
      bgColor: "from-gray-50 to-blue-50",
      benefits: [
        "Cash Prize of ₹9,000",
        "Mentor Support",
        "Networking Opportunity",
        "Runner-up Certificate"
      ],
    },
    {
      position: "3rd Place",
      title: "Second Runner Up",
      amount: "₹6,000",
      icon: <Medal className="w-8 h-8" />,
      color: "from-amber-600 to-amber-800",
      bgColor: "from-amber-50 to-yellow-50",
      benefits: [
        "Cash Prize of ₹6,000",
        "Mentor Support",
        "Networking Opportunity",
        "Certificate",
      ],
    },
    {
      position: "4th Place",
      title: "Third Runner Up",
      amount: "₹3,000",
      icon: <Gift className="w-8 h-8" />,
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-50 to-purple-50",
      benefits: [
        "Cash Prize of ₹3,000",
        "Mentor Support",
        "Networking Opportunity",
        "Certificate",
      ],
    }
  ]

  const specialPrizes = [
    {
      title: "Best SDG Impact",
      description: "For the idea with highest potential social impact",
      prize: "₹5,000 + Special Recognition",
      icon: <Star className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Most Innovative Solution",
      description: "For the most creative and unique business model",
      prize: "₹5,000 + Innovation Award",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "People's Choice Award",
      description: "Voted by audience during final presentation",
      prize: "₹3,000 + Popular Vote Trophy",
      icon: <Gift className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
    },
  ]

  const additionalBenefits = [
    "Access to IIC-HITK Incubation Center",
    "Mentorship from Industry Experts",
    "Networking with Investors and VCs",
    "Startup Resource Kit",
    "Certificate of Participation for All",
    "LinkedIn Recommendations",
    "Media Coverage and PR Support",
    "Access to Exclusive Startup Events",
  ]

  return (
    <section id="prizes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 mb-4">Prizes & Recognition</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Win Big &{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Get Recognized
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compete for exciting prizes, valuable mentorship, and opportunities to turn your ideas into reality
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-0 bg-gradient-to-br ${prize.bgColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group`}
            >
              {/* Prize Rank Badge */}
              <div className="absolute top-4 right-4">
                <Badge className={`bg-gradient-to-r ${prize.color} text-white border-0 px-3 py-1`}>
                  {prize.position}
                </Badge>
              </div>

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${prize.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {prize.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{prize.title}</CardTitle>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {prize.amount}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {prize.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Prizes
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Special Recognition Awards</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional opportunities to win special prizes and recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialPrizes.map((special, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${special.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {special.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{special.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{special.description}</p>
                  <div className="text-blue-600 font-semibold text-sm">{special.prize}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Additional Benefits
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Beyond Prizes: Your Startup Journey Begins Here</h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Win or not, every participant gets valuable benefits to kickstart their entrepreneurial journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-sm font-medium leading-tight">{benefit}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Total Prize Pool */}
        <div className="mt-16 text-center">
          <Card className="inline-block border-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 shadow-2xl">
            <div className="flex items-center justify-center gap-4">
              <Trophy className="w-12 h-12" />
              <div>
                <div className="text-sm font-medium opacity-90">Total Prize Pool</div>
                <div className="text-4xl font-bold">₹35,000+</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}