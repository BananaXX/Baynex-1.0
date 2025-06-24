// src/risk_control.ts

const riskControl = {
  maxDailyLoss: 50,
  maxDailyProfit: 100,
  currentProfit: 0,
  currentLoss: 0,

  checkRisk: (): { allowed: boolean; reason?: string } => {
    if (riskControl.currentLoss >= riskControl.maxDailyLoss) {
      return { allowed: false, reason: "🚫 Max daily loss reached" };
    }
    if (riskControl.currentProfit >= riskControl.maxDailyProfit) {
      return { allowed: false, reason: "🎯 Target profit reached" };
    }
    return { allowed: true };
  },

  logTradeResult: (profitOrLoss: number) => {
    if (profitOrLoss > 0) {
      riskControl.currentProfit += profitOrLoss;
    } else {
      riskControl.currentLoss += Math.abs(profitOrLoss);
    }
  },

  reset: () => {
    riskControl.currentProfit = 0;
    riskControl.currentLoss = 0;
  },
};

export default riskControl;
