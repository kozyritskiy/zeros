module.exports = function getZerosCount(number) {
  let zerosCount = 0;
  while (number >= 5) {
    number /= 5;
    zerosCount += Math.floor(number);
  }
  return zerosCount;
}
