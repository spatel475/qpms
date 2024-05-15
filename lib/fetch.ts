type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions extends RequestInit {
	data?: any;
	queryParams?: Record<string, string>;
}

interface FetchResponse<ResponseType> {
	headers: Record<string, string>;
	data: ResponseType;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

const handleResponse = async <ResponseType>(response: Response): Promise<FetchResponse<ResponseType>> => {
	const headers = getHeadersAsObject(response.headers);
	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong');
	}
	return { headers, data };
};

const makeRequest = async <ResponseType>(
	url: string,
	method: HttpMethod,
	options?: FetchOptions
): Promise<FetchResponse<ResponseType>> => {
	const { data, headers, queryParams, ...restOptions } = options || {};

	const queryString = queryParams
		? '?' + new URLSearchParams(queryParams).toString()
		: '';

	const response = await fetch(`/api${url}${queryString}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
			...headers,
		},
		body: data ? JSON.stringify(data) : undefined,
		...restOptions,
	});

	return handleResponse<ResponseType>(response);
};

const get = async <ResponseType>(url: string, options?: FetchOptions): Promise<FetchResponse<ResponseType>> => {
	return makeRequest<ResponseType>(url, 'GET', options);
};

const post = async <ResponseType>(url: string, data: any, options?: FetchOptions): Promise<FetchResponse<ResponseType>> => {
	return makeRequest<ResponseType>(url, 'POST', { ...options, data });
};

const put = async <ResponseType>(url: string, data: any, options?: FetchOptions): Promise<FetchResponse<ResponseType>> => {
	return makeRequest<ResponseType>(url, 'PUT', { ...options, data });
};

const del = async <ResponseType>(url: string, options?: FetchOptions): Promise<FetchResponse<ResponseType>> => {
	return makeRequest<ResponseType>(url, 'DELETE', options);
};

const getHeadersAsObject = (headers: Headers): Record<string, string> => {
	const headersObj: Record<string, string> = {};
	headers.forEach((value, key) => {
		headersObj[key] = value;
	});
	return headersObj;
};

export { del, get, getHeadersAsObject, post, put };

