// Sample data for Indian districts with survey information
export const sampleMapData = {
  districts: [
    {
      id: 'GJ-AHM',
      name: 'Ahmadabad',
      nameHi: 'अहमदाबाद',
      state: 'Gujarat',
      coordinates: [23.0225, 72.5714] as [number, number],
      surveys: { active: 12, completed: 8, total: 20 },
      agents: { online: 45, offline: 5, total: 50 },
      responses: { validated: 2340, pending: 360, total: 2700 },
      accuracy: 94.7,
      lastUpdate: '2 hours ago',
      status: 'excellent' as const
    },
    {
      id: 'GJ-SUR',
      name: 'Surat',
      nameHi: 'सूरत',
      state: 'Gujarat',
      coordinates: [21.1702, 72.8311] as [number, number],
      surveys: { active: 8, completed: 12, total: 20 },
      agents: { online: 38, offline: 2, total: 40 },
      responses: { validated: 1840, pending: 160, total: 2000 },
      accuracy: 96.2,
      lastUpdate: '1 hour ago',
      status: 'excellent' as const
    },
    {
      id: 'GJ-VAD',
      name: 'Vadodara',
      nameHi: 'वडोदरा',
      state: 'Gujarat',
      coordinates: [22.3072, 73.1812] as [number, number],
      surveys: { active: 15, completed: 5, total: 20 },
      agents: { online: 32, offline: 8, total: 40 },
      responses: { validated: 1560, pending: 440, total: 2000 },
      accuracy: 87.3,
      lastUpdate: '3 hours ago',
      status: 'good' as const
    },
    {
      id: 'GJ-RAJ',
      name: 'Rajkot',
      nameHi: 'राजकोट',
      state: 'Gujarat',
      coordinates: [22.3039, 70.8022] as [number, number],
      surveys: { active: 10, completed: 3, total: 20 },
      agents: { online: 25, offline: 15, total: 40 },
      responses: { validated: 1300, pending: 700, total: 2000 },
      accuracy: 78.5,
      lastUpdate: '5 hours ago',
      status: 'warning' as const
    },
    {
      id: 'MH-MUM',
      name: 'Mumbai',
      nameHi: 'मुंबई',
      state: 'Maharashtra',
      coordinates: [19.0760, 72.8777] as [number, number],
      surveys: { active: 25, completed: 15, total: 40 },
      agents: { online: 85, offline: 15, total: 100 },
      responses: { validated: 4200, pending: 800, total: 5000 },
      accuracy: 92.1,
      lastUpdate: '1 hour ago',
      status: 'good' as const
    },
    {
      id: 'MH-PUN',
      name: 'Pune',
      nameHi: 'पुणे',
      state: 'Maharashtra',
      coordinates: [18.5204, 73.8567] as [number, number],
      surveys: { active: 18, completed: 12, total: 30 },
      agents: { online: 55, offline: 5, total: 60 },
      responses: { validated: 2800, pending: 200, total: 3000 },
      accuracy: 95.8,
      lastUpdate: '30 mins ago',
      status: 'excellent' as const
    },
    {
      id: 'KA-BLR',
      name: 'Bangalore',
      nameHi: 'बेंगलुरु',
      state: 'Karnataka',
      coordinates: [12.9716, 77.5946] as [number, number],
      surveys: { active: 22, completed: 18, total: 40 },
      agents: { online: 75, offline: 5, total: 80 },
      responses: { validated: 3600, pending: 400, total: 4000 },
      accuracy: 93.4,
      lastUpdate: '45 mins ago',
      status: 'excellent' as const
    },
    {
      id: 'TN-CHE',
      name: 'Chennai',
      nameHi: 'चेन्नई',
      state: 'Tamil Nadu',
      coordinates: [13.0827, 80.2707] as [number, number],
      surveys: { active: 20, completed: 10, total: 30 },
      agents: { online: 60, offline: 10, total: 70 },
      responses: { validated: 2700, pending: 300, total: 3000 },
      accuracy: 89.7,
      lastUpdate: '2 hours ago',
      status: 'good' as const
    },
    {
      id: 'WB-KOL',
      name: 'Kolkata',
      nameHi: 'कोलकाता',
      state: 'West Bengal',
      coordinates: [22.5726, 88.3639] as [number, number],
      surveys: { active: 16, completed: 8, total: 24 },
      agents: { online: 45, offline: 15, total: 60 },
      responses: { validated: 2100, pending: 900, total: 3000 },
      accuracy: 82.1,
      lastUpdate: '4 hours ago',
      status: 'warning' as const
    },
    {
      id: 'DL-DEL',
      name: 'New Delhi',
      nameHi: 'नई दिल्ली',
      state: 'Delhi',
      coordinates: [28.6139, 77.2090] as [number, number],
      surveys: { active: 30, completed: 20, total: 50 },
      agents: { online: 95, offline: 5, total: 100 },
      responses: { validated: 4500, pending: 500, total: 5000 },
      accuracy: 96.8,
      lastUpdate: '15 mins ago',
      status: 'excellent' as const
    },
    {
      id: 'RJ-JAI',
      name: 'Jaipur',
      nameHi: 'जयपुर',
      state: 'Rajasthan',
      coordinates: [26.9124, 75.7873] as [number, number],
      surveys: { active: 14, completed: 6, total: 20 },
      agents: { online: 35, offline: 15, total: 50 },
      responses: { validated: 1800, pending: 700, total: 2500 },
      accuracy: 75.2,
      lastUpdate: '6 hours ago',
      status: 'critical' as const
    },
    {
      id: 'UP-LKN',
      name: 'Lucknow',
      nameHi: 'लखनऊ',
      state: 'Uttar Pradesh',
      coordinates: [26.8467, 80.9462] as [number, number],
      surveys: { active: 28, completed: 12, total: 40 },
      agents: { online: 70, offline: 20, total: 90 },
      responses: { validated: 3200, pending: 800, total: 4000 },
      accuracy: 88.9,
      lastUpdate: '3 hours ago',
      status: 'good' as const
    }
  ],
  connections: [
    { from: [23.0225, 72.5714], to: [21.1702, 72.8311], strength: 0.8 }, // Ahmadabad to Surat
    { from: [19.0760, 72.8777], to: [18.5204, 73.8567], strength: 0.9 }, // Mumbai to Pune
    { from: [28.6139, 77.2090], to: [26.8467, 80.9462], strength: 0.7 }, // Delhi to Lucknow
    { from: [12.9716, 77.5946], to: [13.0827, 80.2707], strength: 0.6 }, // Bangalore to Chennai
    { from: [22.5726, 88.3639], to: [28.6139, 77.2090], strength: 0.5 }, // Kolkata to Delhi
    { from: [26.9124, 75.7873], to: [28.6139, 77.2090], strength: 0.4 }, // Jaipur to Delhi
  ]
};