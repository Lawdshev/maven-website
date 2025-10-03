'use client'

import { useTheme } from '../contexts/ThemeContext'
import AgentAi from '@/app/image/services/agentAi.png'
import Time from '@/app/image/services/time.png'
import Cloud from '@/app/image/services/cloud.png'
import Image from 'next/image'
import IconOne from '@/app/image/services/iconOne.png'
import IconTwo from '@/app/image/services/iconTwo.png'
import IconThree from '@/app/image/services/iconThree.png'
export default function Services() {
  const { theme } = useTheme()

  const services = [
    {
      title: "AI Agent",
      description: "Lorem ipsum amet, consectetur adipisicing elit,sd do eiusmod tempor incididunt labore etdolore magna aliqua..",
      image: AgentAi,
      icon: IconOne
    },
    {
      title: "Real Time Pipeline",
      description: "Lorem ipsum amet, consectetur adipisicing elit,sd do eiusmod tempor incididunt labore etdolore magna aliqua..",
      image: Time,
      icon: IconTwo
    },
    {
      title: "Cloud Native",
      description: "Lorem ipsum amet, consectetur adipisicing elit,sd do eiusmod tempor incididunt labore etdolore magna aliqua..",
      image:Cloud,
      icon: IconThree
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-8">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
              Service
            </span>
          </div>
          
          <h2 className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
          Cutting edge technology stack designed for, scale, performancee and 
         innovation 
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-background rounded-2xl shadow-lg overflow-hidden relative">
              {/* Image Container with Bottom Icon */}
              <div className="relative flex justify-center mb-6">
                <Image src={service.image} alt={service.title} width={400} height={400} />
                {/* Small Icon Overlay - Bottom Center */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-background rounded-full p-3 shadow-lg border border-border">
                    <Image src={service.icon} alt={`${service.title} icon`} width={30} height={30} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center py-4 px-6">
                <h3 className="text-[22px] font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
