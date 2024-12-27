import React from 'react';
import { Brain, Cpu, Lock, Coins, MessageSquare, Zap } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Quantum AI Intelligence",
    description: "Powered by advanced quantum computing algorithms and AI technology"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Interactive Chat",
    description: "Engage with our quantum AI through our Telegram bot interface"
  },

  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Quantum Processing",
    description: "Utilizing quantum superposition for enhanced decision making"
  },


];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Quantum Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the revolutionary features that make our quantum AI chatbot unique in the crypto space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="text-purple-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}