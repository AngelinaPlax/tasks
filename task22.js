// Преобразовать массив
// Ваша задача - реализовать функцию transform(arr), которая принимает массив и возвращает преобразованный массив на основе управляющих последовательностей, содержащихся в arr. Управляющие последовательности - это определенные строковые элементы указанного массива:

// --discard-next исключает следующий элемент массива из преобразованного массива.
// --discard-prev исключает предыдущий элемент массива из преобразованного массива.
// --double-next удваивает следующий элемент массива в преобразованном массиве.
// --double-prev удваивает предыдущий элемент массива в преобразованном массиве.

// Например:

// transform ([1, 3, '--double-next', 4]) => [1, 3, 4, 4]

// transform ([1, 3, '--discard-prev', 4]) => [1, 4]

function transform(arr) {
  if (arr.includes('--discard-next')) {
    let ind = arr.indexOf('--discard-next');
    let newArr = [];
    arr.forEach((item, index) => {
      if (index != ind && index != ind + 1) return newArr.push(item);
    });
    return newArr;
  } else if (arr.includes('--discard-prev')) {
    let ind = arr.indexOf('--discard-prev');
    let newArr = [];
    arr.forEach((item, index) => {
      if (index != ind && index != ind - 1) return newArr.push(item);
    });
    return newArr;
  } else if (arr.includes('--double-next')) {
    let ind = arr.indexOf('--double-next');
    return arr.map((item, index) => {
      if (index != ind) {
        return item;
      } else return (arr[ind] = arr[ind + 1]);
    });
  } else if (arr.includes('--double-prev')) {
    let ind = arr.indexOf('--double-prev');
    return arr.map((item, index) => {
      if (index != ind) {
        return item;
      } else return (arr[ind] = arr[ind - 1]);
    });
  }
}
console.log(transform([1, 3, '--double-prev', 4]));
