const { id } = require('../index.ts')

test('it returns an id', () => {
  const newId = id()
  expect(newId).toContain('-')
})
