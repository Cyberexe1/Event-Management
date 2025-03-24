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
  Gift,
  Medal,
  Ticket,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ParticipantDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data - In a real app, this would come from an API
  const metrics = {
    totalEvents: 8,
    upcomingEvents: 3,
    completedEvents: 5,
    rewardPoints: 1250,
    memberLevel: 'Gold',
    nextLevel: 'Platinum',
    pointsToNextLevel: 750,
  };

  const rewardsData = {
    availableRewards: [
      {
        id: 1,
        title: 'Free Event Ticket',
        description: 'Redeem points for a free ticket to any event',
        points: 500,
        icon: Ticket,
      },
      {
        id: 2,
        title: 'VIP Access',
        description: 'Get VIP access to upcoming events',
        points: 1000,
        icon: Star,
      },
      {
        id: 3,
        title: 'Merchandise',
        description: 'Exchange points for event merchandise',
        points: 750,
        icon: Gift,
      },
    ],
    levelBenefits: [
      {
        level: 'Bronze',
        benefits: ['Basic event access', 'Standard support'],
        points: 0,
      },
      {
        level: 'Silver',
        benefits: ['Priority registration', 'Exclusive content', '10% points bonus'],
        points: 500,
      },
      {
        level: 'Gold',
        benefits: ['VIP access', '15% points bonus', 'Free merchandise'],
        points: 1000,
      },
      {
        level: 'Platinum',
        benefits: ['All Gold benefits', '20% points bonus', 'Exclusive events'],
        points: 2000,
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
      category: 'Technology',
      status: 'confirmed',
      ticketType: 'VIP',
    },
    {
      id: 2,
      name: 'Community Workshop',
      date: '2024-04-20',
      time: '10:00 AM',
      location: 'Community Center',
      category: 'Education',
      status: 'pending',
      ticketType: 'Standard',
    },
    {
      id: 3,
      name: 'Networking Event',
      date: '2024-04-25',
      time: '06:00 PM',
      location: 'Business Hub',
      category: 'Networking',
      status: 'confirmed',
      ticketType: 'Premium',
    },
  ];

  const eventHistory = [
    {
      id: 1,
      name: 'Startup Summit',
      date: '2024-03-15',
      category: 'Business',
      points: 250,
      rating: 4.5,
      feedback: 'Great event with valuable insights!',
    },
    {
      id: 2,
      name: 'Design Workshop',
      date: '2024-03-01',
      category: 'Design',
      points: 150,
      rating: 4.0,
      feedback: 'Learned a lot about UI/UX design.',
    },
    {
      id: 3,
      name: 'Coding Bootcamp',
      date: '2024-02-15',
      category: 'Technology',
      points: 300,
      rating: 5.0,
      feedback: 'Excellent learning experience!',
    },
  ];

  const handleLearnMore = (eventId: number) => {
    console.log('Navigating to event:', eventId);
    navigate(`/dashboard/event/${eventId}`, { replace: true });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Participant Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100">
            <Download className="w-5 h-5 mr-2" />
            Download History
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Events</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.totalEvents}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Reward Points</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.rewardPoints}</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Member Level</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.memberLevel}</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Medal className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Points to Next Level</p>
              <h3 className="text-2xl font-bold text-gray-900">{metrics.pointsToNextLevel}</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Target className="w-6 h-6 text-green-600" />
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
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {event.category}
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {event.ticketType}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {event.status}
                  </span>
                  <button 
                    onClick={() => handleLearnMore(event.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards & Benefits */}
        <div className="space-y-6">
          {/* Available Rewards */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Rewards</h2>
            <div className="space-y-4">
              {rewardsData.availableRewards.map((reward) => (
                <div
                  key={reward.id}
                  className="bg-white rounded-lg shadow-sm p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900">{reward.title}</h3>
                      <p className="text-sm text-gray-500">{reward.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {reward.points} points
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                      Redeem
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Member Benefits */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Member Benefits</h2>
            <div className="space-y-4">
              {rewardsData.levelBenefits.map((level) => (
                <div
                  key={level.level}
                  className={`p-4 rounded-lg ${
                    level.level === metrics.memberLevel
                      ? 'bg-blue-50 border border-blue-200'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{level.level}</h3>
                    {level.points > 0 && (
                      <span className="text-sm text-gray-500">{level.points} pts</span>
                    )}
                  </div>
                  <ul className="space-y-1">
                    {level.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Event History */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Event History</h2>
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
          {eventHistory.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium text-gray-900">{event.name}</h3>
                <p className="text-sm text-gray-500">
                  {event.date} • {event.category}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-600">{event.feedback}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < event.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  +{event.points} pts
                </span>
                <button className="text-blue-600 hover:text-blue-700">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipantDashboard; 