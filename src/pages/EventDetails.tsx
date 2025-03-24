import { useParams, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Tag,
  ChevronLeft,
  Share2,
  Download,
  Star,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';
import React from 'react';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log('Event ID:', id); // Add this for debugging

  // In a real app, this would come from an API based on the event ID
  const eventDetails = {
    id: parseInt(id || '1'),
    name: 'Tech Conference 2024',
    date: '2024-04-15',
    time: '09:00 AM - 05:00 PM',
    location: 'Convention Center, 123 Tech Street',
    category: 'Technology',
    description: 'Join us for the biggest tech conference of the year! Network with industry leaders, attend workshops, and learn about the latest technologies.',
    organizer: 'Tech Events Inc.',
    participants: 250,
    maxParticipants: 300,
    price: '$299',
    status: 'confirmed',
    ticketType: 'VIP',
    agenda: [
      '09:00 AM - Registration and Welcome Coffee',
      '10:00 AM - Opening Ceremony',
      '11:00 AM - Keynote Speech',
      '12:30 PM - Lunch Break',
      '02:00 PM - Workshop Sessions',
      '04:00 PM - Panel Discussion',
      '05:00 PM - Networking Reception',
    ],
    speakers: [
      {
        name: 'John Doe',
        role: 'CEO, Tech Corp',
        bio: 'Industry leader with 15+ years of experience',
      },
      {
        name: 'Jane Smith',
        role: 'CTO, Innovation Labs',
        bio: 'Expert in emerging technologies',
      },
    ],
    rating: 4.8,
    reviews: [
      {
        user: 'Alice Johnson',
        rating: 5,
        comment: 'Amazing event! Learned so much about the latest tech trends.',
        date: '2024-03-15',
      },
      {
        user: 'Bob Wilson',
        rating: 4,
        comment: 'Great speakers and networking opportunities.',
        date: '2024-03-10',
      },
    ],
  };

  // Handle back navigation
  const handleBack = () => {
    navigate('/dashboard');
  };

  // Add useEffect to handle component mount
  React.useEffect(() => {
    console.log('EventDetails mounted with ID:', id);
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        Back to Dashboard
      </button>

      {/* Event Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{eventDetails.name}</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {eventDetails.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {eventDetails.time}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {eventDetails.location}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-500 rounded-md hover:bg-gray-100">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 rounded-md hover:bg-gray-100">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {eventDetails.category}
          </span>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
            {eventDetails.ticketType}
          </span>
        </div>
        <p className="text-gray-600">{eventDetails.description}</p>
      </div>

      {/* Event Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Agenda */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Event Agenda</h2>
            <div className="space-y-3">
              {eventDetails.agenda.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full mr-3" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Speakers */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Speakers</h2>
            <div className="space-y-4">
              {eventDetails.speakers.map((speaker, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full" />
                  <div>
                    <h3 className="font-medium text-gray-900">{speaker.name}</h3>
                    <p className="text-sm text-gray-600">{speaker.role}</p>
                    <p className="text-sm text-gray-500 mt-1">{speaker.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Event Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Organizer</span>
                <span className="font-medium">{eventDetails.organizer}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Participants</span>
                <span className="font-medium">
                  {eventDetails.participants}/{eventDetails.maxParticipants}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Price</span>
                <span className="font-medium">{eventDetails.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Status</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {eventDetails.status}
                </span>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Reviews</h2>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < eventDetails.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({eventDetails.rating})</span>
            </div>
            <div className="space-y-4">
              {eventDetails.reviews.map((review, index) => (
                <div key={index} className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{review.user}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails; 