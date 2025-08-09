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
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  const navigationItems = [
    { name: "Home", href: "#hero", id: "hero" },
    {
      name: "About",
      href: "#about",
      id: "about",
      dropdown: [
        { name: "About HITK", href: "#hitk", id: "hitk" },
        { name: "Themes", href: "#themes", id: "themes" },
        { name: "Eligibility Criteria", href: "#eligibility", id: "eligibility" },
        { name: "Registration Guidelines", href: "#guidelines", id: "guidelines" }
      ]
    },
    { name: "Register", href: "#registration", id: "registration" },
    { name: "Prizes", href: "#prizes", id: "prizes" },
    { name: "Important dates", href: "#schedule", id: "schedule" },
    { name: "Committee", href: "#committee", id: "committee" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ]

  const resourcesItems = [
    { name: "Event Brochure (PDF)", href: "/E-Poster-UDAAN.pdf", type: "pdf" },
    { name: "SDG Guidelines (PDF)", href: "/SDG-Guidelines.pdf", type: "pdf" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      const sections = navigationItems.flatMap(item =>
        item.dropdown ? [item.id, ...item.dropdown.map(d => d.id)] : [item.id]
      )
      const scrollPosition = window.scrollY + 140
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
      const headerHeight = 200
      const targetPosition = targetElement.offsetTop - headerHeight
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
      setActiveSection(targetId)
    }
    setIsMobileMenuOpen(false)
    setIsAboutOpen(false)
    setIsResourcesOpen(false)
  }

  const handleDownload = (href, filename) => {
    const link = document.createElement('a')
    link.href = href
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownClick = event.target.closest('.dropdown-button, .dropdown-menu')
      if (!isDropdownClick) {
        setIsAboutOpen(false)
        setIsResourcesOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <>
      {/* Institutional Logos Bar */}
      <div className="fixed top-0 left-0 right-0 z-60 bg-white/95 backdrop-blur-md border-b border-gray-200/50 py-2 sm:py-3">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            
            {/* Heritage Institute - Left */}
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 relative rounded-full border border-gray-200 overflow-hidden">
                <Image
                  src="/images/HIT_Logo_New-Picsart-AiImageEnhancer.jpg"
                  alt="Heritage Institute of Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 3rem, (max-width: 768px) 3.5rem, 4rem"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] xs:text-xs sm:text-sm md:text-base font-medium text-gray-900 leading-tight truncate">Heritage</p>
                <p className="text-[11px] xs:text-xs sm:text-sm md:text-base font-medium text-gray-900 leading-tight truncate">Institute</p>
              </div>
            </div>

            {/* Competition Title - Center */}
            <div className="flex flex-col items-center mx-1 flex-shrink-0">
              <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
                UDAAN 2025
              </h1>
              <p className="text-[10px] xs:text-xs text-gray-500 mt-px hidden xs:block whitespace-nowrap">
                Startup Competition
              </p>
            </div>

            {/* IIC - Right */}
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <div className="min-w-0 text-right">
                <p className="text-[11px] xs:text-xs sm:text-sm md:text-base font-medium text-gray-900 leading-tight truncate">Institution's</p>
                <p className="text-[11px] xs:text-xs sm:text-sm md:text-base font-medium text-gray-900 leading-tight truncate">Innovation Council</p>
              </div>
              <div className="w-12 h-10 sm:w-14 sm:h-12 md:w-16 md:h-14 flex-shrink-0 relative">
                <Image
                  src="/images/iiclogo-1.png"
                  alt="Institution's Innovation Council"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 3rem, (max-width: 768px) 3.5rem, 4rem"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`fixed top-36 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black/95 backdrop-blur-md shadow-lg"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 flex items-center justify-center shadow-lg">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">UDAAN</h1>
                <p className="text-xs font-medium text-blue-100">IIC-HITK</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    className={`dropdown-button px-3 py-2 rounded-full text-lg transition-all duration-300 hover:scale-105 flex items-center ${
                      (activeSection === item.id || (item.dropdown && item.dropdown.some(d => activeSection === d.id)))
                        ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-md"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => {
                      if (item.dropdown) {
                        setIsAboutOpen(!isAboutOpen)
                        setIsResourcesOpen(false)
                      } else {
                        scrollToSection(item.href)
                      }
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                    )}
                  </button>

                  {item.dropdown && isAboutOpen && (
                    <div className="dropdown-menu absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
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

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  className={`dropdown-button px-3 py-2 rounded-full text-lg transition-all duration-300 hover:scale-105 flex items-center ${
                    isResourcesOpen ? "bg-white/20 text-white" : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => {
                    setIsResourcesOpen(!isResourcesOpen)
                    setIsAboutOpen(false)
                  }}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isResourcesOpen && (
                  <div className="dropdown-menu absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
                    <div className="py-1">
                      {resourcesItems.map((resource) => (
                        <button
                          key={resource.name}
                          onClick={() => handleDownload(resource.href, resource.name)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {resource.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Register Button */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                onClick={() => window.open("https://docs.google.com/forms/d/1fK2X6qKEnuIbDW21Fgg_2KFCeRUcuL18UkLOBf6xRcI", "_blank")}
                size="sm"
                className="rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white"
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
                  className="lg:hidden p-2 text-white hover:text-blue-200"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
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
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (item.id === "about") {
                                setIsAboutOpen(!isAboutOpen);
                                setIsResourcesOpen(false);
                              }
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-white/10 flex justify-between items-center ${
                              (activeSection === item.id || (item.dropdown && item.dropdown.some(d => activeSection === d.id))) 
                                ? "bg-white/20 text-white" 
                                : "text-blue-100"
                            }`}
                          >
                            {item.name}
                            <ChevronDown className={`w-4 h-4 transition-transform ${
                              (item.id === "about" && isAboutOpen) ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {item.id === "about" && isAboutOpen && (
                            <div className="ml-4 mt-1 space-y-1">
                              {item.dropdown.map((dropdownItem) => (
                                <button
                                  key={dropdownItem.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    scrollToSection(dropdownItem.href);
                                  }}
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
                        </>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToSection(item.href);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-white/10 ${
                            activeSection === item.id 
                              ? "bg-white/20 text-white" 
                              : "text-blue-100"
                          }`}
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}

                  {/* Mobile Resources Section */}
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsResourcesOpen(!isResourcesOpen);
                        setIsAboutOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-white/10 flex justify-between items-center ${
                        isResourcesOpen ? "bg-white/20 text-white" : "text-blue-100"
                      }`}
                    >
                      Resources
                      <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isResourcesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {resourcesItems.map((resource) => (
                          <button
                            key={resource.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(resource.href, resource.name);
                            }}
                            className="w-full text-left px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10 text-blue-100 flex items-center"
                          >
                            {resource.name}
                            <Download className="w-4 h-4 ml-2" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>

                {/* Mobile CTA Button */}
                <Button
                  onClick={() => window.open("https://docs.google.com/forms/d/1fK2X6qKEnuIbDW21Fgg_2KFCeRUcuL18UkLOBf6xRcI", "_blank")}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-lg font-semibold shadow-lg"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

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