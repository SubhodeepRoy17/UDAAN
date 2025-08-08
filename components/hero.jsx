'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Rocket } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Hero() {
  const scrollToSection = (href) => {
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = 200
      const targetPosition = targetElement.offsetTop - headerHeight
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
      setActiveSection(targetId)
    }
    setIsMobileMenuOpen(false)
    setIsAboutOpen(false)
    setIsResourcesOpen(false)
  }

  // Animation for the sliding announcements
  useEffect(() => {
    const announcements = document.querySelectorAll('.announcement-item')
    if (announcements.length === 0) return

    const container = document.querySelector('.announcements-container')
    const containerWidth = container.offsetWidth
    const itemWidth = announcements[0].offsetWidth
    const totalWidth = itemWidth * announcements.length
    let position = containerWidth

    const animate = () => {
      position -= 1
      if (position < -totalWidth) {
        position = containerWidth
      }
      container.style.transform = `translateX(${position}px)`
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Announcement Bar */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden z-20">
        <div className="announcements-container flex items-center h-full whitespace-nowrap">
          {[
            "IIC-HITK Presents UDAAN 2025 : From Grounded Ideas to Sky High Impact",
            "30 teams will be shortlisted for the finals",
            <span className="relative inline-flex items-center">
              <span className="mr-2 px-2 py-0.5 text-xs font-bold rounded-md bg-white/20 border border-white/30 relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 opacity-75 animate-slideHighlight" style={{
                  animation: 'slideHighlight 2s linear infinite',
                  width: '150%',
                  left: '-50%'
                }}></span>
                <span className="relative z-10">NEW</span>
              </span>
              Registration deadline is 17th August
            </span>
          ].flatMap((text, index, array) => [
            <div 
              key={index}
              className="announcement-item mx-8 text-white font-medium text-lg flex-shrink-0"
            >
              {text}
            </div>,
            <div key={`sep-${index}`} className="text-white/50 text-lg flex-shrink-0 mx-4">|</div>
          ])}
          {/* Duplicate for seamless looping */}
          {[
            "IIC-HITK Presents UDAAN 2025 : From Grounded Ideas to Sky High Impact",
            "30 teams will be shortlisted for the finals",
            <span className="relative inline-flex items-center">
              <span className="mr-2 px-2 py-0.5 text-xs font-bold rounded-md bg-white/20 border border-white/30 relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 opacity-75 animate-slideHighlight" style={{
                  animation: 'slideHighlight 2s linear infinite',
                  width: '150%',
                  left: '-50%'
                }}></span>
                <span className="relative z-10">NEW</span>
              </span>
              Registration deadline is 17th August
            </span>
          ].flatMap((text, index, array) => [
            <div 
              key={`dup-${index}`}
              className="announcement-item mx-8 text-white font-medium text-lg flex-shrink-0"
            >
              {text}
            </div>,
            <div key={`dup-sep-${index}`} className="text-white/50 text-lg flex-shrink-0 mx-4">|</div>
          ])}
        </div>
      </div>

      {/* Background Image Only */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/background-bg.jpg" 
          alt="Heritage background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content Container with Semi-Transparent Backdrop */}
      <div className="relative z-10 w-full mt-12"> {/* Added mt-12 to account for announcement bar */}
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
                onClick={() => window.open("https://docs.google.com/forms/d/1fK2X6qKEnuIbDW21Fgg_2KFCeRUcuL18UkLOBf6xRcI", "_blank")}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => {
                  // Create download link for the PDF
                  const link = document.createElement('a')
                  link.href = '/E-Poster-UDAAN.pdf' // Path to your PDF in public folder
                  link.download = 'UDAAN-2025-Brochure.pdf' // Suggested filename for download
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
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