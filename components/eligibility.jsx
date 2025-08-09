import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, CheckCircle, GraduationCap } from 'lucide-react'

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-3 md:mb-4 text-sm md:text-base">
            Eligibility Criteria
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Who Can{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Participate?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Simple and inclusive eligibility requirements for all aspiring entrepreneurs
          </p>
        </div>

        {/* Main Eligibility Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg md:shadow-2xl bg-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-8 md:py-12">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <GraduationCap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Eligibility Requirements</CardTitle>
              <p className="text-blue-100 text-base md:text-lg">Open to all students pursuing higher education</p>
            </CardHeader>

            <CardContent className="p-6 md:p-8 lg:p-12">
              <div className="text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-green-50 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-green-200">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-green-600 flex-shrink-0" />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Simple Requirement</h3>
                    <p className="text-base md:text-lg text-gray-700 font-medium">
                      All undergraduate and postgraduate students are allowed
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center p-4 md:p-5 lg:p-6 bg-blue-50 rounded-lg md:rounded-xl">
                  <Users className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-600 mx-auto mb-2 md:mb-3 lg:mb-4" />
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Team Size</h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    A maximum of 3 members per team including team leader plus 1 mentor
                  </p>
                </div>

                <div className="text-center p-4 md:p-5 lg:p-6 bg-purple-50 rounded-lg md:rounded-xl">
                  <GraduationCap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-purple-600 mx-auto mb-2 md:mb-3 lg:mb-4" />
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Academic Level</h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Both UG and PG students from any discipline
                  </p>
                </div>

                <div className="text-center p-4 md:p-5 lg:p-6 bg-green-50 rounded-lg md:rounded-xl">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 mx-auto mb-2 md:mb-3 lg:mb-4" />
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Institution</h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Students from any college or university
                  </p>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 md:mt-8 p-4 md:p-5 lg:p-6 bg-yellow-50 rounded-lg md:rounded-xl border border-yellow-200">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                    <span className="text-white text-xs md:text-sm font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Important Note</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      Teams can have members from different colleges and institutions. Mixed teams are welcome and encouraged for diverse perspectives.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}