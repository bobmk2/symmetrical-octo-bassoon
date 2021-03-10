# symmetrical-octo-bassoon

- This repository is sandbox for using Socket.IO + React + Recoil + TypeScript + emotion + Blueprintjs + Webpack.

- `Python server <-- (socket.io) --> TypeScript client`

## Setup

```bash
# Install
$ yarn install

# Build
$ yarn build:dev
$ yarn build:prod

# Note: Run watch:dev-server only once before running build:dev for creating static files.
$ yarn watch:dev-server
```

## Python

- `py/socketio_server.py` is Socket.IO server file.
- Default server address is `http://localhost:5000`.
- Note: This socket.io server allows all origins for CORS.

```bash
# My environment (Q. Why using 3.8 ? => A. https://github.com/eventlet/eventlet/issues/670)
$ python --version
Python 3.8.7

$ pip --version
pip 21.0.1

# Run
pip install eventlet socketio
python socketio_server.py
```
