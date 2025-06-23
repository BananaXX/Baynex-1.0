import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN as string, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🤖 BAYNEX bot activated. Use /balance to check balance.");
});

bot.onText(/\/balance/, async (msg) => {
  bot.sendMessage(msg.chat.id, "📊 Fetching balance...");
  // Logic to fetch balance from Deriv will go here
});
