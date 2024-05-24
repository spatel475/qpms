import { get } from "@/lib/fetch";
import { useEffect, useState } from "react";
import { StayResponse } from "../api/stays/route";
import { Pagination, StayStatus } from "../models/models";

const useFetchData = (initialPage: number, initialPageSize: number) => {
	const [filter, setFilter] = useState<StaysFilter>({
		stayStatus: [StayStatus.OCCUPIED],
	});
	const [data, setData] = useState<StayResponse[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [pagination, setPagination] = useState<Pagination>({
		totalCount: 0,
		totalPages: 0,
		pageSize: initialPageSize,
		currentPage: initialPage,
	});

	const fetchData = async (page: number, pageSize: number, fromCache = true) => {
		setIsLoading(true);

		// const cacheKey = `stays-page-${page}-size-${pageSize}`;
		// const cachedData = getCachedData(cacheKey);

		// if (cachedData && fromCache) {
		// 	console.log("Found cached data");
		// 	setData(cachedData.data);
		// 	setPagination((prev) => ({
		// 		...prev,
		// 		totalCount: cachedData.totalCount,
		// 		totalPages: cachedData.totalPages,
		// 		pageSize: cachedData.pageSize,
		// 		currentPage: page,
		// 	}));
		// 	setIsLoading(false);
		// } else {
		// }

		try {
			// if (pagination.totalPages > 0 && pageSize > pagination.totalCount) {
			// 	console.log("Api call not needed. Total count less than page size", pagination);
			// 	return;
			// }

			const response = await get<StayResponse[]>("/stays", {
				queryParams: {
					stayStatus: filter.stayStatus?.join(",") ?? "",
					startDate: filter.startDate?.toDateString() ?? "",
					endDate: filter.endDate?.toDateString() ?? "",
					guestName: filter.guestName ?? "",
					page: page.toString(),
					limit: pageSize.toString(),
				},
			});
			const fetchedData = response.data;
			const totalCount = parseInt(response.headers["x-total-count"], 10);
			const totalPages = Math.ceil(totalCount / pageSize);

			setData(fetchedData);
			setPagination({
				totalCount,
				totalPages,
				pageSize,
				currentPage: page,
			});
			// setCachedData(cacheKey, {
			// 	data: fetchedData,
			// 	totalCount,
			// 	totalPages,
			// 	pageSize,
			// });
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching stays:", error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData(pagination.currentPage, pagination.pageSize);
	}, [pagination.currentPage, pagination.pageSize, filter]);

	return { data, isLoading, filter, setFilter, pagination, setPagination, fetchData };
};

export default useFetchData;

export type StaysFilter = {
	startDate?: Date;
	endDate?: Date;
	stayStatus?: StayStatus[];
	guestName?: string;
};
