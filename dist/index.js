"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const httpServer = _http.default.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>');
});
httpServer.listen(3000, () => console.log('Listening on *:3000'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJodHRwU2VydmVyIiwiaHR0cCIsImNyZWF0ZVNlcnZlciIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLHVCQUFaOztBQUNBLE1BQU1DLFVBQVUsR0FBR0MsY0FBS0MsWUFBTCxDQUFrQkgsR0FBbEIsQ0FBbkI7O0FBRUFBLEdBQUcsQ0FBQ0ksR0FBSixDQUFRLEdBQVIsRUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN6QkEsRUFBQUEsR0FBRyxDQUFDQyxJQUFKLENBQVMsd0JBQVQ7QUFDRCxDQUZEO0FBSUFOLFVBQVUsQ0FBQ08sTUFBWCxDQUFrQixJQUFsQixFQUF3QixNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixDQUE5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IGh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCc8aDE+SGVsbG8sIHdvcmxkITwvaDE+Jyk7XG59KTtcblxuaHR0cFNlcnZlci5saXN0ZW4oMzAwMCwgKCkgPT4gY29uc29sZS5sb2coJ0xpc3RlbmluZyBvbiAqOjMwMDAnKSk7XG4iXX0=