'use client'

import { Plus, Search, Filter } from 'lucide-react'

const startups = [
  {
    id: '1',
    name: 'CloudSync Pro',
    industry: 'SaaS',
    stage: 'Seed',
    mrr: 25000,
    customers: 15,
    offers: 3,
    lastActive: '2 hours ago',
  },
  {
    id: '2',
    name: 'DataFlow AI',
    industry: 'AI/ML',
    stage: 'Series A',
    mrr: 85000,
    customers: 42,
    offers: 7,
    lastActive: '5 hours ago',
  },
  {
    id: '3',
    name: 'SecureVault',
    industry: 'Cybersecurity',
    stage: 'Seed',
    mrr: 18000,
    customers: 8,
    offers: 2,
    lastActive: '1 day ago',
  },
  {
    id: '4',
    name: 'GrowthMetrics',
    industry: 'Analytics',
    stage: 'MVP',
    mrr: 5000,
    customers: 3,
    offers: 1,
    lastActive: '3 hours ago',
  },
]

const stageColors = {
  'MVP': 'bg-gray-100 text-gray-800',
  'Seed': 'bg-blue-100 text-blue-800',
  'Series A': 'bg-purple-100 text-purple-800',
  'Series B+': 'bg-green-100 text-green-800',
}

export default function StartupsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Startups</h1>
          <p className="text-gray-600 mt-2">Manage startup profiles and track their progress</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Startup
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search startups..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Startups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup) => (
          <div key={startup.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{startup.name}</h3>
                <p className="text-sm text-gray-600">{startup.industry}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                stageColors[startup.stage as keyof typeof stageColors]
              }`}>
                {startup.stage}
              </span>
            </div>

            {/* Metrics */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">MRR</span>
                <span className="text-sm font-semibold text-gray-900">
                  ${startup.mrr.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Customers</span>
                <span className="text-sm font-semibold text-gray-900">{startup.customers}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Active Offers</span>
                <span className="text-sm font-semibold text-gray-900">{startup.offers}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
              <span className="text-xs text-gray-500">Last active {startup.lastActive}</span>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
