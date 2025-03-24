import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  BarChart,
  Plus,
  CheckCircle,
  Clock,
  FileText,
  Settings,
  TrendingUp,
  Share2,
  Filter,
  Search,
  PieChart,
  DollarSign,
  UserPlus,
  Target,
  MessageSquare,
  Download
} from 'lucide-react';
import CreateEventModal from './CreateEventModal';

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);

  // Sample data - In a real app, this would come from an API
  const metrics = {
    totalEvents: 12,
    activeEvents: 3,
    completedEvents: 9,
    totalParticipants: 2500,
    totalRevenue: 45000,
    taskCompletion: 75,
  };

  const budgetData = {
    totalBudget: 60000,
    spent: 45000,
    remaining: 15000,
    categories: [
      { name: 'Venue', amount: 15000, percentage: 33 },
      { name: 'Marketing', amount: 10000, percentage: 22 },
      { name: 'Staff', amount: 8000, percentage: 18 },
      { name: 'Equipment', amount: 7000, percentage: 15 },
      { name: 'Other', amount: 5000, percentage: 12 },
    ],
  };

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Event Coordinator',
      email: 'john@example.com',
      status: 'active',
      tasks: 5,
      completed: 3,
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Marketing Lead',
      email: 'jane@example.com',
      status: 'active',
      tasks: 4,
      completed: 2,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Technical Lead',
      email: 'mike@example.com',
      status: 'active',
      tasks: 3,
      completed: 1,
    },
  ];

  const eventAnalytics = {
    registrationTrend: [
      { date: 'Mar 1', count: 100 },
      { date: 'Mar 2', count: 150 },
      { date: 'Mar 3', count: 200 },
      { date: 'Mar 4', count: 250 },
      { date: 'Mar 5', count: 300 },
    ],
    participantDemographics: {
      students: 60,
      professionals: 25,
      others: 15,
    },
    engagementMetrics: {
      averageSessionTime: '45 mins',
      interactionRate: '78%',
      satisfactionScore: 4.5,
    },
  };

  const recentEvents = [
    {
      id: 1,
      name: 'TechFest 2024',
      date: 'March 15-17, 2024',
      status: 'active',
      participants: 1200,
      revenue: 25000,
    },
    {
      id: 2,
      name: 'Cultural Festival',
      date: 'April 5-7, 2024',
      status: 'upcoming',
      participants: 800,
      revenue: 15000,
    },
    {
      id: 3,
      name: 'Sports Meet',
      date: 'May 1-3, 2024',
      status: 'upcoming',
      participants: 500,
      revenue: 5000,
    },
  ];

  const tasks = [
    {
      id: 1,
      title: 'Review event schedule',
      priority: 'high',
      status: 'pending',
      dueDate: '2024-03-10',
      assignee: 'John Doe',
    },
    {
      id: 2,
      title: 'Approve marketing materials',
      priority: 'medium',
      status: 'in-progress',
      dueDate: '2024-03-12',
      assignee: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Contact keynote speakers',
      priority: 'high',
      status: 'completed',
      dueDate: '2024-03-08',
      assignee: 'Mike Johnson',
    },
  ];

  const handleCreateEvent = () => {
    setIsCreateEventModalOpen(true);
  };

  const handleEventSubmit = (eventData: any) => {
    console.log('New event data:', eventData);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Organizer Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100">
            <Download className="w-5 h-5 mr-2" />
            Export Report
          </button>
          <button
            onClick={handleCreateEvent}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Event
          </button>
        </div>
      </div>

      {/* Create Event Modal */}
      <CreateEventModal
        isOpen={isCreateEventModalOpen}
        onClose={() => setIsCreateEventModalOpen(false)}
        onSubmit={handleEventSubmit}
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Events</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.totalEvents}</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Events</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.activeEvents}</h3>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Participants</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.totalParticipants}</h3>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">${metrics.totalRevenue}</h3>
            </div>
            <div className="p-3 bg-yellow-50 rounded-full">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Events */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Events</h2>
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
            {recentEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{event.name}</h3>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-sm text-gray-500">Participants</p>
                    <p className="font-medium text-gray-900">{event.participants}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="font-medium text-gray-900">${event.revenue}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Budget */}
        <div className="space-y-6">
          {/* Team Members */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
              <button className="text-blue-600 hover:text-blue-700">
                <UserPlus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Tasks</p>
                      <p className="font-medium text-gray-900">
                        {member.completed}/{member.tasks}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        member.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {member.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Budget</p>
                  <h3 className="text-2xl font-bold text-gray-900">${budgetData.totalBudget}</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Remaining</p>
                  <h3 className="text-2xl font-bold text-green-600">${budgetData.remaining}</h3>
                </div>
              </div>
              <div className="space-y-2">
                {budgetData.categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-gray-600">{category.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-900">${category.amount}</span>
                      <span className="text-sm text-gray-500">{category.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Registration Trend */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Registration Trend</h2>
          <div className="h-64 flex items-end justify-between space-x-2">
            {eventAnalytics.registrationTrend.map((data) => (
              <div key={data.date} className="flex-1">
                <div
                  className="bg-blue-600 rounded-t"
                  style={{ height: `${(data.count / 300) * 100}%` }}
                ></div>
                <p className="text-xs text-gray-500 mt-1">{data.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Engagement Metrics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average Session Time</span>
              <span className="font-medium text-gray-900">{eventAnalytics.engagementMetrics.averageSessionTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Interaction Rate</span>
              <span className="font-medium text-gray-900">{eventAnalytics.engagementMetrics.interactionRate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Satisfaction Score</span>
              <span className="font-medium text-gray-900">{eventAnalytics.engagementMetrics.satisfactionScore}/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard; 