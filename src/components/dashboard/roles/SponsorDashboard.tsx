import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  BarChart,
  CheckCircle,
  Clock,
  FileText,
  Settings,
  TrendingUp,
  Share2,
  Filter,
  Search,
  PieChart,
  Target,
  MessageSquare,
  Download,
  Star,
  Award,
  CalendarCheck,
  AlertCircle,
  DollarSign,
  LineChart,
  Building2,
  Handshake,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight
} from 'lucide-react';

const SponsorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data - In a real app, this would come from an API
  const metrics = {
    totalInvestment: 150000,
    activeSponsorships: 8,
    completedEvents: 12,
    roi: 25.5,
    totalReach: 25000,
    engagementRate: 78,
  };

  const investmentData = {
    monthlyInvestments: [
      { month: 'Jan', amount: 25000 },
      { month: 'Feb', amount: 30000 },
      { month: 'Mar', amount: 35000 },
      { month: 'Apr', amount: 40000 },
      { month: 'May', amount: 45000 },
      { month: 'Jun', amount: 50000 },
    ],
    categories: [
      {
        name: 'Technology Events',
        amount: 60000,
        percentage: 40,
        growth: 15,
      },
      {
        name: 'Educational Programs',
        amount: 45000,
        percentage: 30,
        growth: 8,
      },
      {
        name: 'Community Initiatives',
        amount: 30000,
        percentage: 20,
        growth: 12,
      },
      {
        name: 'Sports Events',
        amount: 15000,
        percentage: 10,
        growth: 5,
      },
    ],
  };

  const activeSponsorships = [
    {
      id: 1,
      eventName: 'Tech Conference 2024',
      category: 'Technology',
      investment: 25000,
      startDate: '2024-04-15',
      endDate: '2024-04-17',
      status: 'active',
      reach: 5000,
      engagement: 82,
    },
    {
      id: 2,
      eventName: 'Youth Leadership Summit',
      category: 'Education',
      investment: 15000,
      startDate: '2024-05-01',
      endDate: '2024-05-03',
      status: 'upcoming',
      reach: 3000,
      engagement: 75,
    },
    {
      id: 3,
      eventName: 'Community Cleanup Drive',
      category: 'Community',
      investment: 10000,
      startDate: '2024-04-20',
      endDate: '2024-04-20',
      status: 'active',
      reach: 2000,
      engagement: 85,
    },
  ];

  const sponsorshipOpportunities = [
    {
      id: 1,
      eventName: 'Innovation Hackathon',
      category: 'Technology',
      investment: 20000,
      expectedReach: 4000,
      deadline: '2024-05-15',
      matchScore: 95,
      description: 'Annual hackathon focusing on sustainable technology solutions',
    },
    {
      id: 2,
      eventName: 'STEM Workshop Series',
      category: 'Education',
      investment: 15000,
      expectedReach: 3000,
      deadline: '2024-05-30',
      matchScore: 88,
      description: 'Series of workshops promoting STEM education among youth',
    },
    {
      id: 3,
      eventName: 'Sports Championship',
      category: 'Sports',
      investment: 30000,
      expectedReach: 6000,
      deadline: '2024-06-01',
      matchScore: 75,
      description: 'Regional sports championship with multiple categories',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Sponsor Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100">
            <Download className="w-5 h-5 mr-2" />
            Download Report
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Investment</p>
              <h3 className="text-2xl font-bold text-gray-900">${metrics.totalInvestment}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Sponsorships</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.activeSponsorships}</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Building2 className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">ROI</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.roi}%</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <LineChart className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Reach</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.totalReach}</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Sponsorships */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Active Sponsorships</h2>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-500 rounded-md hover:bg-gray-100">
                <Filter className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 rounded-md hover:bg-gray-100">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {activeSponsorships.map((sponsorship) => (
              <div
                key={sponsorship.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{sponsorship.eventName}</h3>
                  <p className="text-sm text-gray-500">
                    {sponsorship.startDate} - {sponsorship.endDate}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {sponsorship.category}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      ${sponsorship.investment}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-sm text-gray-500">Reach</p>
                    <p className="font-medium text-gray-900">{sponsorship.reach}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Engagement</p>
                    <p className="font-medium text-gray-900">{sponsorship.engagement}%</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      sponsorship.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {sponsorship.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Analytics */}
        <div className="space-y-6">
          {/* Investment Categories */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Investment Categories</h2>
            <div className="space-y-4">
              {investmentData.categories.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.percentage}% of total</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">${category.amount}</p>
                      <div className="flex items-center text-sm">
                        {category.growth > 0 ? (
                          <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                        )}
                        <span
                          className={
                            category.growth > 0 ? 'text-green-500' : 'text-red-500'
                          }
                        >
                          {Math.abs(category.growth)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Opportunities */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">New Opportunities</h2>
            <div className="space-y-4">
              {sponsorshipOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{opportunity.eventName}</h3>
                    <p className="text-sm text-gray-500">{opportunity.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {opportunity.category}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        Match: {opportunity.matchScore}%
                      </span>
                      <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700">
                        Invest
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      ${opportunity.investment}
                    </p>
                    <p className="text-xs text-gray-500">
                      Reach: {opportunity.expectedReach}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Investment Trends */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Investment Trends</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-500 rounded-md hover:bg-gray-100">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 rounded-md hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="h-64 flex items-end justify-between space-x-2">
          {investmentData.monthlyInvestments.map((data) => (
            <div key={data.month} className="flex-1">
              <div
                className="bg-blue-600 rounded-t"
                style={{
                  height: `${(data.amount / 50000) * 100}%`,
                }}
              ></div>
              <p className="text-xs text-gray-500 mt-1">{data.month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorDashboard; 