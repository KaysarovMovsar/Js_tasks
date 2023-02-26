// // 1. Необходимо создать массив evenNumbers со всеми четными числами от 0 до 100, используя метод push()
// // const evenNumbers = []; // Your code here... console.log(evenNumbers); // [0, 2, 4, 6, 8, /* ... ,*/ 100]

// const evenNumbers = [];

// for (let i = 0; i <= 100; i+=2) {
//     evenNumbers.push(i)
// }

// console.log(evenNumbers);


// // 2. 1. Создай массив из элементов “HTML”, “CSS”, “React”, “.NET”
// // 2. Удали последний элемент
// // 3. Добавь в конец массива “Node.js” и “Docker”

// const cont = ['HTML', 'CSS', 'React', '.NET']

// function replace(arr) {
// arr.pop()
// arr.push('Node.js', 'Docker')
// }
//     // cont.pop()
//     // cont.push('Node.js')
// replace(cont)
// console.log(cont)


// // 3. Дан массив с массивами arrays. Необходимо проверить каждый внутренний массив на то,
// //  начинается ли он с 0. Если первый элемент — 0, то этот элемент (число 0), необходимо удалить.
// const arr = [ [0, 1, 2, 3], [10, 2, 5, 8], [12, 5, 23, 25], [0, -2, 4, 10], [-1, 0, 54, 32] ];

// let arr = [[ 2, 0, 3, 4, 5], [1, 6, 0, 7, 8], [0, 9, 1, 10]];

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
//             if(arr[i][0] == 0) {
//                 arr[i].shift()
//             }
// 	}
// }

// console.log(arr)

// let arr = [];

// for (let i = 0; i < 2; i++) {
// 	arr[i] = []; // создаем подмассив
	
// 	for (let j = 0; j < 4; j++) {
// 		arr[i].push(j + 1); // заполняем подмассив числами
// 	}
// }

// console.log(arr)

// // 4. Дан массив с именами, упорядоченными по алфавиту: “Алексей”, “Артур”, “Владимир”. 
// // Необходимо добавить новые имена “Александр” и “Евгений” таким образом, чтобы алфавитный порядок сохранился.

//  const names = ['Алексей', 'Артур', 'Владимир']; 

//     names.push('Александр', 'Евгений')
//     names.sort()
 
//  console.log(names)

// //  5. Тебе даны 2 массива arr1 и arr2. Напиши функцию foo(), которая будет принимать массив и делать с ним следующее:
// // 1.	Брать последние 3 элемента
// // 2.	Увеличивать их в 2 раза
// // 3.	Возвращать этот массив (с 3 элементами)
// // const arr1 = [1, 7, 4, 8, 3, 4, 5]; 
// // const arr2 = [4, 2, 7, 9, 3, 1, 3, 6, 4, 3]; 

// // function foo(arr, start, step, end) {

// //     const merged = [];
// //     for (let i = start; i < end; i++) {
// //         merged[i] = arr[i] * 2
// //     }

// //     arr.splice(start, step, ...merged)

// //     return arr 

// // } 
// //  foo(arr2,  arr2.length - 3, 3, arr2.length - 1)
// // console.log(arr2)

// // Этот код не работает 

// // Your code here... } console.log(foo(arr1)); // [6, 8, 10] console.log(foo(arr2));


// const arr1 = [1, 7, 4, 8, 3, 4, 5]; 
// const arr2 = [4, 2, 7, 9, 3, 1, 3, 6, 4, 3]; 

// // second version

// function foo(arr, start, end) {
    
//     let res;
//     // It is not an Indian code
//     if (end) {
//             res =  arr.length
//             end = res
//         }
        
//         for (let i = start; i < end; i++) {
//                 arr[i] = arr[i] * 2
//             }
//             return arr
//         }
//           foo(arr2,  arr2.length - 3, arr2.length - 1)
//           foo(arr1,  arr1.length - 3, arr1.length - 1)
//           console.log(arr1)
//           console.log(arr2)

//         //Этот код работает, но не соответствует условиям задачи

// // 6. Тебе дан массив languages с элементами: “JavaScript”, “C#”, “Java”, “English”, “Go”, “Python”. 
// // Одной строчкой кода удали лишний элемент и замени его на любой подходящий. 

const languages = ['JavaScript', 'C#', 'Java', 'English', 'Go', 'Python']; 
languages.splice(3, 1,'C++')
console.log(languages)

// // Your code here... console.log(languages); // ['JavaScript', 'C#', 'Java', 'C++', 'Go', 'Python']

// // 7. Тебе дан массив с названиями методов массивов. Необходимо вывести в консоль сообщения
// // “Метод ИМЯ_МЕТОДА” для каждого метода массива. 

// const methods = [ 'push()', 'pop()', 'shift()', 'unshift()', 'slice()', 'splice()', 'forEach()', 'map()', 'find()', 'findIndex()' ];
// for (let i = 0; i < methods.length; i++) {
//     console.log(`Метод ${methods[i]}`)
// } 
// // Your code here... // Вывод // Метод push() // Метод pop() // Метод shift() // Метод unshift() // Метод slice() // Метод splice() 
// // Метод forEach() // Метод map() // Метод find() // Метод findIndex()

