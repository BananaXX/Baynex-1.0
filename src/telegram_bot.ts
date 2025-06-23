import TelegramBot from 'node-telegram-bot-api';

export function setupTelegramBot() {
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN || '', { polling: true });
  bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, "Baynex bot is active.");
  });
}
