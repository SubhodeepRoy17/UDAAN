'"use client"'
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Rocket } from "lucide-react"

export default function Hero() {
  const scrollToSection = (href) => {
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = 200 // Adjust this value based on your header height
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Only */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/background-bg.jpg" 
          alt="Business background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content Container with Semi-Transparent Backdrop */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10">
            {/* Event Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
                <Rocket className="w-5 h-5 text-orange-300" />
                <span className="text-sm font-medium text-white">IIC-HITK Presents</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-center">
              <span className="bg-gradient-to-r from-orange-300 to-blue-300 bg-clip-text text-transparent">UDAAN</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white text-center">
              Elevate Your Business Vision
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              The premier platform for aspiring entrepreneurs to launch, grow, and scale their business ideas with expert
              mentorship and investor connections.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button
                onClick={() => scrollToSection("#registration")}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => scrollToSection("#registration")}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group bg-transparent"
              >
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Decorations (now outside content box) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-bounce" />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-bounce" />
      </div>
    </section>
  )
}