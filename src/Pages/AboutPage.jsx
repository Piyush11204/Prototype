import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h1>
        <p className="mt-4 text-lg text-gray-500">
          Learn more about our mission to provide secure communication for everyone.
        </p>
      </div>
      
      <div className="mt-10 prose prose-blue prose-lg text-gray-500 mx-auto">
        <p>
          SecureMessenger was founded in 2023 with a simple mission: to make encrypted 
          communication accessible to everyone. In today's digital world, privacy isn't a 
          luxury—it's a necessity.
        </p>
        <p>
          Our team consists of security experts and privacy advocates dedicated to 
          building the most secure messaging platform available while maintaining a 
          user-friendly experience.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Privacy First:</strong> We believe your conversations should remain your own.</li>
          <li><strong>Transparency:</strong> Our encryption protocols are open source and available for review.</li>
          <li><strong>Accessibility:</strong> Security shouldn't be complicated or expensive.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
