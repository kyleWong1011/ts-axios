import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data, url, method = 'get', headers = {} } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url!, true)

  Object.keys(headers).forEach(name => {
    // 当data为null的时候， content-type是没有意义的
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.send(data)
}
