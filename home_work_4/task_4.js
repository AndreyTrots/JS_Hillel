// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Написать функцию которая принимает строку и подстроку и нужно найти количество вхождений!!!
        function searchSubstr(string, substring) {
            // ваш код
        }
        searchSubstr('4526214531235345123', '123'); // результат 2
        searchSubstr('4526214531235345123', '45'); // результат 3


        // 2) Написать функцию которая принимает массив и ищет макс число, дальше найти мин число которое имеет меньше индекс чем макс.
        // Можно индекс оф использовать.
        function findMinBeforeMax(max) {
            let resultMax = Math.max.apply(null, max);
            let firstPartArr = max.slice(0, max.indexOf(resultMax));
            let resultMin = Math.min.apply(null, firstPartArr);
            console.log ('Максмимальное число: ' + resultMax);
            console.log ('Меньший идекс от максимального числа: ' + resultMin);
        }
            findMinBeforeMax([35,5, 2, 324, 2, 0, -1, 35]); // ответ 324 -макс, 2 - мин ибо индекс меньше

        //3) Есть массив с массивов нужно подсчитать сумму елементов которые лежат
        // на главной диагонеле c помощью одного цикла и двух. то есть 1 + 5 + 9. 
        // Подсчитать произведение побочной диагонали  3*5*5 также.
        //
  //#1
const matrix = [ 
            [1,2,3], 
            [4,5,6], 
            [5,8,9] ];
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
  sum += matrix[i][i];
  }
   console.log(sum);
   
//#2
 const matrix = [ 
            [1,2,3], 
            [4,5,6], 
            [5,8,9] ];
  let sum = 1;
  for (let i = 0, j = matrix[0].length -1; i < matrix.length || j >= 0; i++, j--) {
  sum *= matrix[i][j];
  }
  console.log(sum);
       
  // 4) Есть массив. Написать функцию которая подсчитает произведение все елементов и вернет результат
  // Массив через параметр      
  function multiple(array) {
             let composition = 1;
                  for(let i = 0; i < array.length; i++){
          composition *= array[i];
        }
        return composition;
        }
        console.log(multiple([20, 5, 3, 23, 15, 8, 10, 11]));
        
    //Массив через конст
        const ar = [2, 3, 5, 6, 2, 6];
        function multiple(array) {
             let composition = 1;
       	 for(let i = 0; i < array.length; i++){
          composition *= array[i];
        }
        return composition;
        }
        console.log(multiple(ar));