// // 8. Тебе дан массив ids, состоящий из id людей и объект peoplesObject, где ключ — id человека, а значение — его имя.
// //  Необходимо создать новый массив peoples при помощи метода map(), в котором будут содержатся строки вида: “NAME (id: ID)”,
// //   где:
// // •	NAME — имя (соответствует значению id из массива ids)
// // •	ID — его id.
// // Порядок элементов должен остаться тем же.
let user = {
  name: "John",
  age: 30,
}
const result = (Object) => {
    const peoples = [];
    for (let i = 0; i < Object.length; i++){
    for (let j = 0; j < ids.length; j++){
        if (ids[i] in Object.key) {
          peoples[i] = Object.value
        }
    } 
}
    return peoples
};
console.log(result(user))

// // Этот код не работает


// // Your code here... console.log(peoples); // ['Igor (id: 15)', 'Alex (id: 1)', 'Vladilen (id: 20)', 'Elena (id: 5)']

// // 9. Вам дан массив computers с объектами. 
// // Найди в массиве объект “MacBook Pro 16” и выведи его в консоль.

// const computers = [ 
//     { name: 'MacBook Pro 13', price: 150000 }, 
//     { name: 'MacBook Pro 14', price: 200000 }, 
//     { name: 'MacBook Pro 16', price: 300000 }, 
// ];

// const res = computers.find(computers => {
//     if(computers.name === 'MacBook Pro 13') {
//         return computers.name
//     }
// })

// console.log(res)

//  // Your code here... console.log(macbook); // { name: 'MacBook Pro 16', price: 300000 }

// //  10. Тебе дан массив computers с объектами. 
// //  Найди индекс элемента “MacBook Pro 13” и, если он есть, удали элемент по данному индексу. 

const computers2 = [ 
    { name: 'MacBook Pro 13', price: 150000 }, 
    { name: 'MacBook Pro 14', price: 200000 }, 
    { name: 'MacBook Pro 16', price: 300000 }, 
]; 
const res2 = computers2.findIndex(computers2 => {
    const index = computers2.name === 'MacBook Pro 13'
    if (index) {
        return computers2.name
    }
})
   for (let i = 0; i < computers2.length; i++) {
    computers2[i] = computers2[i + 1]
}
computers2.length -= 1
console.log(res2)

console.log(computers2)

// // Your code here... console.log(computers); /* [ {name: 'MacBook Pro 14', price: 200000}, {name: 'MacBook Pro 16', price: 300000} ] */


// // 11. Тебе дан массив чисел arrayNumbers. 
// // Необходимо создать переменную hasMoreThenHundred, которая будет true или false в зависимости от того,
// //  есть ли в нем хотя бы одно число строго больше 100:

// const arrayNumbers11 = [10, 15, 5, 100, 50, 101, 203, 800]; 
// let hasMoreThenHundred= [];
// hasMoreThenHundred.push(...arrayNumbers11)

// for (let i = 0; i < hasMoreThenHundred.length; i++) {
//     if (hasMoreThenHundred[i] > 100) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// console.log(hasMoreThenHundred)

// //Этот код тоже работает некорректно

// // Your code here... console.log(hasMoreThenHundred); // true


// // 12.Тебе дан массив чисел arrayNumbers.
// //  Необходимо создать переменную isEven, 
// //  которая будет true или false в зависимости от того,
// //   являются ли все числа массива четными:
// const arrayNumbers = [2, 3, 10, 6, 8, 14, 24, 50]; // Your code here... console.log(isEven); // true
// let isEven = [...arrayNumbers];
// for (let i = 0; i < arrayNumbers.length; i++) {
//     if(arrayNumbers in Number % 2 === 0) {
//          console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// // Этот код не работает

// // 14. Тебе дан массив чисел arrayNumbers. Необходимо отсортировать массив в порядке убывания:

// // const array = [[[6, 6],[3, 3],],[[7, 7, [9]]],]
// //   const result = []
// //   function simplifyArray(array1) {
// //     function recursivePushElem(arr) {
// //       arr.forEach((i) => {
// //         if (Array.isArray(i)){
// //          recursivePushElem(i)
// //         } else {
// //           result.push(i)
// //         } 
// //       })
// //     }
// //     recursivePushElem(array1)
// //     return result
// //   }
// //   simplifyArray(array)
// //   console.log(result)

//   //Этот код нашел в интернете но не до конца понимаю как он работает(код с верху)


// const array11 = [[[6, 6],[3, 3],],[[[7, 7, [9]]]],]
// const flatted = array11.flat(Infinity)

// console.log(flatted)



// // 14. Тебе дан массив чисел arrayNumbers. Необходимо отсортировать массив в порядке убывания:
// const arrayNumbers1 = [10, -2, -3, 0, 1, 30, 25]; 
// console.log(arrayNumbers1.sort().reverse())

