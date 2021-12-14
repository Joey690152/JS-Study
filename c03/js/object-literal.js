const hotel = {
  name: 'Quay',
  rooms: 40,
  booked: 25,
  checkAvailability: function () {
    return this.rooms - this.booked;
  }
};

const elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

const elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();