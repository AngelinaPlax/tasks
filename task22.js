// Преобразовать массив
// Ваша задача - реализовать функцию transform(arr), которая принимает массив и возвращает преобразованный массив на основе управляющих последовательностей, содержащихся в arr. Управляющие последовательности - это определенные строковые элементы указанного массива:

// --discard-next исключает следующий элемент массива из преобразованного массива.
// --discard-prev исключает предыдущий элемент массива из преобразованного массива.
// --double-next удваивает следующий элемент массива в преобразованном массиве.
// --double-prev удваивает предыдущий элемент массива в преобразованном массиве.

// Например:

// transform ([1, 3, '--double-next', 4]) => [1, 3, 4, 4]

// transform ([1, 3, '--discard-prev', 4]) => [1, 4]
