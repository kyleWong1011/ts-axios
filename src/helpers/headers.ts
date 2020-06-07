import { isPlainObject } from './utils'

function normalizeHeaderName(headers: any, normalizeName: string): void {
  if (!headers) return
  Object.keys(headers).forEach(name => {
    if (name !== normalizeName && name.toLocaleUpperCase() === normalizeName.toLocaleUpperCase()) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

const CONTENT_TYPE = 'Content-Type'
const DEFAULT_CONTENT_TYPE = 'application/json;charset=utf-8'

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, CONTENT_TYPE)

  if (isPlainObject(data)) {
    if (headers && !headers[CONTENT_TYPE]) {
      headers[CONTENT_TYPE] = DEFAULT_CONTENT_TYPE
    }
  }

  return headers
}
