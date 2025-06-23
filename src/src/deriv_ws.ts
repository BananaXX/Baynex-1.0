import WebSocket from "ws";
import { DERIV_API_TOKEN } from "../config";

let ws: WebSocket;

export function connectToDeriv() {
  ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=71673");

  ws.on("open", () => {
    ws.send(JSON.stringify({ authorize: DERIV_API_TOKEN }));
    console.log("🔌 Connected to Deriv WebSocket");
  });

  ws.on("message", (data) => {
    const msg = JSON.parse(data.toString());
    console.log("📩", msg);
  });
}

export async function getBalance(): Promise<number> {
  return new Promise((resolve) => {
    ws.send(JSON.stringify({ balance: 1 }));
    ws.once("message", (data) => {
      const json = JSON.parse(data.toString());
      resolve(json.balance.balance);
    });
  });
}
