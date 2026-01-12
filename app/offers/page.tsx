'use client'

import { Eye, MousePointer, TrendingUp, Filter, Search } from 'lucide-react'

const offers = [
  {
    id: '1',
    startup: 'CloudSync Pro',
    headline: 'Lock in Founder Pricing: Save $6,000/Year',
    type: 'Value Stack',
    status: 'active',
    views: 1247,
    clicks: 156,
    conversions: 19,
    ctr: 12.5,
    conversionRate: 12.2,
    revenue: 113400,
    created: '2024-12-20',
  },
  {
    id: '2',
    startup: 'DataFlow AI',
    headline: 'Try Free for 60 Days + Free Migration',
    type: 'Risk Reversal',
    status: 'active',
    views: 2891,
    clicks: 521,
    conversions: 94,
    ctr: 18.0,
    conversionRate: 18.0,
    revenue: 235000,
    created: '2024-12-19',
  },
  {
    id: '3',
    startup: 'SecureVault',
    headline: 'Join 500+ Companies - Early Adopter Benefits',
    type: 'Social Proof',
    status: 'testing',
    views: 876,
    clicks: 131,
    conversions: 20,
    ctr: 15.0,
    conversionRate: 15.3,
    revenue: 89600,
    created: '2024-12-18',
  },
  {
    id: '4',
    startup: 'GrowthMetrics',
    headline: '3 Months Free for First 50 Startups',
    type: 'Scarcity',
    status: 'paused',
    views: 543,
    clicks: 65,
    conversions: 8,
    ctr: 12.0,
    conversionRate: 12.3,
    revenue: 24000,
    created: '2024-12-17',
  },
]

const statusColors = {
  active: 'bg-green-100 text-green-800',
  testing: 'bg-yellow-100 text-yellow-800',
  paused: 'bg-gray-100 text-gray-800',
  archived: 'bg-red-100 text-red-800',
}

export default function OffersPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Offers</h1>
        <p className="text-gray-600 mt-2">View and manage all generated F20 offers</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Total Views</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">5,557</p>
          <p className="text-xs text-green-600 mt-1">+12% vs last week</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-2">
            <MousePointer className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-gray-600">Total Clicks</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">873</p>
          <p className="text-xs text-green-600 mt-1">+18% vs last week</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Conversions</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">141</p>
          <p className="text-xs text-green-600 mt-1">+23% vs last week</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-600">Avg CVR</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">16.2%</p>
          <p className="text-xs text-green-600 mt-1">+5.2% vs last week</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search offers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Offers Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Offer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CTR
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CVR
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {offers.map((offer) => (
                <tr key={offer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{offer.headline}</div>
                      <div className="text-xs text-gray-500">{offer.startup}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{offer.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      statusColors[offer.status as keyof typeof statusColors]
                    }`}>
                      {offer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{offer.views.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{offer.ctr.toFixed(1)}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-green-600">{offer.conversionRate.toFixed(1)}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">
                      ${offer.revenue.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
