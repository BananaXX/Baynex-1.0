importimport TelegramBot from "node-telegram-bot-api";
import { getBalance } from "./deriv_ws";
import { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } from "../config";

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

export function setupTelegramBot() {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "🤖 BAYNEX is online and ready.");
  });

  bot.onText(/\/balance/, async (msg) => {
    const balance = await getBalance();
    bot.sendMessage(msg.chat.id, `💰 Balance: ${balance}`);
  });
}
