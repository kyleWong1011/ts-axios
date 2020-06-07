import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
  return isPlainObject(data) ? JSON.stringify(data) : data
}
