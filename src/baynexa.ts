// src/baynexa.ts

const baynexa = {
  say: (message: string) => {
    console.log("🤖 Baynexa says:", message);
    // In future: add Telegram/voice/message alerts here
  },

  alert: (message: string) => {
    console.warn("⚠️ Baynexa alert:", message);
    // Add extra logic if needed
  },
};

export default baynexa;
