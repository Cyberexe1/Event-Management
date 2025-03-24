import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from './DashboardLayout';
import OrganizerDashboard from './roles/OrganizerDashboard';
import VolunteerDashboard from './roles/VolunteerDashboard';
import ParticipantDashboard from './roles/ParticipantDashboard';
import SponsorDashboard from './roles/SponsorDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'organizer':
        return <OrganizerDashboard />;
      case 'volunteer':
        return <VolunteerDashboard />;
      case 'participant':
        return <ParticipantDashboard />;
      case 'sponsor':
        return <SponsorDashboard />;
      default:
        return <div>Access Denied</div>;
    }
  };

  return (
    <DashboardLayout>
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Dashboard; 