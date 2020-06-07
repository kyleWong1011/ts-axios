import axios from '../../src'

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

axios({
  url: '/error/get',
  method: 'get'
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

setTimeout(() => {
  axios({
    url: '/error/get',
    method: 'get'
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}, 5000)
