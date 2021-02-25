
const assert = require('assert')

const { oneSuccess }  = require('../')

describe("Promise One Success", () => {

  it("#should return the first success if both succeed", () => {

    oneSuccess([slowSuccess(), fastSuccess()]).then(result => {
      assert.strictEqual(resul, 'fast')
    })

  })

  it("#should return the first success if one succeed and one fails", () => {

    oneSuccess([error(), fastSuccess()]).then(result => {
      assert.strictEqual(result, 'fast')
    })
  
  })

  it("#should reject if both fail", () => {

    oneSuccess([error(), fastSuccess()]).catch(error => {

      assert.strictEqual(error.message, 'such terrible behavior')
    })
    .then(() => assert(false))
  
  })

})

function slowSuccess() {
  return new Promise(resolve => {

    setTimeout(() => {
      resolve('slow') 
    }, 100)

  })
}

function fastSuccess() {
  return Promise.resolve('fast')
}

function error() {
  return Promise.reject('such terrible behavior')
}


