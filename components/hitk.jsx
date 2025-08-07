"use client"

import { Building2, GraduationCap, FlaskConical, Globe, Users, Award } from 'lucide-react'
import Image from 'next/image'

export default function HITK() {
  return (
    <section id="hitk" className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with logo */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-24 h-24 relative mb-6">
            <Image
              src="/images/HIT_Logo_New-Picsart-AiImageEnhancer.jpg" // Replace with your HITK logo path
              alt="HITK Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Heritage Institute of Technology
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full" />
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Heritage Institute of Technology (HITK), established in 2001 under the aegis of the Kalyan Bharti Trust (KBT), is a premier autonomous institute in Kolkata dedicated to excellence in higher education. KBT, founded in 1990 by 22 visionary industrialists in Kolkata, aims to promote quality education in India, particularly in West Bengal. HITK is affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT) and offers 13 undergraduate and 7 postgraduate programs in various engineering disciplines. The institute is accredited by the National Assessment and Accreditation Council (NAAC) with a Grade ‘A’, and most of its eligible courses are accredited by the National Board of Accreditation (NBA-Tier 1). Recognized for its outstanding performance, HITK was one of 17 private institutions receiving additional grants under the TEQIP-II scheme.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The institute emphasizes hands-on training, cutting-edge research, and state-of-the-art infrastructure, fostering innovation and excellence. HITK is home to initiatives like the IEEE EDS Centre of Excellence and the Centre for Advanced Biomedical Research, which drive interdisciplinary research. Collaborations with premier academic institutions and industries at both national and international levels further enhance its academic and research ecosystem. HITK’s alumni are a testament to its legacy, contributing significantly to top-tier companies and renowned universities worldwide, thereby upholding the institute's reputation. With a strong commitment to academic excellence, innovation, and industry integration, HITK continues to play a pivotal role in shaping the future of higher education in India.            
            </p>
            
          </div>

          {/* Right side - Image and stats */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
              <Image
                src="/images/background-bg.jpg" // Replace with campus image
                alt="HITK Campus"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <Building2 className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold">Our Campus</h3>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">24+</div>
                <div className="text-sm text-gray-500">Years of Excellence</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">20+</div>
                <div className="text-sm text-gray-500">Academic Programs</div>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-green-500 mb-1">A</div>
                <div className="text-sm text-gray-500">NAAC Grade</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-500 mb-1">100+</div>
                <div className="text-sm text-gray-500">Industry Collaborations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni and legacy section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900">Our Legacy</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            HITK's alumni are a testament to its legacy, contributing significantly to top-tier companies and renowned universities worldwide. 
            With a strong commitment to academic excellence, innovation, and industry integration, HITK continues to play a pivotal role in 
            shaping the future of higher education in India.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium flex items-center gap-2">
              <Award className="w-4 h-4" /> AICTE Accredited
            </div>
            <div className="px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
              Autonomous Institute
            </div>
            <div className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">
              NBA Accredited
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}