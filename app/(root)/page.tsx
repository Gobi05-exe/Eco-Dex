"use client"; // This ensures that the page is treated as a Client Component

import { Leaf, Coins, Users } from 'lucide-react';
import HeaderBox from "@/components/HeaderBox";
import Status1 from "@/components/Status1";
import React from "react";

function AnimatedGlobe() {
  return (
    <div className="mt-10 relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse"></div>
      <div className="absolute inset-2 rounded-full bg-green-400 opacity-40 animate-ping"></div>
      <div className="absolute inset-4 rounded-full bg-green-300 opacity-60 animate-spin"></div>
      <div className="absolute inset-6 rounded-full bg-green-200 opacity-80 animate-bounce"></div>
      <Leaf className="absolute inset-0 m-auto h-16 w-16 text-green-600 animate-pulse" />
    </div>
  );
}

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50 font-sans">
      <HeaderBox />
      <div className="text-center mb-20">
        <div className="ml-36">
          <AnimatedGlobe />
          <h1 className="text-6xl font-bold mb-6 text-gray-800 tracking-tight">
            Revolutionize <br /><span className="text-green-600">Waste Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            With Eco-Dex and RAG-ED, experience a smarter, greener approach to waste collection!
          </p>
        </div>
        <div className="ml-40 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 max-w-4xl mx-auto">
          <FeatureCard
            icon={Leaf}
            title="Eco-Friendly"
            description="Contribute to a cleaner environment by reporting and collecting waste."
          />
          <FeatureCard
            icon={Coins}
            title="Earn Rewards"
            description="Get tokens for your contributions to waste management efforts."
          />
          <FeatureCard
            icon={Users}
            title="Community-Driven"
            description="Be part of a growing community committed to sustainable practices."
          />
        </div>
        <section className="ml-40 bg-white p-10 rounded-3xl shadow-lg mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Impact</h2>
          <Status1 />
        </section>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center text-center">
      <div className="bg-green-100 p-4 rounded-full mb-6">
        <Icon className="h-10 w-10 text-green-600 transform translate-x-1" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800 transform translate-x-1">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Page;