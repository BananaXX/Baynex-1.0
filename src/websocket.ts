import WebSocket from "ws";
import dotenv from "dotenv";
dotenv.config();

const DERIV_TOKEN = import.meta.env.VITE_DERIV_TOKEN;
let ws: WebSocket;

export function connectWebSocket(): WebSocket {
  ws = new WebSocket("wss://ws.deriv.com/websockets/v3?app_id=71673");
  ws.on("open", authorize);
  ws.on("close", () => setTimeout(connectWebSocket, 3000));
  ws.on("error", console.error);
  return ws;
}

function authorize() {
  ws.send(JSON.stringify({ authorize: DERIV_TOKEN }));
}

export function getBalance() {
  ws.send(JSON.stringify({ balance: 1, subscribe: 1, req_id: 2 }));
}
