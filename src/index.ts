/**
 *
 * @param length number - length of digits to add
 * @returns string of char you can use for ids
 */
function id(length = 1000000) {
  return Date.now() + '-' + Math.floor(Math.random() * length);
}

/**
 *
 * @param log any - mapping for console.log
 */
function cl(log: any) {
  console.log(log);
}

export { id, cl };
