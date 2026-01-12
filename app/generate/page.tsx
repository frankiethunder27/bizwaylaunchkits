'use client'

import { useState } from 'react'
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react'

export default function GeneratePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [step, setStep] = useState(1)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false)
      // Redirect to offers page or show results
    }, 3000)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Generate F20 Offer</h1>
            <p className="text-gray-600 mt-1">AI-powered offer creation in minutes</p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-3xl">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center flex-1">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step >= stepNum
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white border-gray-300 text-gray-400'
              }`}>
                {stepNum}
              </div>
              {stepNum < 3 && (
                <div className={`flex-1 h-1 mx-4 ${
                  step > stepNum ? 'bg-blue-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between max-w-3xl mt-2">
          <span className="text-sm text-gray-600">Startup Info</span>
          <span className="text-sm text-gray-600">Strategy</span>
          <span className="text-sm text-gray-600">Generate</span>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl">
        <div className="bg-white rounded-lg shadow p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Step 1: Startup Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., CloudSync Pro"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select industry...</option>
                    <option>SaaS</option>
                    <option>AI/ML</option>
                    <option>E-commerce</option>
                    <option>Fintech</option>
                    <option>Healthcare</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stage *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select stage...</option>
                    <option>Idea</option>
                    <option>MVP</option>
                    <option>Seed</option>
                    <option>Series A</option>
                    <option>Series B+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Recurring Revenue (MRR)
                  </label>
                  <input
                    type="number"
                    placeholder="25000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Count
                  </label>
                  <input
                    type="number"
                    placeholder="15"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Acquisition Cost (CAC)
                  </label>
                  <input
                    type="number"
                    placeholder="3000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Description *
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your product or service..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Market *
                </label>
                <input
                  type="text"
                  placeholder="e.g., D2C brands with $1M-10M revenue"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Step 2: Strategy & Goals</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Goal *
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select primary goal...</option>
                  <option>Customer Acquisition</option>
                  <option>Revenue Growth</option>
                  <option>Customer Retention</option>
                  <option>Brand Awareness</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Type Preferences
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span className="text-sm text-gray-700">Discount-based offers</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span className="text-sm text-gray-700">Bundle offers</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="text-sm text-gray-700">Trial extension offers</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span className="text-sm text-gray-700">Limited-time access offers</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Variations
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>3 variations (Recommended)</option>
                  <option>5 variations</option>
                  <option>10 variations</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Constraints or Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., Budget limits, specific features to highlight..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-12">
              <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Ready to Generate!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Our F20 AI will analyze your startup profile and create multiple high-converting offer variations tailored to your goals.
              </p>

              {isGenerating ? (
                <div className="space-y-4">
                  <Loader2 className="w-12 h-12 text-blue-600 mx-auto animate-spin" />
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Analyzing context...</p>
                    <p className="text-sm text-gray-600">Mapping value propositions...</p>
                    <p className="text-sm text-gray-600">Optimizing psychological framing...</p>
                    <p className="text-sm text-gray-600">Generating offer variations...</p>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleGenerate}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Generate F20 Offers
                </button>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          {!isGenerating && (
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {step < 3 ? (
                <button
                  onClick={() => setStep(Math.min(3, step + 1))}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
