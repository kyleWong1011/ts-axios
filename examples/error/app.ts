// import axios, { AxiosError } from '../../src'
import axios, { AxiosError } from '../../src'

// 模拟404错误
axios({
  url: '/error/get1',
  method: 'get'
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

// 模拟随机500错误
axios({
  url: '/error/get',
  method: 'get'
})
  .then(res => {
    console.log('500->', { res })
  })
  .catch(err => {
    console.error('500->', { err })
  })

axios({
  url: '/error/timeout',
  method: 'get',
  timeout: 2000
})
  .then(res => {
    console.log(333)
    console.log('timeout', { res })
  })
  .catch((err: AxiosError) => {
    console.log(err.response)
    console.error('timeout', { err })
  })
