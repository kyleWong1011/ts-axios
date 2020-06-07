import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
  return isPlainObject(data) ? JSON.stringify(data) : data
}

/**
 * 将返回的json字符串类型的数据转换为对象类型
 * @export
 * @param {*} data
 * @returns {*}
 */
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (error) {
      // ...
    }
  }
  return data
}
