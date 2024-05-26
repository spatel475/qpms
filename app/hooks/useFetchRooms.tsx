import { get } from "@/lib/fetch";
import { getCachedData, setCachedData } from "@/lib/memory-cache";
import { useCallback, useEffect, useState } from "react";
import { Pagination, Room } from "../models/models";

const useFetchRooms = (initialPage: number, initialPageSize: number) => {
	const [rooms, setRooms] = useState<Room[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [pagination, setPagination] = useState<Pagination>({
		totalCount: 0,
		totalPages: 0,
		pageSize: initialPageSize,
		currentPage: initialPage,
	});

	const fetchAllRooms = useCallback(
		async (page: number, pageSize: number) => {
			setIsLoading(true);

			const cacheKey = `rooms-page-${page}-size-${pageSize}`;
			const cachedData = getCachedData(cacheKey);
			
			if (cachedData) {
				setRooms(cachedData.data);
				setPagination((prev) => ({
					...prev,
					totalCount: cachedData.totalCount,
					totalPages: cachedData.totalPages,
					pageSize: cachedData.pageSize,
					currentPage: page,
				}));
				setIsLoading(false);
			} else {
				try {
					const response = await get<Room[]>("/rooms", {
						queryParams: {
							page: pagination.currentPage.toString(),
							limit: pagination.pageSize.toString(),
						},
					});
					const fetchedData = response.data;
					const totalCount = parseInt(response.headers["x-total-count"], 10);
					const totalPages = Math.ceil(totalCount / pageSize);

					setRooms(fetchedData);
					setPagination((prev) => ({
						...prev,
						totalCount,
						totalPages,
						pageSize,
						currentPage: page,
					}));

					setCachedData(cacheKey, {
						data: fetchedData,
						totalCount,
						totalPages,
						pageSize,
					});

					setIsLoading(false);
				} catch (error) {
					console.error("Error fetching rooms:", error);
					setIsLoading(false);
				}
			}
		},
		[pagination.currentPage, pagination.pageSize]
	);

	useEffect(() => {
		fetchAllRooms(pagination.currentPage, pagination.pageSize);
	}, [pagination.currentPage, pagination.pageSize]);

	return { rooms, setRooms, isLoading, pagination, setPagination, fetchAllRooms };
};

export default useFetchRooms;
