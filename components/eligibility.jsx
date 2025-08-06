import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, CheckCircle, GraduationCap } from 'lucide-react'

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">Eligibility Criteria</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who Can{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Participate?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple and inclusive eligibility requirements for all aspiring entrepreneurs
          </p>
        </div>

        {/* Main Eligibility Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-12">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold mb-4">Eligibility Requirements</CardTitle>
              <p className="text-blue-100 text-lg">Open to all students pursuing higher education</p>
            </CardHeader>

            <CardContent className="p-12">
              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-green-50 rounded-2xl p-8 border border-green-200">
                  <CheckCircle className="w-16 h-16 text-green-600 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Simple Requirement</h3>
                    <p className="text-xl text-gray-700 font-medium">
                      All undergraduate and postgraduate students are allowed
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Team Size</h4>
                  <p className="text-gray-600 text-sm">A maximum of 3 members per team including team leader plus 1 mentor</p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <GraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Academic Level</h4>
                  <p className="text-gray-600 text-sm">Both UG and PG students from any discipline</p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Institution</h4>
                  <p className="text-gray-600 text-sm">Students from any college or university</p>
                </div>
              </div>

              {/* Note */}
              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Important Note</h4>
                    <p className="text-gray-700 text-sm">
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
