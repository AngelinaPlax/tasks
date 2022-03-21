// Напишите функцию, которая находит наиболее часто используемый элемент массива.

// let array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];

// function func(arr){}

// func(array)

function func(arr) {
  let map = new Map();
  arr.forEach((item) => {
    if (map.has(item)) {
      let i = map.get(item);
      map.set(item, ++i);
    } else {
      map.set(item, 1);
    }
  });
  let sortingArr = [...map].sort((a, b) => a[1] - b[1]);
  return sortingArr[sortingArr.length - 1][0];
}
let array = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];
console.log(func(array));
