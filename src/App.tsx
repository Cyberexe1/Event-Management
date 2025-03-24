import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Award, Users, Sparkles } from 'lucide-react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import EventCard from './components/EventCard';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import EventDetails from './pages/EventDetails';
import { useAuth } from './contexts/AuthContext';

function Home() {
  const events = [
    {
      title: "TechFest 2024",
      date: "March 15-17, 2024",
      location: "Main Campus Arena",
      participants: "2000+ Participants",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Cultural Festival",
      date: "April 5-7, 2024",
      location: "College Amphitheater",
      participants: "1500+ Participants",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Sports Meet",
      date: "May 1-3, 2024",
      location: "Sports Complex",
      participants: "1000+ Athletes",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Event Planning
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your college events with intelligent automation
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 flex items-center mx-auto">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-blue-700 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-blue-100">Events Managed</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">50,000+</h3>
                <p className="text-blue-100">Participants</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">98%</h3>
                <p className="text-blue-100">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Discover and participate in exciting college events
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.title} {...event} delay={index * 0.2} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-600">
                Powered by AI to make event planning effortless
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Sparkles className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI-Powered Planning
              </h3>
              <p className="text-gray-600">
                Smart task allocation and automated scheduling for efficient event management
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Real-time communication and task tracking for seamless coordination
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Award className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Analytics & Insights
              </h3>
              <p className="text-gray-600">
                Comprehensive analytics and feedback system for continuous improvement
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const { user } = useAuth();
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {!isDashboardPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/event/:id" 
          element={user ? <EventDetails /> : <Navigate to="/login" />} 
        />
      </Routes>
      {!isDashboardPage && <Footer />}
    </div>
  );
}

export default App;