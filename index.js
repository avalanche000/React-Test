var chat = require('./chat.js');
var socketio = require('socket.io');
var cors = require('cors');
var app = express();
app.use(cors()); // add this line

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
var io = socketio(server,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
chat(io);
