export type UserRole = 'organizer' | 'volunteer' | 'participant' | 'sponsor';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export const DEFAULT_USERS = {
  organizer: {
    email: 'organizer@eventai.com',
    password: 'organizer123',
    name: 'Event Manager',
    role: 'organizer' as UserRole,
  },
  volunteer: {
    email: 'volunteer@eventai.com',
    password: 'volunteer123',
    name: 'Team Member',
    role: 'volunteer' as UserRole,
  },
  participant: {
    email: 'participant@eventai.com',
    password: 'participant123',
    name: 'Event Attendee',
    role: 'participant' as UserRole,
  },
  sponsor: {
    email: 'sponsor@eventai.com',
    password: 'sponsor123',
    name: 'Business Partner',
    role: 'sponsor' as UserRole,
  },
}; 