'use client';

import Image from 'next/image';


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
          </div>
          <div className="bg-blue-100 rounded-lg h-80 flex items-center justify-center">
            <Image
              src="/images/RETATRUTIDE_40mg__2_-removebg-preview.png"
              alt="Retatrutide"
              width={300}
              height={300}
              className="object-contain"
            />
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
    </div>
  );
}
