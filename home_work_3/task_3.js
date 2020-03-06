// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Написать функцию которая принимает 2 параметра перемножает и возвращает значение!!!
        function multiply(a, b) {
            return (a*b)
                }
            let result = multiply(5, 10);
            console.log(result)


        // 2) Написать функцию которая принимает 3 параметра и возвращает найменьшее из них
        function min(a, b, c) {
                if (a < b) {
                minNum = a;
                } else {
                minNum = b;
                }
                if (c < minNum) {
                minNum = c;
                }
                return minNum;
            }
            min(100, 33, 11);
            console.log(minNum);

        //3) Написать функцию которая 
        //  -принимает массив, 
        //  -сохраняет непарные числа в новый массив, 
        //  -сортирует массив
        // - и возвращает отсортированный массив
        function sortOddNumbers(array) {
          let result = [];
          for(let i = 0; i<array.length; i++){
            if(array[i]%2==1){
              result.push(array[i]);
            }
          }
          return result.sort(function(a, b) {
            return a - b;
        });
        }
console.log(sortOddNumbers([2, 5, 3, 6, 9, 8, 10, 11]))

        // 4) Написать функцию котороя принимает массив, и выводит новый массив из тех элементов которые кратны 5!!
        function multipleOfFive(array) {
            let result = array.filter(function(number){
              return number%5 === 0;
            });
             return result;
        };
         console.log(multipleOfFive([20, 5, 3, 23, 15, 8, 10, 11]));
  


        // 5) Написать функцию котороя принимает массив из строк, и возвращает кокатенацию из элементов первые символы которых
        // совпадают с этой подстрокой 'jitb'. Используем  toLowerCase() и indexOf() методы  !!
       //Вариант 1
        function matchWithString(array) {
            const str = 'jitb'
            let result = array.filter(function(string){
              for(let i = 0; i<str.length; i++){
                if(string[0].toLowerCase().indexOf(str[i]) === 0){
                   return string;
                   }
              } 
            
                });
                return result.join(' ').toLowerCase();                    
             }        
        console.log(matchWithString(['Javascript', 'nice', 'coding', 'is', 'the', 'language', 'Best', 'worst']));
        //Вариант 2
        function matchWithString(array) {
            const str = 'jitb'
            const result = [];
        for(let i = 0; i<array.length; i++){
          const word = array[i].toLowerCase();
          if(str.includes(word[0])){
            result.push(array[i]);
          }   //includes - включает ли ? да , нет
        }return result.join(' ')
        }
        console.log(matchWithString(['Javascript', 'nice', 'coding', 'is', 'the', 'language', 'Best', 'worst']))
        
        // 6) Написать функцию котороя принимает строку и возвращает подстроку и количество таких подстрок в строке! 
        function  sameSubstring(str) {
           let amountOfSymbols = 1;
           let subString = '';
           let counter = 0;
           for(let i = 0; i < str.length;) {
             if(str.slice(0,amountOfSymbols) !== 
                str.slice(amountOfSymbols,amountOfSymbols + amountOfSymbols)){
               amountOfSymbols++;
             }
             else{ subString = str.slice(0,amountOfSymbols);
                  i = i + amountOfSymbols;   
                  counter++;
                 }
           }
        return [subString,counter];
        }
        console.log(sameSubstring('fdfdfdfd'));        
        console.log(sameSubstring('xxxxxx')); // рузльтат массив из ['x', 6]
        console.log(sameSubstring('xyzxyzxyz')); // рузльтат массив из ['xyz', 3]

        // 7) Написать функцию которая перемножает числа от 5 до 10 через рекурсию!!!
        function recursive(number) {
           if(number === 10){
              return number;
            }
         else return number*recursive(++number)
         }
         let result = recursive(5);
         console.log(result);


          function a(start, end){
  if(start === end){
  return end;
  }
  return start * a(start+1, end);
}
a(5,7);
        // 8) Написать функцию котороя принимает число и проверяет простое ли число, если да то возвращает true иначе false!!
       function isPrime(num) {
            for(let i = 2; i<num; i++){
              if(num%i==0) return false;
            }
          return true;
        }
        console.log(isPrime(7)); // true
        console.log(isPrime(6)); // false
        console.log(isPrime(9)); // false

        // Advanced То есть реверс главной и побочной!
        //  1
         var arr = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];
        for(let i = 0; i < arr.length; i++){
          console.log(arr[i] [i])
        }
       //2
         var arr = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];
          for (let i = 0, j = arr[0].length -1; i < arr.length || j >= 0; i++, j--) {
          console.log(arr[i][j])
          }
