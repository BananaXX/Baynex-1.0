import { setupTelegramBot } from './telegram_bot';
import { startDerivStream } from './deriv_ws';

setupTelegramBot();
startDerivStream();

