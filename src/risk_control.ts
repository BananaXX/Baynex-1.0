export function calculateTradeSize(balance: number, riskPercent: number): number {
  return (balance * riskPercent) / 100;
}

export function stopIfLossExceeds(thresholdLoss: number, currentLoss: number): boolean {
  return currentLoss >= thresholdLoss;
}
