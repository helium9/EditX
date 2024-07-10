const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const { setupWSConnection } = require('y-websocket/bin/utils');

const app = express(cors());
const port = 1234;

// Create an HTTP server
const server = http.createServer(app);

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
    // Setup the WebSocket connection for Yjs
    setupWSConnection(ws, req);
});

// Start the HTTP server
server.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
    console.log(`WebSocket server is running on ws://localhost:${port}`);
});