import TelegramBot from 'node-telegram-bot-api';
import WebSocket from 'ws';

// ✅ Load environment variables
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
const DERIV_TOKEN = process.env.DERIV_TOKEN!;
const DERIV_APP_ID = process.env.DERIV_APP_ID!;
const CHAT_ID = process.env.CHAT_ID!;

// 🛡 Basic env check
if (!TELEGRAM_TOKEN || !DERIV_TOKEN || !DERIV_APP_ID) {
  console.error("Missing one or more environment variables: TELEGRAM_TOKEN, DERIV_TOKEN, DERIV_APP_ID");
  process.exit(1);
}

// ✅ Initialize Telegram bot
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// ✅ Connect to Deriv WebSocket
const ws = new WebSocket(`wss://ws.binaryws.com/websockets/v3?app_id=${DERIV_APP_ID}`);

ws.on('open', () => {
  console.log('✅ Connected to Deriv WebSocket');

  // 🔐 Authenticate with Deriv token
  ws.send(JSON.stringify({
    authorize: DERIV_TOKEN
  }));
});

ws.on('message', (data) => {
  const response = JSON.parse(data.toString());

  // 📥 Handle balance response
  if (response.msg_type === 'balance') {
    const balance = response.balance?.balance;
    bot.sendMessage(CHAT_ID, `💰 Your current balance is: ${balance} USD`);
  }

  // ✅ Confirm authorization
  if (response.msg_type === 'authorize') {
    console.log('🔐 Deriv authorization successful');
  }

  // ⚠️ Handle errors
  if (response.error) {
    console.error("❌ Deriv error:", response.error.message);
    bot.sendMessage(CHAT_ID, `❌ Deriv Error: ${response.error.message}`);
  }
});

// 📩 Telegram command: /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🤖 BAYNEX is online and ready!');
});

// 📩 Telegram command: /balance
bot.onText(/\/balance/, (msg) => {
  ws.send(JSON.stringify({
    balance: 1,
    subscribe: 0
  }));
});

// 🔌 Handle WebSocket errors
ws.on('error', (err) => {
  console.error("WebSocket error:", err);
  bot.sendMessage(CHAT_ID, "❌ Failed to connect to Deriv WebSocket.");
});

