
// 아래의 두 배열을 합쳐보시오  -->  concat
// 3~6 까지 * 로 만든 문자열을 출력하시오
const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]

const arr3 = arr1.concat(arr2)
arr3.splice(2, 4, "****")

// console.log(arr3)

const arr4 = arr3.join("")
console.log(arr4)