const rooms = {
  rr1: {
    title: 'Wedding Dhamaka',
    participants: ['namrata@yahoo.com', 'puja@yahoo.com', 'nidhi@yahoo.com'],
  },
  rr2: {
    title: 'DDS Family',
    participants: [
      'dd@yahoo.com',
      'meeta@yahoo.com',
      'puja@yahoo.com',
      'nidhi@yahoo.com',
    ],
  },
  rr3: {
    title: 'BFF',
    participants: ['nidhi@yahoo.com', 'manisha@yahoo.com', 'dhwani@yahoo.com'],
  },
}
export function getUserRoomsFromDatabase() {
  return rooms
}
