/**
 * JS의 문제점
 *
 * 다이나믹콜 타입 언어
 *
 * 5년전 2년전 1달전 코드를 기억할 수 없다. 라는 전제로 시작되었다.
 */

/**
 * Add
 * @param {number} num1
 * @param {number} num2
 * @returns num1 + num2
 */
function add(num1, num2) {
  return num1 + num2;
}
console.log(1 + 2);
console.log(1 + '2');

function addTypeSafe(num1, num2) {
  if (typeof num1 === number && typeof num2 === nubmer) {
    return num1 + num2;
  } else {
    throw new Error('숫자만 파라미터로 받을 수 있습니다.');
  }
}

console.log(addTypeSafe(1, '2'));
