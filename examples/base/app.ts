import axios from '../../src'

axios({
  url: '/base/post',
  method: 'post',
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([21, 31])

axios({
  url: '/base/buffer',
  method: 'post',
  data: arr
})
