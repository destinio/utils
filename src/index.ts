function id(length = 1000000) {
  return Date.now() + '-' + Math.floor(Math.random() * length)
}

module.exports = {
  id,
}
