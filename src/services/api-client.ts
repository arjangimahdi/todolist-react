import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  count: number;
  next?: string
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ecc72771158c4f09ae03d04087b36cbf',
  }
})

class APIClient<T> {
  endpoint: string = ''

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }
}

export default APIClient