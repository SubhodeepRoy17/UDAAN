"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, AlertTriangle, CheckCircle, FileText } from 'lucide-react'

export default function Registration() {
  const registrationData = [
    {
      title: "Registration Guidelines",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      items: [
        "Each team can have a maximum of 3 student members and 1 mentor",
        "Open to all undergraduate and postgraduate students",
        "Free for HITK students",
        "₹500 per team for external participants",
        "Registration: 7th August 2025 - 17th August 2025"
      ]
    },
    {
      title: "Before You Submit",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      items: [
        "Ensure all team member details are accurate",
        "Double-check your contact information",
        "Review your SDG theme selection",
        "Proofread your idea description",
        "Verify team composition meets requirements"
      ]
    },
    {
      title: "After Registration",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      items: [
        "You'll receive a confirmation email if shortlisted",
        "Payment details (if external participant)",
        "Competition updates and announcements"
      ]
    }
  ]

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">Registration</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the{" "}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Competition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your innovative ideas into impactful solutions? Register your team now!
          </p>
        </div>

        {/* Registration Information Table */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {registrationData.map((section, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white overflow-hidden h-full">
                <CardHeader className={`${section.bgColor} border-b`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  {/* Table Format */}
                  <div className="divide-y divide-gray-200">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-2" />
                          <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Single Registration Button */}
        <div className="text-center">
          <Card className="inline-block border-0 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-8 shadow-2xl">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to Register?</h3>
                <p className="text-blue-100 mb-6 max-w-md">
                  Click the button below to access our official registration form
                </p>
                <a
                  href="https://docs.google.com/forms/d/1fK2X6qKEnuIbDW21Fgg_2KFCeRUcuL18UkLOBf6xRcI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                  >
                    <CheckCircle className="mr-2 w-5 h-5" />
                    Register Now
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
