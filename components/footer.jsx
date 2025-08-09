import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Rocket,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const quickLinks = [
    { name: "About UDAAN", href: "#about" },
    { name: "Registration", href: "#registration" },
    { name: "Schedule", href: "#schedule" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
  ]

  const resources = [
    { name: "Competition Guidelines", href: "#guidelines" },
    { name: "Business Plan Template", href: "#" },
    { name: "Presentation Guidelines", href: "#" },
    { name: "SDG Resources", href: "/SDG-Guidelines.pdf", type: "pdf" },
    { name: "Event Bronchure", href: "/E-Poster-UDAAN.pdf", type: "pdf" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-blue-300 bg-clip-text text-transparent">
                  UDAAN
                </h3>
                <p className="text-sm text-blue-200">IIC-HITK</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed mb-6">
              Empowering the next generation of entrepreneurs to create innovative solutions that drive positive change
              and sustainable development.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{resource.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Heritage Institute of Technology
                    <br />
                    Kolkata, West Bengal
                    <br />
                    India - 700107
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <Link href="mailto:rituparna.sinha@heritageit.edu" className="text-blue-200 hover:text-white transition-colors">
                  rituparna.sinha@heritageit.edu
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <Link href="tel:+919123074188" className="text-blue-200 hover:text-white transition-colors">
                  +91-91230-74188
                </Link>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <h5 className="font-semibold text-white mb-2">Support Hours</h5>
              <p className="text-blue-200 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="text-blue-200 text-sm">
            <p>© 2025 UDAAN - IIC Heritage Institute of Technology, Kolkata. All rights reserved.</p>
          </div>          
        </div>

        {/* Powered by */}
        <div className="text-center mt-4 pt-4 border-t border-white/10">
          <p className="text-blue-300 text-xs">
            Powered by Innovation & Incubation Cell, Heritage Institute of Technology
          </p>
        </div>
      </div>
    </footer>
  )
}
