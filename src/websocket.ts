// src/websocket.ts
let ws: WebSocket;

export function connectWebSocket(): WebSocket {
  ws = new WebSocket("wss://ws.deriv.com/websockets/v3?app_id=71673");

  ws.onopen = () => {
    console.log("✅ Connected to Deriv WebSocket");
    authorize();
  };

  ws.onerror = (error) => {
    console.error("❌ WebSocket error:", error);
  };

  ws.onclose = () => {
    console.log("🔁 Reconnecting WebSocket in 3s...");
    setTimeout(connectWebSocket, 3000);
  };

  return ws;
}

function authorize() {
  ws.send(
    JSON.stringify({
      authorize: import.meta.env.VITE_DERIV_TOKEN,
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
