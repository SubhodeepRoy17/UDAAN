import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Sprout, GraduationCap, Shield, Brain, Car } from 'lucide-react'

export default function Themes() {
  const themes = [
    {
      id: 1,
      title: "Empowering the Elderly & Differently Abled",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      sdgs: ["SDG 3", "SDG 10", "SDG 11"],
      sdgNames: ["Good Health and Well-Being", "Reduced Inequalities", "Sustainable Cities and Communities"],
      description: "Innovative solutions to improve quality of life, accessibility, and inclusion for elderly and differently-abled individuals."
    },
    {
      id: 2,
      title: "Health Analytics",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      sdgs: ["SDG 3", "SDG 9", "SDG 17"],
      sdgNames: ["Good Health and Well-Being", "Industry, Innovation and Infrastructure", "Partnerships for the Goals"],
      description: "Data-driven healthcare solutions leveraging analytics for better health outcomes and medical decision-making."
    },
    {
      id: 3,
      title: "Agri Tech & Green Innovation",
      icon: <Sprout className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      sdgs: ["SDG 2", "SDG 6", "SDG 7", "SDG 9", "SDG 12", "SDG 13"],
      sdgNames: ["Zero Hunger", "Industry, Innovation and Infrastructure", "Responsible Consumption and Production", "Climate Action", "Waste management and Sustainable Energy"],
      description: "Sustainable agricultural technologies and green innovations for environmental conservation and food security."
    },
    {
      id: 4,
      title: "Child Welfare & Education Access",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      sdgs: ["SDG 3", "SDG 4", "SDG 10"],
      sdgNames: ["Good Health and Well-Being", "Quality Education", "Reduced Inequalities"],
      description: "Solutions focused on child protection, educational accessibility, and ensuring equal opportunities for all children."
    },
    {
      id: 5,
      title: "Gender Equity & Women's Safety",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      sdgs: ["SDG 5", "SDG 10", "SDG 16"],
      sdgNames: ["Gender Equality", "Reduced Inequalities", "Peace, Justice and Strong Institutions"],
      description: "Innovative approaches to promote gender equality, women's empowerment, and ensure safety and security."
    },
    {
      id: 6,
      title: "AI-based Intelligent System",
      icon: <Brain className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      sdgs: ["SDG 4", "SDG 9", "SDG 11"],
      sdgNames: ["Quality Education", "Industry, Innovation and Infrastructure", "Sustainable Cities and Communities"],
      description: "Artificial Intelligence solutions for smart systems, automation, and intelligent decision-making processes."
    },
    {
      id: 7,
      title: "Transport System & Smart Construction",
      icon: <Car className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      sdgs: ["SDG 9", "SDG 11", "SDG 13"],
      sdgNames: ["Industry, Innovation and Infrastructure", "Sustainable Cities and Communities", "Climate Action"],
      description: "Smart transportation solutions and sustainable construction technologies for urban development."
    }
  ]

  return (
    <section id="themes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">Competition Themes</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Innovation Theme
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select from 7 carefully curated themes aligned with UN Sustainable Development Goals to create meaningful impact
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {themes.map((theme) => (
            <Card
              key={theme.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white overflow-hidden h-full flex flex-col"
            >
              <CardHeader className={`${theme.bgColor} text-center pb-6`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${theme.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {theme.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {theme.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 justify-center">
                  {theme.sdgs.map((sdg, index) => (
                    <Badge
                      key={index}
                      className={`bg-gradient-to-r ${theme.color} text-white border-0 text-xs px-2 py-1`}
                    >
                      {sdg}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {theme.description}
                </p>

                {/* SDG Names */}
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Mapped SDG Goals:</h4>
                  <div className="space-y-1">
                    {theme.sdgNames.map((name, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex-shrink-0" />
                        <span className="text-xs text-gray-600">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/*  */}
      </div>
    </section>
  )
}
