// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
type Method = 'get' | 'Get'

function axios(x: Method) {
  return x + '123'
}

console.log(axios('get'))
