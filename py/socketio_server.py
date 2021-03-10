import eventlet
import socketio

sio = socketio.Server(cors_allowed_origins="*")
app = socketio.WSGIApp(
    sio, static_files={"/": {"content_type": "text/html", "filename": "index.html"}}
)


@sio.event
def connect(sid, environ):
    print("connect ", sid)


@sio.event
def message(sid, data):
    print("message ", sid, data)
    sio.emit("response", "received message >> %s" % data, room=sid)


@sio.event
def disconnect(sid):
    print("disconnect ", sid)


if __name__ == "__main__":
    eventlet.wsgi.server(eventlet.listen(("", 5000)), app)
