import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">About UDAAN</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            for Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            UDAAN is more than just a competition—it's a launchpad for transformative ideas that can create meaningful
            change in our world while building sustainable businesses.
          </p>
        </div>
      </div>
    </section>
  )
}
