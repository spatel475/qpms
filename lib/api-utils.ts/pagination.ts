export function getPaginationInfo({ page, limit, totalRecords }: any) {
	const pageInt = parseInt(page as string, 10);
	const limitInt = parseInt(limit as string, 10);
	const skip = (pageInt - 1) * limitInt;
	const take = limitInt;
	const totalPages = Math.ceil(totalRecords / limitInt);

	return { pageInt, limitInt, skip, take, totalPages };
}

export function getPaginationResponseHeaders(totalRecords: number, totalPages: number, page: number, limit: number) {
	const headers = new Headers();
	headers.append('x-total-count', totalRecords.toString());
	headers.append('x-total-pages', totalPages.toString());
	headers.append('x-current-page', page.toString());
	headers.append('x-page-size', limit.toString());
	return headers
}