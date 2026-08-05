'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RetatrutidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Retatrutide
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Next-generation GLP-1 and GIP receptor agonist for weight management and metabolic health.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Designed to help you achieve sustainable weight loss and improve your overall health.
            </p>
            <div className="flex gap-4">
              <Link href="#learn-more">
                <button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Learn More
                </button>
              </Link>
              <Link href="/contact">
                <button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p className="text-lg">Retatrutide Illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="learn-more" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Effective Weight Loss',
                description: 'Clinically proven to deliver significant weight reduction results.',
              },
              {
                title: 'Improved Metabolic Health',
                description: 'Helps regulate blood sugar levels and improve insulin sensitivity.',
              },
              {
                title: 'Dual Action Formula',
                description: 'Targets GLP-1 and GIP receptors for comprehensive metabolic support.',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Assessment', desc: 'We evaluate your health goals and medical history.' },
                { step: 2, title: 'Customized Plan', desc: 'Receive a personalized treatment plan tailored to you.' },
                { step: 3, title: 'Administration', desc: 'Simple weekly injections to support your goals.' },
                { step: 4, title: 'Monitoring', desc: 'Regular check-ins to track progress and adjust as needed.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="text-lg">Process Diagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your Retatrutide journey today and take control of your health.
          </p>
          <Link href="/contact">
            <button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
