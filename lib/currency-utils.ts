export function formatCurrency(amount: number): string {
	const formatted = CurrencyFormat.format(amount);
	return formatted;
}

export const CurrencyFormat = Intl.NumberFormat("en-US", {
	currency: "USD",
	currencyDisplay: "symbol",
	currencySign: "standard",
	style: "currency",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});