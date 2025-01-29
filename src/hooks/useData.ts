import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, deps?: any[], requestConfig?: AxiosRequestConfig) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

            apiClient
                .get<FetchResponse<T>>(endpoint, {
                    signal: controller.signal,
                    ...requestConfig
                })
                .then((res) => {
                    setData(res.data.results);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, loading };
};

export default useData;