// // Your code here... console.log(arrayNumbers); 
// // [30, 25, 10, 1, 0, -2, -3]

// // let countries = ['Österreich', 'Andorra', 'Vietnam'];
// // const arrayNumbers1 = [10, -2, -3, 0, 1, 30, 25]; 
// console.log( arrayNumbers1.sort( (a, b) => a < b ? 1 : -1) ); 
// // Этот код нашел в интернет, он тоже мне непонятен

// // Andorra,Österreich,Vietnam (правильно!)

// var numArray = [140000, 104, 99];
// numArray.sort(function(a, b) {
//   return b - a;
// });
// console.log(numArray);

// // Этот код нашел в интернет, он тоже мне непонятен


// // 15. У тебя есть два массива firstArray и secondArray.
// //  Все, что нужно сделать – это создать переменную concatedArray и с объединенными массивами:
// const firstArray = ['J', 'a', 'v', 'a']; 
// const secondArray = ['S', 'c', 'r', 'i', 'p', 't'];
// const concatedArray = [].concat(firstArray,secondArray) 
// // Your code here... console.log(concatedArray); 
// // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'] 
// console.log(concatedArray.join('')); 
// // JavaScript


// // 16. Создай массив array, состоящий из 100 элементов со значением 0 без использования циклов: 
// // Your code here... 
// // const array = [9,9,3,4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
// // console.log(array.fill(0, 0, 101));

// const array = new Array(100).fill(0)
// console.log(array)
// // [0, 0, 0, 0, 0, 0, /* ... , */ 0]

// const array1 = [1, 2, 3, 4];
// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));

// // 17. Тебе дан массив строк technologies – технологии, изученные разработчиком. 
// // Тебе нужно создать переменную hasJs, которая будет true или 
// // false в зависимости от того, есть ли в массиве элемент 'JavaScript':
// const technologies = ['Node Js', 'Uninedocode', 'JavaScript', 'React', 'Vue']; 
// const hasJs = ((arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 'JavaScript'){
//             return true
//         } 
//     }
//     return false
// })
// console.log(hasJs(technologies))
// // Your code here... console.log(hasJs); // true


// // 18. Тебе даны массивы array1 и array2, первые элементы 
// // которых всегда равны true или false, а остальные элементы – числа в порядке возрастания. 
// // Нужно создать переменные finalArray1 и finalArray2, основываясь на 
// // массивах array1 и array2 соответственно, по следующим условиям:
// // 1.	Если первый элемент равен true, тогда нужно удалить первый элемент 
// // и перевернуть массив. Иначе также удалить первый элемент, но не переворачивая массив.
// // 2.	Изначальные массивы не должны измениться
// const array111 = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
// const res123 = ((arr) => {
//         if (arr[0] === true) {
//             const res2 = arr.shift(true)
//         }
        
//         return res2
// })
// console.log(array111)
// // Этот код не работает



// let arr = [1,2,3,4,5,6,7]

// let res = arr.map(function(value, index, array){
//     if(value > 2){
//         array[index] = value + 10
//     }
//     return value
// })
// console.log(arr)


// let arr = [1,2,3,4,5,6,7]

// let res = arr.map(function(value, index, array){
//     const start = array.length - 3
//     if(array[index] > start){
//         array[index] = value ** 2
//     }
//     return value
// })
// console.log(res)
// // console.log(arr)



// let arr = [1,2,3,4,5,6,7]

// function reduceFn(acc, item){
//     return acc + item
// }

// const res3 = arr.reduce(reduceFn, 10)

// console.log(res3)

// console.log(Array(100).fill(12))


// function spinWords(string){
//     //TODO Have fun :)
//     const spin = string.split(' ')
//     spin[0] = spin[0].reverse()
//     return spin
// }
// const res = spinWords( "Hey fellow warriors" )
  
  
//   console.log(res)



//   ЗАДАНИЕ 5
// Первые подсчеты показали, что приземление будет в Австралии, 
// где всё наоборот. Напишите функцию, которая переводит положительные числа в отрицательные. Отрицательные не изменяются.
// ПРИМЕР: oppositeNumber(-4) // -4 oppositeNumber(0.2) // -0.2
// const Numbers = [-0.2, 4]

// function space(Num) {
//   Num.map((a)=> {
//     if(a > 0) {
//         return -Math.abs(a) 
//     }
//   })
//   return Num
// }

// console.log(space(Numbers))

// const Numbers = [-0.2]

// function space(Num) {
//     Num.map(a => a < 0 ? +Math.abs(Num): Num)
//   }

//   console.log(space(Numbers))


//   function Code(Num){
//     let acc = '';
//     let number = 1;
//     for(let i = 0; i <= Num; i++){
//       if(number === 0){
//         number = 1
//       } else{
//         number = 0
//       }
//       acc = acc + number
//     }

//     return acc
//   }
// console.log(Code(3))


// function c(start, end, step)

// const acc = [1,2,78,0,5,3]
