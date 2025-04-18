export const getFormattedDate = (date: string) =>
	new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(
		new Date(date)
	);
