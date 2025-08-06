import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, FileText, Presentation, Award } from 'lucide-react'

export default function Schedule() {
  const scheduleData = [
    {
      phase: "Registration Timeline",
      dateRange: "7th August to 17th August",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      events: [
        {
          event: "Registration Opens",
          date: "August 7, 2025",
          time: "9:00 AM",
          location: "Online Portal",
          description: "Team registration portal goes live"
        },
        {
          event: "Registration Deadline",
          date: "August 17, 2025",
          time: "11:59 PM", 
          location: "Online Portal",
          description: "Last date for team registration"
        }
      ]
    },
    {
      phase: "Evaluation Phase", 
      dateRange: "26th August to 30th August",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      events: [
        {
          event: "Initial Screening",
          date: "August 26-28, 2025",
          time: "All Day",
          location: "Jury Panel Review",
          description: "Expert jury reviews all submitted business plans"
        },
        {
          event: "Shortlist Announcement",
          date: "August 29, 2025",
          time: "6:00 PM",
          location: "Official Website",
          description: "Top 30 teams selected for final presentation"
        },
        {
          event: "Presentation Preparation",
          date: "August 30, 2025",
          time: "All Day",
          location: "Team Locations",
          description: "Shortlisted teams prepare final presentations"
        }
      ]
    },
    {
      phase: "Final Event",
      dateRange: "28th August, 2025",
      color: "from-purple-500 to-purple-600", 
      bgColor: "bg-purple-50",
      events: [
        {
          event: "Registration & Setup",
          date: "August 28, 2025",
          time: "9:00 AM",
          location: "Main Auditorium, HITK",
          description: "Team check-in and presentation setup"
        },
        {
          event: "Opening Ceremony",
          date: "August 28, 2025",
          time: "10:00 AM", 
          location: "Main Auditorium, HITK",
          description: "Welcome address and competition overview"
        },
        {
          event: "Team Presentations",
          date: "August 28, 2025",
          time: "10:30 AM - 4:00 PM",
          location: "Multiple Venues, HITK",
          description: "10-minute presentations + 5-minute Q&A per team"
        },
        {
          event: "Jury Deliberation",
          date: "August 28, 2025", 
          time: "4:00 PM - 5:00 PM",
          location: "Private Room",
          description: "Judges evaluate and select winners"
        },
        {
          event: "Award Ceremony",
          date: "August 28, 2025",
          time: "5:30 PM - 6:30 PM",
          location: "Main Auditorium, HITK", 
          description: "Prize distribution and closing ceremony"
        }
      ]
    }
  ]

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">Event Schedule</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Competition{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with all important dates and events throughout the competition journey
          </p>
        </div>

        {/* Schedule Table */}
        <div className="space-y-8">
          {scheduleData.map((phase, phaseIndex) => (
            <Card key={phaseIndex} className="border-0 shadow-xl bg-white overflow-hidden">
              <CardHeader className={`${phase.bgColor} border-b`}>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {phase.phase}
                    </CardTitle>
                    <Badge className={`bg-gradient-to-r ${phase.color} text-white border-0 text-sm px-3 py-1`}>
                      {phase.dateRange}
                    </Badge>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {phaseIndex === 0 && <FileText className="w-8 h-8" />}
                    {phaseIndex === 1 && <Users className="w-8 h-8" />}
                    {phaseIndex === 2 && <FileText className="w-8 h-8" />}
                    {phaseIndex === 3 && <Presentation className="w-8 h-8" />}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Table Header */}
                <div className="grid grid-cols-1 md:grid-cols-5 bg-gray-50 border-b font-semibold text-gray-700 text-sm">
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
                    className="grid grid-cols-1 md:grid-cols-5 hover:bg-gray-50 transition-colors border-b last:border-b-0"
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Summary */}
        <div className="mt-16">
          <Card className="border-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <CardContent className="relative p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-medium">Grand Finale</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Final Event Day - August 28, 2025</h3>
                <p className="text-purple-100 text-lg max-w-2xl mx-auto">
                  Join us for an exciting day of presentations, networking, and celebration at HITK campus
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Presentation className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">30 Teams Present</h4>
                  <p className="text-purple-100 text-sm">Shortlisted teams pitch their ideas to expert jury</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Expert Jury Panel</h4>
                  <p className="text-purple-100 text-sm">Industry leaders evaluate and provide feedback</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Awards & Recognition</h4>
                  <p className="text-purple-100 text-sm">Winners announced with prizes and certificates</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
