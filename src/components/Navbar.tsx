import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Logo className="w-8 h-8 text-white" />
            <span className="text-white font-bold text-xl">QuantumCpu AI</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors"></a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>

              <a href="https://t.me/quantumcpuai" target="_blank" rel="noopener noreferrer" 
                 className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Join Telegram Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}