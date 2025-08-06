import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Rocket, BarChart2, Lightbulb, Users } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/background-bg.jpg" 
          alt="Business background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-orange-600/60" />
      </div>

      {/* Animated Business Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-bounce" />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-bounce" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
            <Rocket className="w-5 h-5 text-orange-300" />
            <span className="text-sm font-medium">IIC-HITK Presents</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-300 to-blue-300 bg-clip-text text-transparent">UDAAN</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-blue-100">
            Elevate Your Business Vision
          </h2>

          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            The premier platform for aspiring entrepreneurs to launch, grow, and scale their business ideas with expert
            mentorship and investor connections.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group bg-transparent"
            >
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Brochure
            </Button>
          </div>

          {/* Business-Focused Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <BarChart2 className="w-10 h-10 mx-auto text-orange-300 mb-2" />
              <div className="text-3xl font-bold text-orange-300 mb-2">₹30K+</div>
              <div className="text-blue-100">Funding Pool</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <Lightbulb className="w-10 h-10 mx-auto text-orange-300 mb-2" />
              <div className="text-3xl font-bold text-orange-300 mb-2">50+</div>
              <div className="text-blue-100">Mentors & Investors</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <Users className="w-10 h-10 mx-auto text-orange-300 mb-2" />
              <div className="text-3xl font-bold text-orange-300 mb-2">500+</div>
              <div className="text-blue-100">Entrepreneurs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}