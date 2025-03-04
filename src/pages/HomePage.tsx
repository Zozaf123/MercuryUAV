import React from 'react';
import { Bone as Drone, Shield, Target, Clock, ChevronDown, Globe2, Zap } from 'lucide-react';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.3'
          }}
        />
        <div 
          className="absolute inset-0 z-1"
          style={{
            background: 'linear-gradient(45deg, #B21010 0%, #CF6015 50%, #EBB11A 100%)',
            opacity: '0.4',
            mixBlendMode: 'overlay'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-black text-white mb-6">NEXT-GEN UAV SOLUTIONS</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Pioneering the future of autonomous aerial systems with cutting-edge technology and precision engineering
          </p>
          <button className="btn-primary group">
            <span className="inline-flex items-center">
              Explore Our Fleet
              <ChevronDown className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-16">ADVANCED CAPABILITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-[#EBB11A]" />,
                title: "PRECISION CONTROL",
                description: "Advanced navigation systems ensuring pinpoint accuracy in all operations"
              },
              {
                icon: <Clock className="w-12 h-12 text-[#CF6015]" />,
                title: "EXTENDED FLIGHT TIME",
                description: "Industry-leading battery life for prolonged mission duration"
              },
              {
                icon: <Shield className="w-12 h-12 text-[#B21010]" />,
                title: "ENHANCED SECURITY",
                description: "Military-grade encryption and secure communication protocols"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-xl transform transition-all duration-300 
                   hover:-translate-y-2 hover:shadow-lg hover:shadow-[#B21010]/20 
                   border border-zinc-800 cursor-pointer">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">REVOLUTIONARY DESIGN</h2>
              <p className="text-gray-300 mb-8">
                Our UAVs combine aerodynamic excellence with state-of-the-art technology, 
                delivering unmatched performance in any environment.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Globe2 className="w-6 h-6 text-[#EBB11A]" />, text: "GLOBAL NAVIGATION SYSTEMS" },
                  { icon: <Zap className="w-6 h-6 text-[#CF6015]" />, text: "SMART POWER MANAGEMENT" },
                  { icon: <Drone className="w-6 h-6 text-[#B21010]" />, text: "AUTONOMOUS FLIGHT CAPABILITIES" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-200 transform transition-all duration-300 
                       hover:translate-x-2 cursor-pointer group">
                    <div className="transform transition-transform group-hover:rotate-12">
                      {item.icon}
                    </div>
                    <span className="font-black">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B21010] via-[#CF6015] to-[#EBB11A] opacity-30 rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="UAV in flight"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">READY TO TRANSFORM YOUR AERIAL OPERATIONS?</h2>
          <p className="text-gray-300 mb-8">
            Join the future of autonomous aerial systems with our cutting-edge UAV solutions.
          </p>
          <button className="btn-primary group">
            <span className="inline-flex items-center">
              Contact Our Team
              <Zap className="w-5 h-5 ml-2 transform group-hover:scale-125 transition-transform" />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default HomePage;