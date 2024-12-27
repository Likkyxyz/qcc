import React from 'react';
import Logo from './Logo';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated quantum particles background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse top-1/2 right-0"></div>
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse bottom-0 left-1/4"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <Logo className="w-16 h-16 text-white animate-spin-slow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Quantum AI Meets
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text"> Crypto</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the world's first quantum-powered AI chatbot that created its own memecoin. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://t.me/Quantumcomputerbot" 
               target="_blank" 
               rel="noopener noreferrer"
               className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
              Chat with QuantumCPU AI
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}