"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Committee() {
  const [activeTab, setActiveTab] = useState("chief-patron")

  const committeeData = {
    "chief-patron": [
      {
        name: "Shri H.K. Chaudhary",
        designation: "Chairman, Vikram Solar Ltd. and Chairman, Board of Trustees, Kalyan Bharti Trust (KBT), Kolkata"
      }
    ],
    patrons: [
      {
        name: "Shri P R Agarwala",
        designation: "Chairman, Board of Governors, HIT & Chairman, Rupa & Co Ltd"
      },
      {
        name: "Shri Sajjan Bhajanka",
        designation: "Chairman, Century Plyboards (India) Ltd"
      },
      {
        name: "Shri Probir Roy",
        designation: "Director, Kalyan Bharti Trust"
      },
      {
        name: "Shri P K Agarwal",
        designation: "Chief Executive Officer, Kalyan Bharti Trust"
      },
      {
        name: "Prof Basab Chaudhuri",
        designation: "Principal, Heritage Institute of Technology"
      }
    ],
    advisory: [
      {
        name: "Prof. Sujit Kumar Barua",
        designation: "Registrar and HOD, Department of Computer Science & Business System, Heritage Institute of Technology"
      },
      {
        name: "Prof. Sandip Chatterjee",
        designation: "IQAC-HITK Coordinator, Joint Registrar (Academic), Associate Dean (Student Affairs) and HOD, Mathematics at Heritage Institute of Technology"
      },
      {
        name: "Prof. Subhashis Majumdar",
        designation: "Dean UG Program, HOD, Department of Computer Science and Engineering, Heritage Institute of Technology"
      },
      {
        name: "Mr. Arvind Srivastav",
        designation: "Joint Registrar at Heritage Institute of Technology"
      },
      {
        name: "Prof. Nandan Kumar Jana",
        designation: "President, Institution Innovation Council, Associate Professor, Dept. of Biotechnology, Heritage Institute of Technology"
      }
    ],
    coordinators: [
      {
        name: "Prof. Rituparna Sinha",
        designation: "Convenor, IIC-HITK, Asst. Professor, Dept. of Information Technology, Heritage Institute of Technology"
      },
      {
        name: "Prof. Abhijeet Ghosh",
        designation: "Asst. Professor, Dept. of Chemical Engineering, Heritage Institute of Technology"
      },
      {
        name: "Prof. Deep Malya Mukhopadhyay",
        designation: "Asst. Professor, Dept. of Information Technology, Heritage Institute of Technology"
      },
      {
        name: "Prof. Pramita Sen",
        designation: "Asst. Professor, Dept. of Chemical Engineering, Heritage Institute of Technology"
      },
      {
        name: "Prof. Nabamita Banerjee",
        designation: "Associate Professor, Heritage Institute of Technology"
      },
      {
        name: "Prof. Puja Basu Choudhury",
        designation: "Asst. Professor, Dept. of Civil Engineering, Heritage Institute of Technology"
      },
      {
        name: "Ms. Rajashree Lodh",
        designation: "Asst. Professor, Dept. of Civil Engineering, Heritage Institute of Technology"
      }
    ]
  }

  return (
    <section id="committee" className="pt-[72px] md:pt-0 py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">Committee</Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Organizing Committee
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The distinguished members who are guiding and organizing UDAAN 2025
          </p>
        </div>

        <Tabs defaultValue="chief-patron" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger 
              value="chief-patron" 
              className="text-xs sm:text-sm md:text-base"
              onClick={() => setActiveTab("chief-patron")}
            >
              Chief Patron
            </TabsTrigger>
            <TabsTrigger 
              value="patrons" 
              className="text-xs sm:text-sm md:text-base"
              onClick={() => setActiveTab("patrons")}
            >
              Patrons
            </TabsTrigger>
            <TabsTrigger 
              value="advisory" 
              className="text-xs sm:text-sm md:text-base"
              onClick={() => setActiveTab("advisory")}
            >
              Advisory
            </TabsTrigger>
            <TabsTrigger 
              value="coordinators" 
              className="text-xs sm:text-sm md:text-base"
              onClick={() => setActiveTab("coordinators")}
            >
              Coordinators
            </TabsTrigger>
          </TabsList>

          {/* Chief Patron Tab */}
          <TabsContent value="chief-patron">
            <div className="grid grid-cols-1 gap-6">
              {committeeData["chief-patron"].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mt-2">{member.designation}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Patrons Tab */}
          <TabsContent value="patrons">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committeeData.patrons.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mt-2">{member.designation}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Advisory Committee Tab */}
          <TabsContent value="advisory">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committeeData.advisory.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mt-2">{member.designation}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Coordinators Tab */}
          <TabsContent value="coordinators">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committeeData.coordinators.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mt-2">{member.designation}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}