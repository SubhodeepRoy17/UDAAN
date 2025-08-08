import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal, Gift, Star, Zap } from 'lucide-react'

export default function Prizes() {
  const mainPrizes = [
    {
      position: "1st Place",
      title: "Winner",
      amount: "₹7,500",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "from-yellow-50 to-orange-50",
      benefits: [
        "Cash Prize of ₹7,500",
        "Industry Networking",
        "Winner Certificate",
      ],
    },
    {
      position: "2nd Place",
      title: "First Runner Up",
      amount: "₹4,500",
      icon: <Award className="w-8 h-8" />,
      color: "from-gray-400 to-gray-600",
      bgColor: "from-gray-50 to-blue-50",
      benefits: [
        "Cash Prize of ₹4,500",
        "Industry Networking",
        "Runner-up Certificate",
      ],
    },
    {
      position: "3rd Place",
      title: "Second Runner Up",
      amount: "₹3,000",
      icon: <Medal className="w-8 h-8" />,
      color: "from-amber-600 to-amber-800",
      bgColor: "from-amber-50 to-yellow-50",
      benefits: [
        "Cash Prize of ₹3,000",
        "Networking Opportunity",
        "Certificate of Excellence",
      ],
    },
  ]

  const recognitionPrizes = [
    {
      title: "Third Runner Up",
      description: "For the most creative and unique business solution",
      amount: "₹2,000 (X 2 Teams)",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    }
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

        {/* Main Prizes - Top 3 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Main Competition Prizes</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Top performing teams will be awarded cash prizes and comprehensive startup support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mainPrizes.map((prize, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 bg-gradient-to-br ${prize.bgColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group h-full`}
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
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
        </div>

        {/* Recognition Prizes */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Special Recognition Awards</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional opportunities to win special prizes and recognition for outstanding achievements
            </p>
   

          <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50"> {/* Full-screen centered container with light bg */}
            <div className="w-full max-w-sm"> {/* Controls card width (adjust max-w-sm as needed) */}
              <Card
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 ${recognitionPrizes[0].bgColor}`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${recognitionPrizes[0].color} rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}
                  >
                    {recognitionPrizes[0].icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{recognitionPrizes[0].title}</h4>
                  <p className="text-gray-600 mb-4">{recognitionPrizes[0].description}</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {recognitionPrizes[0].amount}
                  </div>
                  <Badge className={`bg-gradient-to-r ${recognitionPrizes[0].color} text-white border-0 px-4 py-2`}>
                    Special Recognition
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>

        </div>

        {/* Additional Benefits */}
        
      </div>
    </section>
  )
}
