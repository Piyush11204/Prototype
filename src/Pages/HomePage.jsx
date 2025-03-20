import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Download, Lock, MessageSquare, Video, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Secure Messaging for Everyone
              </h1>
              <p className="mt-4 text-lg md:text-xl text-blue-100">
                End-to-end encryption that keeps your conversations private 
                and your data secure.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                >
                  <Download size={20} className="mr-2" />
                  Download Now
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full h-96 bg-blue-700 rounded-lg shadow-lg overflow-hidden flex justify-center items-center">
                  <img 
                    src="/api/placeholder/400/480" 
                    alt="App Preview" 
                    className="w-auto h-full object-cover"
                  />
                </div>
                {/* Floating elements for visual interest */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-lg transform rotate-12"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose SecureMessenger?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our app is designed from the ground up with security and privacy in mind.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock size={24} />,
                  title: "End-to-End Encryption",
                  description: "All messages are encrypted on your device and can only be decrypted by the recipient."
                },
                {
                  icon: <MessageSquare size={24} />,
                  title: "Self-Destructing Messages",
                  description: "Set a timer for your messages to automatically delete after they've been read."
                },
                {
                  icon: <Video size={24} />,
                  title: "Secure Video Calls",
                  description: "Make encrypted video calls with the same security as your text messages."
                },
                {
                  icon: <Shield size={24} />,
                  title: "No Data Storage",
                  description: "We don't store your messages on our servers, protecting your privacy."
                },
                {
                  icon: <Users size={24} />,
                  title: "Group Messaging",
                  description: "Create secure group chats with the same level of encryption as private chats."
                },
                {
                  icon: <Download size={24} />,
                  title: "Available Everywhere",
                  description: "Available on Android, iOS, Windows, Mac, and Linux platforms."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 h-12 w-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-white">
                  Ready to secure your conversations?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Download SecureMessenger today and take control of your privacy.
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col md:flex-row md:ml-8">
                <Link
                  to="/download"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-base flex items-center justify-center"
                >
                  <Download size={20} className="mr-2" />
                  Download Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;