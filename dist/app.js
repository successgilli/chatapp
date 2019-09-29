"use strict";

var _express = _interopRequireDefault(require("express"));

var _socket = _interopRequireDefault(require("socket.io"));

var _path = _interopRequireDefault(require("path"));

var _onLineUsers = require("./onLineUsers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../public')));
app.get('*', function (req, res) {
  return res.sendFile(_path["default"].resolve(__dirname, '..', '/public/index.html'));
});
var server = app.listen(3000, function () {
  return console.log('litening on port 3000');
});
var io = (0, _socket["default"])(server);
io.on('connection', function (socket) {
  socket.on('joined', function (data) {
    console.log(data, socket.id);

    _onLineUsers.users.push({
      name: data.name,
      id: socket.id
    });

    console.log(_onLineUsers.users, ' online');
  });
  socket.on('chat', function (data) {
    console.log(_onLineUsers.users.find(function (x) {
      return x.id === socket.id;
    }), ' user chatted');
    console.log(_onLineUsers.users[1].id);
    socket.broadcast.to(_onLineUsers.users[1].id).emit('chat', data); // io.sockets.emit('chat', data);
  });
});