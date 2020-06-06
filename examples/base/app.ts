import axios from '../../src'

// 参数为数组
// http://localhost:8080/base/get?[]=bar&[]=baz
axios({
  method: 'get',
  url: '/base/get',
  params: {}
})

// 参数为数组
// http://localhost:8080/base/get?[]=bar&[]=baz
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})

// 参数为对象
// http://localhost:8080/base/get?foo=%7B%22bar%22:%22baz%22%7D
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

const date = new Date()

// 参数包含日期
// http://localhost:8080/base/get?date=2020-06-06T16:23:22.123Z
axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

// 参数包含特殊字符
// http://localhost:8080/base/get?foo=@:$,+
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
})

// 参数包含null
// http://localhost:8080/base/get?baz=bar
axios({
  method: 'get',
  url: '/base/get',
  params: {
    baz: 'bar',
    foo: null
  }
})

// 带hash值的
//  http://localhost:8080/base/get?foo=baz
axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'baz'
  }
})

// 已存在"?"
// http://localhost:8080/base/get?baz=foo&foo=bar
axios({
  method: 'get',
  url: '/base/get?baz=foo',
  params: {
    foo: 'bar'
  }
})
