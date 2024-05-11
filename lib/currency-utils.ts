export function formatCurrency(amount: number): string {
	const formatted = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
	return formatted;
}