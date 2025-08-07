import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle, AlertCircle, Users, Calendar, Award } from 'lucide-react'

export default function Guidelines() {
  const guidelineCategories = [
    {
      title: "Team Formation",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      points: [
        "Teams must consist of a maximum of 3 members including one team leader, plus one mentor",
        "Team leader will be the primary point of contact",
        "Members can be from different colleges and institutions",
        "Mixed discipline teams are encouraged for diverse perspectives"
      ]
    },
    // {
    //   title: "Registration Process",
    //   icon: <FileText className="w-6 h-6" />,
    //   color: "from-green-500 to-green-600",
    //   bgColor: "bg-green-50",
    //   points: [
    //     "Complete online registration form with all team member details",
    //     "Select one primary SDG theme for your business idea",
    //     "Provide detailed contact information for all members",
    //     "Submit team name and brief idea description",
    //     "Registration deadline: August 17, 2025 at 11:59 PM"
    //   ]
    // },
    // {
    //   title: "Submission Requirements",
    //   icon: <CheckCircle className="w-6 h-6" />,
    //   color: "from-orange-500 to-orange-600",
    //   bgColor: "bg-orange-50",
    //   points: [
    //     "Business plan document (maximum 10 pages, PDF format)",
    //     "Presentation slides (maximum 15 slides, PPT/PDF format)",
    //     "Include problem statement, solution, and market analysis",
    //     "Demonstrate clear SDG alignment and impact measurement",
    //     "Submission deadline: August 25, 2025 at 11:59 PM"
    //   ]
    // },
    // {
    //   title: "Competition Rules",
    //   icon: <AlertCircle className="w-6 h-6" />,
    //   color: "from-purple-500 to-purple-600",
    //   bgColor: "bg-purple-50",
    //   points: [
    //     "Ideas must be original and not previously implemented",
    //     "Plagiarism will result in immediate disqualification",
    //     "Teams must attend final presentation if shortlisted",
    //     "Decision of the jury panel will be final and binding",
    //     "Participants must follow code of conduct throughout"
    //   ]
    // },
    // {
    //   title: "Evaluation Criteria",
    //   icon: <Award className="w-6 h-6" />,
    //   color: "from-red-500 to-red-600",
    //   bgColor: "bg-red-50",
    //   points: [
    //     "Innovation and creativity (25% weightage)",
    //     "Market potential and scalability (25% weightage)",
    //     "SDG impact and social relevance (25% weightage)",
    //     "Technical and financial feasibility (25% weightage)",
    //     "Quality of presentation and team coordination"
    //   ]
    // },
    {
      title: "Important Dates",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      points: [
        "Registration opens: August 7, 2025",
        "Registration closes: August 17, 2025",
        "Final event: August 28, 2025",
        "Venue: Heritage Institute of Technology, Kolkata",
        "For any queries, contact: rituparna.sinha@heritageit.edu /+91-91230-74188"
      ]
    }
  ]

  return (
    <section id="guidelines" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">Registration Guidelines</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Competition{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Guidelines
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to participate successfully in UDAAN competition
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {guidelineCategories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <CardHeader className={`${category.bgColor} border-b`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-3">
                  {category.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-2" />
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notice */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-r from-red-600 to-orange-600 text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Important Notice</h3>
                  <p className="text-red-100 leading-relaxed">
                    Please read all guidelines carefully before registration. Non-compliance with any guideline may result in disqualification. 
                    For any clarifications, contact the organizing committee at rituparna.sinha@heritageit.eduin or call +91 91230-74188.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
