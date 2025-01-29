import axios from 'axios'

export const axiosClient = {
  get: (url: string) => axios.get(url).then(res => res.data),
  post: (url: string, data?: unknown) => axios.post(url, data).then(res => res.data),
  put: (url: string, data?: unknown) => axios.put(url, data).then(res => res.data),
  delete: (url: string) => axios.delete(url).then(res => res.data)
}
