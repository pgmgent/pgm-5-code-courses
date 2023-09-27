const fs = require('fs');
const moment = require('moment');

const year = 2023; // Change to the desired year
const month = 9; // Change to the desired month (1 for January, 2 for February, etc.)

const startDate = moment(`${year}-${month}-01`, 'YYYY-MM-DD');
const endDate = moment(startDate).endOf('month');

// Define the shuffleArray function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const timeSlots = [
  {
    id: 'slot1',
    time: '09:00 AM - 10:00 AM',
  },
  {
    id: 'slot2',
    time: '10:00 AM - 11:00 AM',
  },
  {
    id: 'slot3',
    time: '11:00 AM - 12:00 PM',
  },
  {
    id: 'slot4',
    time: '02:00 PM - 03:00 PM',
  },
  {
    id: 'slot5',
    time: '03:00 PM - 04:00 PM',
  },
];

const generatedTimeSlots = [];

while (startDate.isSameOrBefore(endDate)) {
  // Shuffle the time slots array to randomize order
  const shuffledTimeSlots = shuffleArray(timeSlots);

  // Generate time slots for each day
  const date = startDate.format('YYYY-MM-DD');
  const dayTimeSlots = shuffledTimeSlots.map((slot, index) => ({
    ...slot,
    id: `slot${index + 1}`,
  }));

  generatedTimeSlots.push({
    date,
    availableTimeSlots: dayTimeSlots,
  });
  console.log(`Generated time slots for ${date}`);

  // Move to the next day
  startDate.add(1, 'day');
}

console.log('Writing to file');

// Ensure the directory exists
if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}

// Save the generated time slots to a JSON file
fs.writeFileSync('./public/timeSlots.json', JSON.stringify(generatedTimeSlots, null, 2));

console.log('File saved successfully');
