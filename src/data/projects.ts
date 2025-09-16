import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'fridgewise',
    title: 'FridgeWise',
    description:
      'Track your fridge inventory and get notified before food goes bad',
    longDescription:
      'FridgeWise helps households and meal preppers track food inventory across fridge, freezer, and pantry. It scans barcodes, predicts expiry windows, sends timely notifications, and provides insights to reduce waste and optimize shopping. Built with Expo and React Native, it runs on iOS, Android, and the web.',
    technologies: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
    image: '/images/projects/fridgwise.png',
    features: [
      'Expiry tracking & quick actions',
      'Calendar & reminders',
      'Analytics & achievements',
    ],
    impact:
      'Developed expiry tracking system reducing food waste through real-time reminders',
    githubUrl: 'https://github.com/arjya12/fridgewise',
    featured: true,
  },
  {
    id: 'eir',
    title: 'Eir',
    description:
      'Manage your health, appointments, and reports with AI insights',
    longDescription:
      'A modern, comprehensive healthcare platform that integrates digital prescription management, appointment booking, AI-powered medical report analysis, health tracking, medication management, hospital wait time tracking, and medication interaction checking.',
    technologies: ['Typescript', 'Supabase', 'Google Cloud Platform'],
    image: '/images/projects/eir.png',
    imageFit: 'cover',
    features: [
      'AI-powered report analysis',
      'Digital prescriptions & uploads',
      'Appointment booking system',
    ],
    impact:
      'Built real-time AI analysis to extract key findings from medical reports',
    liveUrl: 'https://terrahack-2025.vercel.app/',
    githubUrl: 'https://github.com/afeef-shaikh/Terrahack-2025',
    featured: false,
  },
];
