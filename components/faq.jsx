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
            "The competition is open to all undergraduate and postgraduate students. Teams can have 3-5 members including the team leader. Both HITK students and external participants are welcome.",
        },
        {
          question: "Is there any registration fee?",
          answer:
            "Registration is completely free for HITK students. External participants (non-HITK students) need to pay ₹200 per team. Payment details will be shared after successful form submission.",
        },
      ],
    },
    {
      category: "Team & Registration",
      questions: [
        {
          question: "What should be the team composition?",
          answer:
            "Each team must have 3-5 members including one team leader. The team leader will be the primary point of contact. Teams can have members from different colleges and disciplines.",
        },
        {
          question: "Can I participate individually?",
          answer:
            "No, UDAAN is a team-based competition. You need to form a team of 3-5 members. If you don't have a team, you can attend our team formation support session on March 16, 2024.",
        },
        {
          question: "Can team members be from different colleges?",
          answer:
            "Yes, team members can be from different colleges and institutions. However, if any team member is from outside HITK, the team will be considered as external participants and need to pay the registration fee.",
        },
        {
          question: "Can I change team members after registration?",
          answer:
            "Minor changes in team composition are allowed until March 17, 2024. Major changes (more than 2 members) may require re-registration. Contact the organizing committee for assistance.",
        },
      ],
    },
    {
      category: "Competition Process",
      questions: [
        {
          question: "What are the competition phases?",
          answer:
            "The competition has 4 main phases: 1) Registration Phase (March 1-15), 2) Preparation Phase (March 16-20), 3) Evaluation Phase (March 21-25), and 4) Final Event (March 26). Each phase has specific deliverables and deadlines.",
        },
        {
          question: "What do I need to submit?",
          answer:
            "You need to submit a detailed business plan (max 10 pages) and a presentation (max 15 slides) by March 20, 2024. The submission should include problem statement, solution, market analysis, business model, SDG alignment, and implementation plan.",
        },
        {
          question: "How many teams will be shortlisted for finals?",
          answer:
            "Top 20 teams will be shortlisted for the final presentation round based on their submitted business plans. The shortlist will be announced on March 23, 2024.",
        },
        {
          question: "What is the presentation format for finals?",
          answer:
            "Shortlisted teams will have 10 minutes to present their business idea followed by 5 minutes of Q&A with the jury panel. Presentations should be engaging and cover all key aspects of the business model.",
        },
      ],
    },
    {
      category: "SDG & Ideas",
      questions: [
        {
          question: "Do I need to align my idea with SDGs?",
          answer:
            "Yes, all business ideas must be aligned with at least one of the 17 UN Sustainable Development Goals. This alignment will be a key evaluation criterion and should be clearly demonstrated in your submission.",
        },
        {
          question: "Can I work on multiple SDG themes?",
          answer:
            "While you can address multiple SDGs, you need to select one primary SDG theme during registration. Your business model can have secondary impacts on other SDGs, which can strengthen your submission.",
        },
        {
          question: "Are there any restrictions on the type of business ideas?",
          answer:
            "Ideas should be innovative, feasible, and have positive social/environmental impact. We welcome ideas from all sectors - technology, healthcare, education, agriculture, environment, etc. Ideas should not involve harmful or illegal activities.",
        },
      ],
    },
    {
      category: "Prizes & Benefits",
      questions: [
        {
          question: "What are the prizes for winners?",
          answer:
            "Winner gets ₹25,000, Runner-up gets ₹15,000, and Second Runner-up gets ₹10,000. Additionally, there are special prizes for Best SDG Impact (₹5,000), Most Innovative Solution (₹5,000), and People's Choice Award (₹3,000).",
        },
        {
          question: "What other benefits do participants get?",
          answer:
            "All participants get certificates, access to IIC-HITK incubation center, mentorship opportunities, networking with investors, startup resource kit, LinkedIn recommendations, and access to exclusive startup events.",
        },
        {
          question: "Will there be mentorship support?",
          answer:
            "Yes, each registered team will be assigned an industry mentor on March 17, 2024. Mentors will provide guidance on business model development, market validation, and presentation preparation.",
        },
      ],
    },
    {
      category: "Technical & Support",
      questions: [
        {
          question: "What if I face technical issues during registration?",
          answer:
            "If you face any technical issues, please contact our support team at udaan@hitk.ac.in or call +91-XXXXX-XXXXX. We also have a dedicated help desk during registration period.",
        },
        {
          question: "Where can I get updates about the competition?",
          answer:
            "Follow our official social media handles and check the IIC-HITK website regularly. Registered teams will receive email updates about important announcements and deadlines.",
        },
        {
          question: "Is there any preparation material available?",
          answer:
            "Yes, we will share a comprehensive resource kit including business plan templates, presentation guidelines, SDG information, and startup resources after registration confirmation.",
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
                    Email: udaan@hitk.ac.in
                  </Button>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                    Call: +91-XXXXX-XXXXX
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
