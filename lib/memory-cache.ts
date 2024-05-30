type CacheEntry = {
	data: any;
	expiration: number;
};

const cache: { [key: string]: CacheEntry } = {};

export const getCachedData = (key: string) => {
	const entry = cache[key];
	if (!entry) {
		return null;
	}

	if (Date.now() > entry.expiration) {
		delete cache[key];
		return null;
	}

	return entry.data;
};

export const setCachedData = (key: string, data: any, ttlMinutes: number = 10) => {
	const ttlMilliseconds = ttlMinutes * 60 * 1000;
	const expiration = Date.now() + ttlMilliseconds;
	cache[key] = { data, expiration };
};
