export function getRoomsAndIds() {
  const rooms = {
    rr1: {
      title: 'Wedding Dhamaka',
      admins: ['namrata@yahoo.com'],
      participants: ['namrata@yahoo.com', 'puja@yahoo.com', 'nidhi@yahoo.com'],
    },
    rr2: {
      title: 'DDS Family',
      admins: ['dd@yahoo.com', 'meeta@yahoo.com'],
      participants: [
        'dd@yahoo.com',
        'meeta@yahoo.com',
        'puja@yahoo.com',
        'nidhi@yahoo.com',
        'pankaj@yahoo.com',
        'manish@yahoo.com',
      ],
    },
    rr3: {
      title: 'BFF',
      admins: [
        'nidhi@yahoo.com',
        'manisha@yahoo.com',
        'dhwani@yahoo.com',
        'swaleha@yahoo.com',
      ],
      participants: [
        'nidhi@yahoo.com',
        'manisha@yahoo.com',
        'dhwani@yahoo.com',
        'swaleha@yahoo.com',
      ],
    },
  }
  const roomIds = Object.keys(rooms)
  const getRooms = () =>
    roomIds.map(roomId => ({
      ...rooms[roomId],
      id: roomId,
    }))
  return { roomIds, rooms }
}
