import apiClient from "./api-client";

class HTTPService {
  endpoint: string = ''

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = <T>() => {
    const controller = new AbortController()
    const request = apiClient
      .get<T[]>("/users", {
          signal: controller.signal,
      })

    return { request, cancel: () => controller.abort() }
  }
  create = <T>(user: T) => {
    return  apiClient.post("/users", user)
  }
  delete = (id: number) => {
    return apiClient.delete(`/users/${id}`)
  }
  update = <T>(id: number, user: T) => {
    return apiClient.patch(`/users/${id}`, user)
  }
}

const create = (endpoint: string) => new HTTPService(endpoint)

export default create