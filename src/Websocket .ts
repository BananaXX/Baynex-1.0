// websocket.ts

import WebSocket from "ws";
import dotenv from "dotenv";

dotenv.config();

const DERIV_TOKEN = process.env.DERIV_TOKEN!;
let ws: WebSocket;

export function connectWebSocket(): WebSocket {
  ws = new WebSocket("wss://ws.deriv.com/websockets/v3?app_id=71673");

  ws.on("open", () => {
    console.log("✅ Connected to Deriv WebSocket");
    authorize();
  });

  ws.on("message", (data) => {
    const msg = JSON.parse(data.toString());
    if (msg.msg_type === "authorize") {
      console.log("🛂 Authorized");
    }
    if (msg.msg_type === "balance") {
      console.log("💰 Balance:", msg.balance?.balance);
    }
  });

  ws.on("error", (err) => {
    console.error("❌ WebSocket error", err.message);
  });

  ws.on("close", () => {
    console.log("🔁 Connection closed. Reconnecting...");
    setTimeout(() => connectWebSocket(), 3000);
  });

  return ws;
}

function authorize() {
  ws.send(
    JSON.stringify({
      authorize: DERIV_TOKEN,
    })
  );
}

export function getBalance() {
  ws.send(
    JSON.stringify({
      balance: 1,
      subscribe: 1,
      req_id: 2,
    })
  );
}

export function buyMockContract() {
  // You can replace this with actual proposal/buy logic
  console.log("📈 Simulating buy contract...");
}
