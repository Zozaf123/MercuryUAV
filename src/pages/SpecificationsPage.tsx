import React from 'react';
import { Cpu, Battery, Ruler, Wind, Wifi, Shield, Zap, Gauge, Compass } from 'lucide-react';

function SpecificationsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-12 text-center">TECHNICAL SPECIFICATIONS</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B21010] via-[#CF6015] to-[#EBB11A] opacity-30 rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Mercury UAV Technical View"
                className="rounded-xl shadow-2xl relative z-10 w-full"
              />
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-black text-white mb-4">MERCURY MX-9 SPECIFICATIONS</h3>
              <p className="text-gray-300 mb-6">
                The flagship model in our Mercury series, designed for maximum performance and versatility in challenging environments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Ruler className="w-5 h-5 text-[#EBB11A]" />
                  <span className="text-gray-200">Wingspan: 1.2m</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gauge className="w-5 h-5 text-[#EBB11A]" />
                  <span className="text-gray-200">Max Speed: 120 km/h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Battery className="w-5 h-5 text-[#EBB11A]" />
                  <span className="text-gray-200">Flight Time: 45 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Compass className="w-5 h-5 text-[#EBB11A]" />
                  <span className="text-gray-200">Range: 8 km</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <div className="flex items-start space-x-4">
                <Cpu className="w-8 h-8 text-[#B21010] mt-1" />
                <div>
                  <h3 className="text-xl font-black text-white mb-2">PROCESSING SYSTEM</h3>
                  <p className="text-gray-300">
                    Equipped with our proprietary MercuryAI™ processor, capable of real-time data analysis and autonomous decision-making with 12 TFLOPS of computing power.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <div className="flex items-start space-x-4">
                <Battery className="w-8 h-8 text-[#CF6015] mt-1" />
                <div>
                  <h3 className="text-xl font-black text-white mb-2">POWER SYSTEM</h3>
                  <p className="text-gray-300">
                    Advanced lithium-polymer battery with smart power management, providing up to 45 minutes of flight time and rapid 30-minute recharging.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <div className="flex items-start space-x-4">
                <Wind className="w-8 h-8 text-[#EBB11A] mt-1" />
                <div>
                  <h3 className="text-xl font-black text-white mb-2">PROPULSION</h3>
                  <p className="text-gray-300">
                    Quad brushless motors with adaptive thrust vectoring, allowing for precise maneuverability in winds up to 35 km/h and maximum speed of 120 km/h.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <div className="flex items-start space-x-4">
                <Wifi className="w-8 h-8 text-[#B21010] mt-1" />
                <div>
                  <h3 className="text-xl font-black text-white mb-2">COMMUNICATION</h3>
                  <p className="text-gray-300">
                    Multi-band encrypted communication system with 8 km range, featuring automatic frequency hopping and interference rejection.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-[#CF6015] mt-1" />
                <div>
                  <h3 className="text-xl font-black text-white mb-2">SECURITY FEATURES</h3>
                  <p className="text-gray-300">
                    Military-grade encryption, tamper detection, and secure boot process ensure mission integrity and data protection at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 mb-12">
          <h3 className="text-2xl font-black text-white mb-4">TECHNICAL SPECIFICATIONS TABLE</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="py-3 px-4 text-[#EBB11A] font-black">SPECIFICATION</th>
                  <th className="py-3 px-4 text-[#EBB11A] font-black">MERCURY MX-7</th>
                  <th className="py-3 px-4 text-[#EBB11A] font-black">MERCURY MX-9</th>
                  <th className="py-3 px-4 text-[#EBB11A] font-black">MERCURY MX-9 PRO</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-zinc-700">
                  <td className="py-3 px-4 font-semibold">Dimensions</td>
                  <td className="py-3 px-4">0.9m wingspan</td>
                  <td className="py-3 px-4">1.2m wingspan</td>
                  <td className="py-3 px-4">1.5m wingspan</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="py-3 px-4 font-semibold">Weight</td>
                  <td className="py-3 px-4">1.2 kg</td>
                  <td className="py-3 px-4">1.8 kg</td>
                  <td className="py-3 px-4">2.3 kg</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="py-3 px-4 font-semibold">Max Speed</td>
                  <td className="py-3 px-4">90 km/h</td>
                  <td className="py-3 px-4">120 km/h</td>
                  <td className="py-3 px-4">150 km/h</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="py-3 px-4 font-semibold">Flight Time</td>
                  <td className="py-3 px-4">30 min</td>
                  <td className="py-3 px-4">45 min</td>
                  <td className="py-3 px-4">60 min</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="py-3 px-4 font-semibold">Range</td>
                  <td className="py-3 px-4">5 km</td>
                  <td className="py-3 px-4">8 km</td>
                  <td className="py-3 px-4">12 km</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="py-3 px-4 font-semibold">Payload Capacity</td>
                  <td className="py-3 px-4">0.5 kg</td>
                  <td className="py-3 px-4">1.2 kg</td>
                  <td className="py-3 px-4">2.0 kg</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Operating Temperature</td>
                  <td className="py-3 px-4">-10°C to 40°C</td>
                  <td className="py-3 px-4">-20°C to 45°C</td>
                  <td className="py-3 px-4">-30°C to 50°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificationsPage;