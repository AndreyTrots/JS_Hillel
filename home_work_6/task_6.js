 // удалить из строки повторяющиеся символы
 var first = '1234156117181119999';
 function strMin(first) {
  first = first.split('');
  var arr = first.filter(function(item, pos) {
      return first.indexOf(item) == pos;
  })
  return arr = arr.join('');
 }
 console.log(strMin(first));
 // количество слов в строке
 var second = 'Hi, i am learning javascript';
     let сount = second.split(" ").length;
     console.log(сount);

 // самое длинное слово в строке
     var third = 'Hi, i am learning javascript';
     function findLongestWord(str) {
     var longestWord = str.split(' ').sort(function(a, b) {
     return b.length - a.length; 
     });
     return longestWord[0];
     }
     console.log(findLongestWord(third));
// удалить пробелы в строке
 var fourth = 'Hi, i am learning javascript';
 let space = fourth.split(' ').join('');
 console.log(space);
 // заменить пробелы на зяпятые
 var fifth = 'Hi, i am learning javascript';
 fifth = fifth.replace(/\s+/g,',');
 console.log(fifth);
 // Отфильтровать массив таким образом чтобы числа были не меньше 20 используя фильтр!
 var sixth = [3, 42, 234, 5, 3, 21, 53];
 let newArr = sixth.filter(item => item > 20);
 console.log(newArr);
 // Вернуть новый массив из строк добавив слово месяц если к элементу если число больше 20 используя map
 // [3, '42 месяца', '23 месяца', 5, 3, '21 месяца', '53 месяца']
 var seventh = [3, 42, 23, 5, 3, 21, 53];
         let res = seventh.map(el => {
     if(el > 20) return `${el} Месяц`;
    return el;
 });
 console.log(res);
 // используя reduce просуммировать элементы которые больше 3
 var eight = [3, 42, 23, 5, 3, 21, 53];
     let newEight = eight.reduce((prev,curr) => {
     if(curr > 3) prev += curr;
     return prev;
     },0);
     console.log(newEight);

 // Используя редьюс в массиве nine найти 21
 var nine = [3, 42, 23, 5, 3, 21, 53];
 let numNine = nine.reduce((prev,curr) => {
     if(curr === 21) prev = curr;
   return prev;
 },0);
 console.log(numNine);
 // Используя редьюса определить все ли элементы больше 5 если да то вернуть тру иначе фолс
 var ten = [5, 42, 23, 5, 31, 21, 53];
 let five = ten.reduce((prev,curr) => {
     if(curr > 5 && prev) return prev;
   else {
   return false;
}
 },true);
 console.log(five);
 // Ипользуя map перемножить все нечетные елементы на 2, а четные так и оставить
 var eleven = [12, 42, 23, 65, 352, 21, 2];
 let multiply = eleven.map(el => {
 if(el%2 == 0) return el*2
 return el;
 });
 console.log(multiply);
