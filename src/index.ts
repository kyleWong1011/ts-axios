import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(confg: AxiosRequestConfig): void {
  // todo
  xhr(confg)
}

export default axios
