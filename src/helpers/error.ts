import { AxiosRequestConfig, AxiosResponse } from '../types'
export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)
    this.isAxiosError = true
    this.config = config
    this.code = code
    this.request = request
    this.response = response

    // Breaking-Changes
    // Extending built-ins like Error,Array,and Map May no longer work
    // 继承一个实例化的Error内置对象，原型上的方法调用会有问题
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

// 创建一个工厂函数

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
) {
  const error = new AxiosError(message, config, code, request, response)
  return error
}
