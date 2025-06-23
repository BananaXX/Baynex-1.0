import WebSocket from 'ws';

const ws = new WebSocket('wss://ws.derivws.com/websockets/v3');

ws.on('open', () => {
  console.log('Connected to Deriv WebSocket');
});

ws.on('message', (data: WebSocket.RawData) => {
  console.log('Received:', data.toString());
});
