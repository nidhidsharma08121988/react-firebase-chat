const rooms = {
  rr1: {
    title: 'Wedding Dhamaka',
    creatorEmail: 'nidhi@yahoo.com',
    participants: ['namrata@yahoo.com', 'puja@yahoo.com', 'nidhi@yahoo.com'],
  },
  rr2: {
    title: 'DDS Family',
    creatorEmail: 'nidhi@yahoo.com',
    participants: [
      'dd@yahoo.com',
      'meeta@yahoo.com',
      'puja@yahoo.com',
      'nidhi@yahoo.com',
    ],
  },
  rr3: {
    title: 'BFF',
    creatorEmail: 'nidhi@yahoo.com',
    participants: ['nidhi@yahoo.com', 'manisha@yahoo.com', 'dhwani@yahoo.com'],
  },
}
export function getUserRoomsFromDatabase() {
  return rooms
}
