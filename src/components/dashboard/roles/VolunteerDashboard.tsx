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
  AlertCircle
} from 'lucide-react';

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data - In a real app, this would come from an API
  const metrics = {
    totalTasks: 15,
    completedTasks: 8,
    upcomingEvents: 3,
    hoursVolunteered: 45,
    performanceScore: 92,
    taskCompletion: 75,
  };

  const performanceData = {
    monthlyHours: [
      { month: 'Jan', hours: 20 },
      { month: 'Feb', hours: 25 },
      { month: 'Mar', hours: 30 },
      { month: 'Apr', hours: 35 },
      { month: 'May', hours: 40 },
      { month: 'Jun', hours: 45 },
    ],
    achievements: [
      {
        id: 1,
        title: 'First Event Completed',
        description: 'Successfully assisted in organizing your first event',
        date: '2024-02-15',
        icon: Star,
      },
      {
        id: 2,
        title: '50 Hours Milestone',
        description: 'Reached 50 hours of volunteer service',
        date: '2024-03-01',
        icon: Award,
      },
      {
        id: 3,
        title: 'Perfect Attendance',
        description: 'Attended all assigned events for the month',
        date: '2024-03-15',
        icon: CalendarCheck,
      },
    ],
  };

  const upcomingEvents = [
    {
      id: 1,
      name: 'Tech Conference 2024',
      date: '2024-04-15',
      time: '09:00 AM',
      location: 'Convention Center',
      role: 'Registration Desk',
      status: 'confirmed',
    },
    {
      id: 2,
      name: 'Community Cleanup',
      date: '2024-04-20',
      time: '10:00 AM',
      location: 'City Park',
      role: 'Team Leader',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Youth Workshop',
      date: '2024-04-25',
      time: '02:00 PM',
      location: 'Community Center',
      role: 'Assistant',
      status: 'confirmed',
    },
  ];

  const assignedTasks = [
    {
      id: 1,
      title: 'Prepare Registration Materials',
      event: 'Tech Conference 2024',
      dueDate: '2024-04-10',
      priority: 'high',
      status: 'in_progress',
      progress: 60,
    },
    {
      id: 2,
      title: 'Coordinate Volunteer Team',
      event: 'Community Cleanup',
      dueDate: '2024-04-15',
      priority: 'medium',
      status: 'pending',
      progress: 0,
    },
    {
      id: 3,
      title: 'Review Workshop Materials',
      event: 'Youth Workshop',
      dueDate: '2024-04-20',
      priority: 'low',
      status: 'completed',
      progress: 100,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Volunteer Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100">
            <Download className="w-5 h-5 mr-2" />
            Download Schedule
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Tasks</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.totalTasks}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Completed Tasks</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.completedTasks}</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Upcoming Events</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.upcomingEvents}</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Hours Volunteered</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.hoursVolunteered}</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
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
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{event.name}</h3>
                  <p className="text-sm text-gray-500">
                    {event.date} • {event.time} • {event.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Role: {event.role}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance & Achievements */}
        <div className="space-y-6">
          {/* Performance Score */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Score</h2>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="3"
                    strokeDasharray={`${metrics.performanceScore}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{metrics.performanceScore}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h2>
            <div className="space-y-4">
              {performanceData.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="p-2 bg-blue-100 rounded-full">
                    <achievement.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Assigned Tasks</h2>
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
          {assignedTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-500">
                  Event: {task.event} • Due: {task.dueDate}
                </p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'high'
                      ? 'bg-red-100 text-red-800'
                      : task.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {task.priority}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : task.status === 'in_progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard; 