import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => transformResponseData(res))
}

function processConfig(config: AxiosRequestConfig): void {
  // 此处headers的处理必须放在data的处理之前
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  // 因为 processHeaders里的逻辑是判断header不为非值的时候进行处理的
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

// 将返回数据进行处理
function transformResponseData(res: AxiosResponse): AxiosResponse {
  console.log('res.data', res.data)
  res.data = transformResponse(res.data)
  return res
}

export default axios
