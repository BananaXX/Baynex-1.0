// telegram_bot.ts

import TelegramBot from "node-telegram-bot-api";
import WebSocket from "ws";
import dotenv from "dotenv";

dotenv.config();

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
const CHAT_ID = process.env.CHAT_ID!;
const DERIV_TOKEN = process.env.DERIV_TOKEN!;

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

let ws: WebSocket | null = null;
let isTrading = false;

// Connect to Deriv WebSocket
function connectDeriv() {
  ws = new WebSocket("wss://ws.deriv.com/websockets/v3?app_id=71673");

  ws.on("open", () => {
    console.log("Connected to Deriv WebSocket ✅");
  });

  ws.on("message", (data) => {
    const msg = JSON.parse(data.toString());
    if (msg.msg_type === "balance") {
      const balance = msg.balance?.balance;
      bot.sendMessage(CHAT_ID, `💰 Current Balance: $${balance}`);
    }
  });

  ws.on("error", (err) => {
    console.error("WebSocket error", err);
  });

  ws.on("close", () => {
    console.log("WebSocket closed. Reconnecting...");
    setTimeout(connectDeriv, 3000);
  });
}

connectDeriv();

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🤖 BAYNEX is live! Use /balance or /trade");
});

bot.onText(/\/balance/, () => {
  ws?.send(JSON.stringify({ balance: 1, subscribe: 1, req_id: 1 }));
});

bot.onText(/\/trade/, () => {
  if (!isTrading) {
    bot.sendMessage(CHAT_ID, "🚀 Starting trade...");
    startMockTrade();
  } else {
    bot.sendMessage(CHAT_ID, "⛔ Trade already in progress.");
  }
});

function startMockTrade() {
  isTrading = true;
  // Add actual trade code here (e.g., proposal, buy, monitor profit/loss)
  setTimeout(() => {
    bot.sendMessage(CHAT_ID, "✅ Trade complete! Profit: $2.50");
    isTrading = false;
  }, 10000);
}

