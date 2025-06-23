import WebSocket from 'ws';
import dotenv from 'dotenv';
dotenv.config();

const app_id = process.env.DERIV_APP_ID!;
const token = process.env.DERIV_TOKEN!;
const ws = new WebSocket(`wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`);

export const startDerivStream = () => {
  ws.onopen = () => {
    console.log('Connected to Deriv WebSocket ✅');
    ws.send(JSON.stringify({ authorize: token }));
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data.toString());
    console.log('📩 Deriv Data:', data);

    if (data.msg_type === 'authorize') {
      ws.send(JSON.stringify({ balance: 1, subscribe: 1 }));
    }

    if (data.msg_type === 'balance') {
      console.log(`💰 Balance: ${data.balance.balance}`);
    }
  };

  ws.onerror = (err) => {
    console.error('❌ Deriv WebSocket Error:', err);
  };
};
