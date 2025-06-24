import TelegramBot from "node-telegram-bot-api";
import { connectWebSocket, getBalance } from "./websocket";
import dotenv from "dotenv";
dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN!, { polling: true });
let ws = connectWebSocket();

bot.onText(/\/balance/, () => {
  getBalance();
  bot.sendMessage(process.env.CHAT_ID!, "🤖 Fetching balance... check dashboard.");
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "BAYNEX Bot is live!");
});
