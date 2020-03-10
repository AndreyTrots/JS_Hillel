  // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Есть массив cо строк, взять только те у которых есть символы g и a в подстроке, порядок не важен
        const arrayOfStrings = ['qe', 'gdag', 'gga', 'gtrxa', 'hghh', 'ga'];
        function matchWithString(array) {
           const symbol = 'ga'
            let result = array.filter(function(string){
              for(let i = 0; i<symbol.length; i++){
                if(string[0].indexOf(symbol[i]) === 0){
                   return string;
                   }
              } 
            
                });
                return result;                    
             } 
        console.log(matchWithString(arrayOfStrings));

        // 2) Через цикл создать числа фибоначи! То есть на выходе получаем массив с чисел фибоначи, 15 чисел не больше. 
        // можно попробовать через рекурсию как эдвансед.
        //Цикл
         function fib(n){
          let f1 = 0, f2 = 1, cf = 1;
          for(let i = 1; i<=n; i++){
            cf = f1 + f2;
            f1 = f2;
            f2 = cf;
          }
          return cf;
        }
        console.log(fib(12));
        //Рекурсия
        function f(n){
          if(n < 2) return 1;
          return f(n - 1) + f(n - 2);
        }
        console.log(f(12));

        // 3) Через рекурсию сумируем все числа в массиве
        const arr = [4, 1, 65, 2, 6, 7, 2, 1, 6];
        function sum(array) {
            if (array.length == 1 ){
            return array[0];
            } 
            return array[0] + sum(array.slice(1));
        }
   console.log(sum(arr));
   
        // 4) Написать функцию которая принимает 2 параметра from и to, и будет считать сумму  всех нечетных чисел и потом среднее арифметическое от этой суммы!
        // Задачу решить 2-мя способами! Цыклами и рекурсией!
        function find(from,to){
            let sum = 0;
            let count = 0;
                for(let i = from; i<=to; i++){
            if(i%2 !== 0){
            sum+=i;
            count++;
            
            }
            }console.log(sum,sum/count);
            }
            find(1,10);
        // 5) Написать поясниние как будет выполнятся в коллстэке следующий код!
        function a() {
            return b();//функция а вызовет функцию b, функция b вызовет функцию c,функция b вызовет функцию c,функция c вызовет функцию d, функция d вызовет функцию 'HELLO'.
        }

        function b() {
            return c();
        }

        function c() {
            return d();
        }
        function d() {
            return 'HELLO';
        }
        a();
