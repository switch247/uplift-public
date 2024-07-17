const { Server } = require('socket.io');
const http = require('http');

let io;
let activeUsers = [];
module.exports = {
  init: function (server) {
    io = new Server(server, {
      cors: {
        origin: '*',
      },
    });
    console.log('socket initialized');

    // Socket.IO connection
    
    io.on("connection", (socket) => {
      // add new User
      socket.on("new-user-add", (newUserId) => {
        // if user is not added previously
        if (!activeUsers.some((user) => user.userId === newUserId)) {
          activeUsers.push({ userId: newUserId, socketId: socket.id });
          console.log("New User Connected", activeUsers);
        }
        // send all active users to new user
        io.emit("get-users", activeUsers);
      });
    
      socket.on("disconnect", () => {
        // remove user from active users
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
        console.log("User Disconnected", activeUsers);
        // send all active users to all users
        io.emit("get-users", activeUsers);
      });
    
      // send message to a specific user
      socket.on("send-message", (data) => {
        const { receiverId } = data;
        const user = activeUsers.find((user) => user.userId === receiverId);
        console.log("Sending from socket to :", receiverId)
        console.log("Data: ", data)
        if (user) {
          io.to(user.socketId).emit("recieve-message", data);
        }
      });
    });
    
    return io;
  },
  getIO: function () {
    if (!io) {
      console.log('not found');
      throw new Error('Socket.io not initialized!');
    }
    return io;
  },
};


// const { Server } = require('socket.io');
// const http = require('http');

// module.exports = function (server) {
//   const io = new Server(server);

//   // Socket.IO connection
//   io.on('connection', (socket) => {
//     console.log('New client connected');

//     // Emit position_change event to all clients
//     socket.on('position_change', (position) => {
//       io.emit('position_change', position);
//     });

//     socket.on('new_booking', (booking) => {
//       io.emit('new_booking', booking);
//     });

//     // Handle booking update event
//     socket.on('booking_update', (booking) => {
//       io.emit('booking_update', booking);
//     });
//     socket.on('disconnect', () => {
//       console.log('Client disconnected');
//     });
//   });

//   return io;
// };
