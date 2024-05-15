const cache: { [key: string]: any } = {};

export const getCachedData = (key: string) => cache[key];
export const setCachedData = (key: string, data: any) => {
	cache[key] = data;
};
