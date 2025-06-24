// src/telegram_bot.ts
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { connectWebSocket, getBalance } from "./websocket";
dotenv.config();

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
const CHAT_ID = process.env.CHAT_ID!;

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
let ws = connectWebSocket();

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🤖 BAYNEX is online! Use /balance to check.");
});

bot.onText(/\/balance/, (msg) => {
  bot.sendMessage(msg.chat.id, "📡 Fetching balance...");
  getBalance();
});

bot.on("polling_error", (error) => {
  console.error("❌ Telegram Bot Error:", error.message);
});
