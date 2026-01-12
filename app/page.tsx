'use client'

import { TrendingUp, Users, FileText, DollarSign, ArrowUp, ArrowDown } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Mock data
const stats = [
  {
    name: 'Total Startups',
    value: '124',
    change: '+12%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Offers Generated',
    value: '387',
    change: '+23%',
    trend: 'up',
    icon: FileText,
  },
  {
    name: 'Avg Conversion Rate',
    value: '18.4%',
    change: '+5.2%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    name: 'Revenue Impact',
    value: '$2.4M',
    change: '+18%',
    trend: 'up',
    icon: DollarSign,
  },
]

const offerPerformanceData = [
  { month: 'Jan', offers: 45, conversions: 8 },
  { month: 'Feb', offers: 52, conversions: 10 },
  { month: 'Mar', offers: 61, conversions: 12 },
  { month: 'Apr', offers: 68, conversions: 13 },
  { month: 'May', offers: 74, conversions: 14 },
  { month: 'Jun', offers: 87, conversions: 16 },
]

const conversionData = [
  { name: 'Week 1', rate: 12 },
  { name: 'Week 2', rate: 15 },
  { name: 'Week 3', rate: 18 },
  { name: 'Week 4', rate: 16 },
]

const recentOffers = [
  {
    id: '1',
    startup: 'CloudSync Pro',
    offer: 'Founder Pricing - Save $6,000/Year',
    status: 'active',
    conversion: '12%',
    created: '2 hours ago',
  },
  {
    id: '2',
    startup: 'DataFlow AI',
    offer: '60-Day Free Trial + Migration',
    status: 'testing',
    conversion: '18%',
    created: '5 hours ago',
  },
  {
    id: '3',
    startup: 'SecureVault',
    offer: 'Early Adopter Benefits',
    status: 'active',
    conversion: '15%',
    created: '1 day ago',
  },
]

export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to Horizon AI - F20 System</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          const isPositive = stat.trend === 'up'

          return (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.name}</p>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Offer Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Offer Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={offerPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="offers" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Offers Generated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Conversions</span>
            </div>
          </div>
        </div>

        {/* Conversion Rate Trend */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Rate Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rate" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Offers */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Offers</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Startup
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Offer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOffers.map((offer) => (
                <tr key={offer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{offer.startup}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{offer.offer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      offer.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {offer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{offer.conversion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {offer.created}
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
