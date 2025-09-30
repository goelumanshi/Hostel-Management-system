// Sample data for the application
const sampleData = {
    attendance: [
        { date: '2023-10-01', present: 85, absent: 15 },
        { date: '2023-10-02', present: 92, absent: 8 },
        { date: '2023-10-03', present: 78, absent: 22 },
        { date: '2023-10-04', present: 95, absent: 5 },
        { date: '2023-10-05', present: 88, absent: 12 }
    ],
    cleaningStatus: [
        { room: 'A-101', date: '2023-10-05', status: 'Cleaned', staff: 'Ramesh' },
        { room: 'A-102', date: '2023-10-05', status: 'Pending', staff: '' },
        { room: 'B-205', date: '2023-10-05', status: 'Cleaned', staff: 'Suresh' },
        { room: 'C-302', date: '2023-10-05', status: 'Cleaned', staff: 'Ramesh' },
        { room: 'D-401', date: '2023-10-05', status: 'Pending', staff: '' }
    ],
    messMenu: {
        monday: { breakfast: 'Poha, Tea', lunch: 'Rice, Dal, Sabzi, Roti', dinner: 'Rice, Chicken Curry, Roti' },
        tuesday: { breakfast: 'Sandwich, Milk', lunch: 'Rice, Rajma, Sabzi, Roti', dinner: 'Rice, Egg Curry, Roti' },
        wednesday: { breakfast: 'Idli, Sambar', lunch: 'Rice, Chole, Sabzi, Roti', dinner: 'Rice, Fish Curry, Roti' },
        thursday: { breakfast: 'Paratha, Curd', lunch: 'Rice, Kadhi, Sabzi, Roti', dinner: 'Rice, Paneer Curry, Roti' },
        friday: { breakfast: 'Cornflakes, Milk', lunch: 'Rice, Dal Fry, Sabzi, Roti', dinner: 'Rice, Mutton Curry, Roti' },
        saturday: { breakfast: 'Utappam, Chutney', lunch: 'Biryani, Raita', dinner: 'Fried Rice, Manchurian' },
        sunday: { breakfast: 'Puri, Halwa', lunch: 'Rice, Sambar, Rasam', dinner: 'Rice, Curd, Pickle' }
    },
    meetings: [
        { id: 1, title: 'Hostel Committee Meeting', date: '2023-10-10', time: '4:00 PM', venue: 'Common Room' },
        { id: 2, title: 'Student Grievance Meeting', date: '2023-10-15', time: '3:00 PM', venue: 'Admin Office' },
        { id: 3, title: 'Cultural Event Planning', date: '2023-10-20', time: '5:00 PM', venue: 'Auditorium' }
    ],
    complaints: [
        { id: 1, type: 'Plumber', room: 'A-101', description: 'Tap leaking in bathroom', status: 'Resolved', date: '2023-10-01' },
        { id: 2, type: 'Electrician', room: 'B-205', description: 'Fan not working', status: 'In Progress', date: '2023-10-03' },
        { id: 3, type: 'Carpenter', room: 'C-302', description: 'Door hinge broken', status: 'Pending', date: '2023-10-04' },
        { id: 4, type: 'Plumber', room: 'D-401', description: 'Flush not working', status: 'Pending', date: '2023-10-05' }
    ],
    students: [
        { id: 1, name: 'Rajesh Kumar', room: 'A-101', phone: '9876543210', course: 'B.Tech CSE' },
        { id: 2, name: 'Priya Sharma', room: 'B-205', phone: '8765432109', course: 'MBA' },
        { id: 3, name: 'Amit Singh', room: 'C-302', phone: '7654321098', course: 'B.Arch' },
        { id: 4, name: 'Sneha Patel', room: 'A-102', phone: '6543210987', course: 'B.Tech ECE' },
       