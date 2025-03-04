import React from 'react';
import { Award, Users, Rocket, Lightbulb, Globe, Zap, Clock, Target } from 'lucide-react';

function AboutPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-12 text-center">ABOUT MERCURY</h1>
        
        {/* Company Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B21010] via-[#CF6015] to-[#EBB11A] opacity-30 rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Mercury UAV Team"
                className="rounded-xl shadow-2xl relative z-10 w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white mb-6">OUR STORY</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2020 by a team of aerospace engineers and AI specialists, Mercury has rapidly established itself as a pioneer in autonomous aerial systems.
              </p>
              <p className="text-gray-300 mb-6">
                Our mission began with a simple question: How can we revolutionize the way unmanned aerial vehicles operate in complex environments? Five years and countless prototypes later, we've created a new generation of UAVs that combine cutting-edge AI with precision engineering.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#B21010] to-[#CF6015] flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white">INDUSTRY RECOGNITION</h4>
                  <p className="text-gray-400">Winner of the 2024 Aerospace Innovation Award</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-10 text-center">OUR CORE VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-10 h-10 text-[#EBB11A]" />,
                title: "INNOVATION",
                description: "Pushing the boundaries of what's possible in aerial technology through continuous research and development."
              },
              {
                icon: <Target className="w-10 h-10 text-[#CF6015]" />,
                title: "PRECISION",
                description: "Commitment to accuracy and reliability in every component and system we design."
              },
              {
                icon: <Globe className="w-10 h-10 text-[#B21010]" />,
                title: "GLOBAL IMPACT",
                description: "Creating solutions that address real-world challenges across industries and geographies."
              }
            ].map((value, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 transform transition-all duration-300 hover:-translate-y-2">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-10 text-center">LEADERSHIP TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Elena Reyes",
                role: "FOUNDER & CEO",
                bio: "Former NASA aerospace engineer with 15 years of experience in autonomous systems.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Marcus Chen",
                role: "CTO",
                bio: "AI specialist with a background in machine learning and computer vision systems.",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sarah Okonjo",
                role: "HEAD OF ENGINEERING",
                bio: "Robotics expert specializing in propulsion systems and aerodynamic design.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-1">{member.name}</h3>
                  <p className="text-[#EBB11A] font-bold mb-3">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-10 text-center">OUR JOURNEY</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#B21010] via-[#CF6015] to-[#EBB11A]"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  year: "2020",
                  title: "COMPANY FOUNDED",
                  description: "Mercury was established with a vision to revolutionize autonomous aerial systems.",
                  icon: <Lightbulb className="w-6 h-6 text-white" />
                },
                {
                  year: "2021",
                  title: "FIRST PROTOTYPE",
                  description: "The Mercury MX-1 prototype completed its first successful test flight.",
                  icon: <Rocket className="w-6 h-6 text-white" />
                },
                {
                  year: "2022",
                  title: "SERIES A FUNDING",
                  description: "Secured $25M in Series A funding to accelerate R&D and production capabilities.",
                  icon: <Zap className="w-6 h-6 text-white" />
                },
                {
                  year: "2023",
                  title: "GLOBAL EXPANSION",
                  description: "Opened offices in Singapore and Berlin to serve international markets.",
                  icon: <Globe className="w-6 h-6 text-white" />
                },
                {
                  year: "2024",
                  title: "MERCURY MX-9 LAUNCH",
                  description: "Released our flagship Mercury MX-9, setting new industry standards for performance.",
                  icon: <Award className="w-6 h-6 text-white" />
                }
              ].map((event, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="mb-1 text-[#EBB11A] font-black text-xl">{event.year}</div>
                      <h3 className="text-xl font-black text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900 border-4 border-[#CF6015] flex items-center justify-center">
                      {event.icon}
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-12 rounded-xl border border-zinc-700 text-center">
          <h2 className="text-3xl font-black text-white mb-6">JOIN THE MERCURY REVOLUTION</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence. Explore career opportunities or partnership possibilities with Mercury.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">
              <span className="inline-flex items-center">
                Careers at Mercury
                <Users className="w-5 h-5 ml-2" />
              </span>
            </button>
            <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-3 rounded-full font-semibold transition-all">
              <span className="inline-flex items-center">
                Contact Us
                <Clock className="w-5 h-5 ml-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;