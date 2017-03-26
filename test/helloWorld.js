const helloWorld = require('./../src/helloWorld')

describe('helloWorld()', () => {

  it('should say hello', () => {
    const msg = helloWorld()
    expect(msg).toBe('hello world')
  })

})
