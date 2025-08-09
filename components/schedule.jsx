import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, FileText, Presentation, Award } from 'lucide-react'

export default function Schedule() {
  const scheduleData = [
    {
      phase: "Registration Timeline",
      dateRange: "7th August to 15th August",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      events: [
        {
          event: "Submission Opens",
          date: "August 7, 2025",
          time: "9:00 AM",
          location: "Online Portal",
          description: "Team registration portal goes live"
        },
        {
          event: "Submission Deadline",
          date: "August 17, 2025",
          time: "11:59 PM", 
          location: "Online Portal",
          description: "Last date for team registration"
        },
        {
          event: "Submission Shortlisting Notification",
          date: "August 23, 2025",
          time: "To be notified via email", 
          location: "Online Portal",
          description: "Shortlisted teams will be notified via email"
        },
        {
          event: "Final event",
          date: "August 28, 2025",
          time: "10:00 AM onwards", 
          location: "To be notified via email",
          description: "Selected teams will be notified via email"
        }
      ]
    }
  ]

  return (
    <section id="schedule" className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-3 md:mb-4 text-sm md:text-base">
            Event Schedule
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Competition{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with all important dates and events throughout the competition journey
          </p>
        </div>

        {/* Schedule Table */}
        <div className="space-y-6 md:space-y-8">
          {scheduleData.map((phase, phaseIndex) => (
            <Card key={phaseIndex} className="border-0 shadow-lg md:shadow-xl bg-white overflow-hidden">
              <CardHeader className={`${phase.bgColor} border-b p-4 md:p-6`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {phase.phase}
                    </CardTitle>
                    <Badge className={`bg-gradient-to-r ${phase.color} text-white border-0 text-xs sm:text-sm px-3 py-1`}>
                      {phase.dateRange}
                    </Badge>
                  </div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {phaseIndex === 0 && <FileText className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />}
                    {phaseIndex === 1 && <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Mobile view - Stacked cards */}
                <div className="md:hidden">
                  {phase.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex} 
                      className="p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 mb-2">{event.event}</div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4 text-green-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 col-span-2">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="mt-3 text-gray-600 text-sm">
                        {event.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop view - Table */}
                <div className="hidden md:block">
                  {/* Table Header */}
                  <div className="grid grid-cols-5 bg-gray-50 border-b font-semibold text-gray-700 text-sm">
                    <div className="p-4 border-r">Event</div>
                    <div className="p-4 border-r">Date</div>
                    <div className="p-4 border-r">Time</div>
                    <div className="p-4 border-r">Location</div>
                    <div className="p-4">Description</div>
                  </div>
                  
                  {/* Table Rows */}
                  {phase.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex} 
                      className="grid grid-cols-5 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                    >
                      <div className="p-4 border-r font-semibold text-gray-900">
                        {event.event}
                      </div>
                      <div className="p-4 border-r text-gray-700 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        {event.date}
                      </div>
                      <div className="p-4 border-r text-gray-700 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        {event.time}
                      </div>
                      <div className="p-4 border-r text-gray-700 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        {event.location}
                      </div>
                      <div className="p-4 text-gray-600 text-sm">
                        {event.description}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Summary */}
        <div className="mt-12 md:mt-16">
          <Card className="border-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <CardContent className="relative p-6 md:p-12">
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
                  <Award className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium">Grand Finale</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                  Final Event Day - August 28, 2025
                </h3>
                <p className="text-purple-100 text-base md:text-lg max-w-2xl mx-auto">
                  Join us for an exciting day of presentations, networking, and celebration at HITK campus
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Presentation className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 md:mb-2">30 Teams Present</h4>
                  <p className="text-purple-100 text-xs sm:text-sm">
                    Shortlisted teams pitch their ideas to expert jury
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 md:mb-2">Expert Jury Panel</h4>
                  <p className="text-purple-100 text-xs sm:text-sm">
                    Industry leaders evaluate and provide feedback
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 md:mb-2">Awards & Recognition</h4>
                  <p className="text-purple-100 text-xs sm:text-sm">
                    Winners announced with prizes and certificates
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