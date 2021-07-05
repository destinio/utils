function id(length = 1000000) {
  return Date.now() + '-' + Math.floor(Math.random() * length)
}

function cl(log: any) {
  console.log(log)
}

module.exports = {
  id,
  cl,
}
