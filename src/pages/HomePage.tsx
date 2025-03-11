import { useState } from 'react';
import { Shield, Target, Clock, ChevronDown, Globe2, Zap, BotIcon, Phone } from 'lucide-react';
import SpecificationsTable from './SpecificationTable';
import '../index.css';

type DropdownsState = {
    [key: string]: boolean;
    globalNavigation: boolean;
    smartPower: boolean;
    autonomousFlight: boolean;
    precisionControl: boolean;
    extendedFlight: boolean;
    enhancedSecurity: boolean;
};

function HomePage() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [dropdowns, setDropdowns] = useState<DropdownsState>({
        globalNavigation: false,
        smartPower: false,
        autonomousFlight: false,
        precisionControl: false,
        extendedFlight: false,
        enhancedSecurity: false,
    });
    const [selectedBox, setSelectedBox] = useState<string | null>(null);
    const [isContactFormVisible, setIsContactFormVisible] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleDropdown = (key: keyof DropdownsState) => {
        setSelectedBox((prev) => (prev === key ? null : key as string));
        setDropdowns((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const toggleContactForm = () => {
        setIsContactFormVisible(!isContactFormVisible);
    };

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
                  Pioneering the future of autonomous aerial systems with cutting-edge technology and precision
                  engineering
              </p>
              <button className="btn-primary group" onClick={toggleContent}>
                <span className="inline-flex items-center">
                    Explore Our Fleet
                    <ChevronDown className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform"/>
                </span>
              </button>
          </div>
      </header>

        {/* Dropdown and Expandable Content */}
        {isExpanded && (
            <div className={`specifications-table-wrapper ${isExpanded ? 'expanded' : ''}`}>
                <SpecificationsTable />
            </div>
        )}

        {/* Features Section */}
        <section className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-black text-white text-center mb-16">ADVANCED CAPABILITIES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { key: 'precisionControl', icon: <Target className="w-12 h-12 text-[#EBB11A]" />, text: "PRECISION CONTROL", description: "Advanced navigation systems ensuring pinpoint accuracy in all operations" },
                        { key: 'extendedFlight', icon: <Clock className="w-12 h-12 text-[#CF6015]" />, text: "EXTENDED FLIGHT TIME", description: "Industry-leading battery life for prolonged mission duration" },
                        { key: 'enhancedSecurity', icon: <Shield className="w-12 h-12 text-[#B21010]" />, text: "ENHANCED SECURITY", description: "Military-grade encryption and secure communication protocols" }
                    ].map((item, index) => (
                        <div key={index} className={`bg-zinc-900 p-8 rounded-xl transform transition-all duration-300
                   hover:-translate-y-2 hover:shadow-lg hover:shadow-[#B21010]/20
                   border border-zinc-800 cursor-pointer ${selectedBox === item.key ? 'expanded' : ''}`}
                             onClick={() => toggleDropdown(item.key)}>
                            <div className="flex items-center space-x-3">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-black text-white mb-3">{item.text}</h3>
                            </div>
                            <p className="text-gray-300">{item.description}</p>
                            {dropdowns[item.key] && (
                                <div className="mt-2 p-4 bg-zinc-800 rounded-lg">
                                    <p className="text-gray-300">Detailed information about {item.text.toLowerCase()}.</p>
                                </div>
                            )}
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
                                { key: 'globalNavigation', icon: <Globe2 className="w-6 h-6 text-[#EBB11A]" />, text: "GLOBAL NAVIGATION SYSTEMS" },
                                { key: 'smartPower', icon: <Zap className="w-6 h-6 text-[#CF6015]" />, text: "SMART POWER MANAGEMENT" },
                                { key: 'autonomousFlight', icon: <BotIcon className="w-6 h-6 text-[#B21010]" />, text: "AUTONOMOUS FLIGHT CAPABILITIES" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col space-y-2 text-gray-200 transform transition-all duration-300
                       hover:translate-x-2 cursor-pointer group">
                                    <div className="flex items-center space-x-3" onClick={() => toggleDropdown(item.key)}>
                                        <div className="transform transition-transform group-hover:rotate-12">
                                            {item.icon}
                                        </div>
                                        <span className="font-black">{item.text}</span>
                                    </div>
                                    {dropdowns[item.key] && (
                                        <div className="ml-9 mt-2 p-4 bg-zinc-800 rounded-lg">
                                            <p className="text-gray-300">Detailed information about {item.text.toLowerCase()}.</p>
                                        </div>
                                    )}
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
                <button className="btn-primary group" onClick={toggleContactForm}>
            <span className="inline-flex items-center">
              Contact Our Team
              <Zap className="w-5 h-5 ml-2 transform group-hover:scale-125 transition-transform" />
            </span>
                </button>
                {isContactFormVisible && (
                    <div className="mt-8 bg-white rounded-lg shadow-lg p-8 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-center">
                                <Phone className="w-12 h-12 text-black mb-4" />
                                <p className="text-gray-700">For any inquiries, please call us at (123) 456-7890.</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <input type="text" placeholder="First Name" className="p-2 border border-gray-300 rounded" />
                                        <input type="text" placeholder="Last Name" className="p-2 border border-gray-300 rounded" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded w-full" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="tel" placeholder="Phone Number" className="p-2 border border-gray-300 rounded w-full" />
                                    </div>
                                    <div className="mb-4">
                                        <textarea placeholder="Message" className="p-2 border border-gray-300 rounded w-full" rows={4}></textarea>
                                    </div>
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Your Response</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    </>
    );
}



export default HomePage;