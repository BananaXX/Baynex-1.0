import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.TELEGRAM_TOKEN!;
const chatId = process.env.TELEGRAM_CHAT_ID!;
const bot = new TelegramBot(token, { polling: true });

export const setupTelegramBot = () => {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, '🤖 BAYNEX is online and ready.');
  });

  bot.onText(/\/ping/, (msg) => {
    bot.sendMessage(msg.chat.id, '🏓 Pong!');
  });

  bot.onText(/\/status/, (msg) => {
    bot.sendMessage(msg.chat.id, '✅ BAYNEX system operational.');
  });

  console.log('Telegram bot is running...');
};
