from flask_socketio import SocketIO

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on("message")
def handle_message(msg):
    print(f"Message received: {msg}")
    socketio.send(msg, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)

