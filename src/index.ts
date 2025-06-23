import { setupTelegramBot } from "./telegram_bot";
import { connectToDeriv } from "./deriv_ws";
import { initializeBaynexa } from "./baynexa";

console.log("🟢 B.A.Y.N.E.X is starting...");

setupTelegramBot();
connectToDeriv();
initializeBaynexa();
