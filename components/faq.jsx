"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from "lucide-react"

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0]))

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is UDAAN competition about?",
          answer:
            "UDAAN is a startup and business model competition organized by IIC-HITK that focuses on innovative solutions aligned with UN Sustainable Development Goals. It provides a platform for students to transform their ideas into viable business models with expert mentorship and substantial prizes.",
        },
        {
          question: "Who can participate in UDAAN?",
          answer:
            "The competition is open to all undergraduate and postgraduate students. Teams can have a maximum of 3 members including the team leader. Both HITK students and external participants are welcome.",
        },
        {
          question: "Is there any registration fee?",
          answer:
            "Registration is completely free for HITK students. External participants (non-HITK students) need to pay ₹500 per team. Payment details will be shared after successful form submission and selection.",
        },
      ],
    },
    {
      category: "Team & Registration",
      questions: [
        {
          question: "What should be the team composition?",
          answer:
            "Each team can have a maximum of 3 members including one team leader. The team leader will be the primary point of contact. Teams can have members from different colleges and disciplines.",
        },
        {
          question: "Can I participate individually?",
          answer:
            "Yes, you can participate individually, but we encourage forming teams for diverse perspectives and skills. Individual participants can register as a team of one.",
        },
        {
          question: "Can team members be from different colleges?",
          answer:
            "Yes, team members can be from different colleges and institutions. However, if any team member is from outside HITK, the team will be considered as external participants and need to pay the registration fee.",
        },
        {
          question: "Can I change team members after registration?",
          answer:
            "No, once registered, the team composition cannot be changed. Ensure all members are finalized before submitting the registration form.",
        },
      ],
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about UDAAN competition. Can't find what you're looking for? Contact us!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex
                  const isOpen = openItems.has(globalIndex)

                  return (
                    <Card
                      key={faqIndex}
                      className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t pt-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <Card className="inline-block border-0 bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 shadow-xl">
            <div className="flex flex-col items-center gap-4">
              <MessageCircle className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
                <p className="text-blue-100 mb-4">
                  Our team is here to help you with any queries about UDAAN competition
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                    Email: rituparna.sinha@heritageit.edu
                  </Button>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                    Call: +91-91230-74188
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
