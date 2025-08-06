"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Rocket, ArrowRight, Download, ChevronDown } from 'lucide-react'
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutHovered, setIsAboutHovered] = useState(false)

  const navigationItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { 
      name: "About", 
      href: "#about", 
      id: "about",
      dropdown: [
        { name: "Themes", href: "#themes", id: "themes" },
        { name: "Eligibility Criteria", href: "#eligibility", id: "eligibility" },
        { name: "Registration Guidelines", href: "#guidelines", id: "guidelines" }
      ]
    },
    { name: "Register", href: "#registration", id: "registration" },
    { name: "Prizes", href: "#prizes", id: "prizes" },
    { name: "Schedule", href: "#schedule", id: "schedule" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.flatMap(item => 
        item.dropdown ? [item.id, ...item.dropdown.map(d => d.id)] : [item.id]
      )
      const scrollPosition = window.scrollY + 140 // Adjusted for new header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = 140 // Adjusted for combined header height
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }

    setIsMobileMenuOpen(false)
    setIsAboutHovered(false)
  }

  return (
    <>
      {/* Institutional Logos Bar */}
      <div className="fixed top-0 left-0 right-0 z-60 bg-white/95 backdrop-blur-md border-b border-gray-200/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Heritage Institute Logo - Left */}
            <div className="flex items-center gap-4">
              <div className="w-36 h-24 md:w-48 md:h-28 relative bg-white rounded-full shadow-sm border border-gray-200 p-1">
                <Image
                  src="/images/HIT_Logo_New-Picsart-AiImageEnhancer.jpg"
                  alt="Heritage Institute of Technology"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-800">Heritage Institute</p>
                <p className="text-xs text-gray-600">of Technology</p>
              </div>
            </div>

            {/* Center - Competition Title */}
            <div className="text-center">
              <h1 className="text-lg md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                UDAAN 2025
              </h1>
              <p className="text-sm text-gray-600 hidden md:block">Business Model/Startup Competition</p>
            </div>

            {/* IIC Logo - Right */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-gray-800">Institution's Innovation</p>
                <p className="text-xs text-gray-600">Council</p>
              </div>
              <div className="w-36 h-24 md:w-48 md:h-28 relative bg-white rounded-lg shadow-sm border border-gray-200 p-1">
                <Image
                  src="/images/iiclogo-1.png"
                  alt="Institution's Innovation Council"
                  fill
                  className="object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-36 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-black-200/50"
            : "bg-black/95 backdrop-blur-md shadow-lg border-b border-black-200/50"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                  isScrolled
                    ? "bg-gradient-to-br from-orange-500 to-blue-500"
                    : "bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
              >
                <Rocket className={`w-4 h-4 ${isScrolled ? "text-white" : "text-white"}`} />
              </div>
              <div>
                <h1
                  className={`text-xl font-bold ${
                    isScrolled
                      ? "bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  UDAAN
                </h1>
                <p className={`text-xs font-medium ${isScrolled ? "text-gray-600" : "text-blue-100"}`}>IIC-HITK</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setIsAboutHovered(true)}
                  onMouseLeave={() => item.dropdown && setIsAboutHovered(false)}
                >
                  <button
                    onClick={() => !item.dropdown && scrollToSection(item.href)}
                    className={`px-3 py-2 rounded-full text-lg font-100px transition-all duration-300 hover:scale-105 flex items-center ${
                      (activeSection === item.id || (item.dropdown && item.dropdown.some(d => activeSection === d.id))
                        ? isScrolled
                          ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-md"
                          : "bg-white/30 text-white backdrop-blur-sm"
                        : isScrolled
                          ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          : "text-blue-100 hover:text-white hover:bg-white/20"
              )}`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isAboutHovered ? 'rotate-180' : ''}`} />}
                  </button>

                  {/* Dropdown for About */}
                  {item.dropdown && isAboutHovered && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.id}
                            onClick={() => scrollToSection(dropdownItem.href)}
                            className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                              activeSection === dropdownItem.id
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                onClick={() => scrollToSection("#registration")}
                variant="outline"
                size="sm"
                className={`rounded-full font-semibold transition-all duration-300 hover:scale-105 text-xs px-3 py-1 ${
                  isScrolled
                    ? "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-blue-700 bg-transparent"
                }`}
              >
                <Download className="w-3 h-3 mr-1" />
                Brochure
              </Button>

              <Button
                onClick={() => scrollToSection("#registration")}
                size="sm"
                className={`rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group text-xs px-3 py-1 ${
                  isScrolled
                    ? "bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-50"
                }`}
              >
                Register Now
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`lg:hidden p-2 ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                  }`}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-80 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0"
              >
                <div className="flex items-center gap-3 mb-8 pt-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">UDAAN</h2>
                    <p className="text-blue-200 text-sm">From Ideas to Impact</p>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2 mb-8">
                  {navigationItems.map((item) => (
                    <div key={item.id}>
                      <button
                        onClick={() => !item.dropdown && scrollToSection(item.href)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-white/10 flex justify-between items-center ${
                          (activeSection === item.id || (item.dropdown && item.dropdown.some(d => activeSection === d.id)) 
                            ? "bg-white/20 text-white" 
                            : "text-blue-100"
                  )}`}
                      >
                        {item.name}
                        {item.dropdown && <ChevronDown className={`w-4 h-4 transition-transform ${isAboutHovered ? 'rotate-180' : ''}`} />}
                      </button>
                      
                      {/* Mobile dropdown items */}
                      {item.dropdown && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <button
                              key={dropdownItem.id}
                              onClick={() => scrollToSection(dropdownItem.href)}
                              className={`w-full text-left px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10 ${
                                activeSection === dropdownItem.id 
                                  ? "bg-white/20 text-white" 
                                  : "text-blue-100"
                              }`}
                            >
                              {dropdownItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={() => scrollToSection("#registration")}
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-blue-700 bg-transparent rounded-lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>

                  <Button
                    onClick={() => scrollToSection("#registration")}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-lg font-semibold shadow-lg"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Competition Info */}
                <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Quick Info</h3>
                  <div className="space-y-2 text-sm text-blue-100">
                    <div className="flex justify-between">
                      <span>Registration:</span>
                      <span className="text-white">Till March 15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prize Pool:</span>
                      <span className="text-white">₹63,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Final Event:</span>
                      <span className="text-white">March 26</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed headers */}
      <div className="h-56" />
    </>
  )
}
