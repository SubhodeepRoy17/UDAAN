"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Users, AlertTriangle, CheckCircle, FileText } from 'lucide-react'

export default function Registration() {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeader: "",
    leaderEmail: "",
    leaderPhone: "",
    college: "",
    members: ["", "", "", ""],
    sdgTheme: "",
    ideaDescription: "",
    isExternal: false,
    agreeTerms: false,
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleMemberChange = (index, value) => {
    const newMembers = [...formData.members]
    newMembers[index] = value
    setFormData((prev) => ({ ...prev, members: newMembers }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Registration Guidelines */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 border-0 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Registration Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Team Composition</h4>
                    <p className="text-sm text-blue-100"> Each team can have a maximum of 3 student members and 1 mentor.</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Eligibility</h4>
                    <p className="text-sm text-blue-100">Open to all undergraduate and postgraduate students</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Registration Fee</h4>
                    <p className="text-sm text-blue-100">Free for HITK students</p>
                    <p className="text-sm text-blue-100">₹500 per team for external participants</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Important Dates</h4>
                    <p className="text-sm text-blue-100">Registration: 7th August 2025 - 17th August 2025</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Form Integration */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-600" />
                    Team Registration Form
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Fill out our comprehensive registration form to join the UDAAN competition
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Google Form Embed */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-6 border border-blue-200">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Register?</h3>
                        <p className="text-gray-600 mb-6">
                          Click the button below to access our official registration form. The form will open in a new tab for your convenience.
                        </p>
                        
                        {/* Registration Button - PASTE YOUR GOOGLE FORM LINK HERE */}
                        <a
                          href="https://docs.google.com/forms/d/1fK2X6qKEnuIbDW21Fgg_2KFCeRUcuL18UkLOBf6xRcI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                          >
                            <CheckCircle className="mr-2 w-5 h-5" />
                            Open Registration Form
                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Button>
                        </a>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Before You Submit
                        </h4>
                        <ul className="text-sm text-blue-800 space-y-2">
                          <li>• Ensure all team member details are accurate</li>
                          <li>• Double-check your contact information</li>
                          <li>• Review your SDG theme selection</li>
                          <li>• Proofread your idea description</li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          After Registration
                        </h4>
                        <ul className="text-sm text-orange-800 space-y-2">
                          <li>• You'll receive a confirmation email</li>
                          <li>• Payment details (if external participant)</li>
                          <li>• Access to resource materials</li>
                          <li>• Mentor assignment notification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
