// Добраться до числа 43 и также добраться до 109
        
const first = [ 4, [ 5, 4, 6, [ 5, 1, 109, 3, [ 2, 10, 43, 22, 32 ] ] ] ];
console.log (first[1][3][2]);
console.log (first[1][3][4][2]);
                 
// Пробежаться через цикл for и если значение меньше 5 то перезаписать его на значение 11 
// то есть результат должен быть [ 11, 10, 17, 11, 11 , 11 , 11 ];

    const zero = [ 4, 10, 17, 2, 3, 1, 0 ];
        for (let i = 0; i < zero.length; i++) {
            if (zero[i] < 5){
              zero[i] = zero[i] = 11;
}
}
console.log(zero);

 // Пробежаться через цикл for и четные елементы перемножить и записать результат в odd и вывести
 // то есть перемножить в цикле 4 17 3 10 
     const multiply = [ 4, 10, 17, 2, 3, 1, 10 ];
     let odd = 1;
     for(let i = 0; i < multiply.length; i++){
        if(!(i%2)) {
          odd = odd * multiply[i];
        }
      }
console.log(odd);

  // Вывести только нечетные числа используя цикл: 
  // - for,
  // - while 
    const second = [ 1, 5, 10, 4, 2, 3 ];
    for(let i = 0; i < second.length; i++) {
      if(i%2){
      }
    }
    console.log(i)
          
    // Найти минимальное значение и вывести
   const third = [ 10, 2, 4, 43, 5, 3, 19, 23 ];
        let min = Math.min.apply(null, third);
        console.log(min);
     
    // Вывести все елементы в цикле for в обратном порядке то есть 28 19 14 9 23 43 3 4
       // Вариант 1 
        const fourth = [ 4, 3, 43, 23, 9, 14, 19, 28 ];
        for(let i = fourth.length-1; i >=0; i--){
        console.log(fourth[i]);
        }
        // Вариант 2 - более адекватный и простой
        const fourth = [ 4, 3, 43, 23, 9, 14, 19, 28 ];
        const reversed = fourth.reverse();
        console.log(reversed);
    
    // Найти произведение  всех елементов
        const fifth = [ 9, 14, 19, 28 ];
        let composition = 1;
        for(let i = 0; i < fifth.length; i++){
          composition *= fifth[i];
        }
        console.log(composition)
    
    // Пройтись через цикл for и сложить все числа в массиве и вывести результат!
    const sixth = [ 9, 4, 19, 18 ];
    let sum = 0;
        for(let i = 0; i<sixth.length; i++){
            sum = sum + sixth[i];
        }
        console.log(sum);

    // Пройтись через цикл for и найти среднее арифметическое все елементов
    // среднее арифметическое - это сумма всех елементов, разделенная на их количество!
    const seventh = [ 2, 0, 3, 29, 23, 19 ];
    let sum = 0; 
    for(let i = 0; i<seventh.length; i++){
        sum = sum + (seventh[i]/2);
    }
console.log(sum);

    // Записать в массив eighth числа от 5 до 17 через цикл:
    // - for,
    // - while 
    const eighth = [];
    for(let i = 5; i <=17; i++){
eighth.push(i);

}
console.log(eighth)
    
    
    // ADVANCED ЗАДАНИЯ!!!! ТО ЕСТЬ НЕОБЯЗАТЕЛЬНЫЕ!!!!!!!!


    // Отсортировать массив по возростанию! и вывести
    const ninth = [ 1, 2, 18, 3, 38, 41, 0 ];
ninth.sort(function(a, b) {

return a - b;

});
console.log(ninth) //кроме как вывести через функцию не придумал как сделать, т.е. как всякий раз когда a меньше, чем b, возвращается негативное значение, что ведет к тому, что меньший элемент всегда будет выставляться левее большего


    // Есть строкa в переменной ninth!! Нужно пройтись циклом for и записать в переменную res строку со значением 2a1f3c1b
    // так как если обратить внимание то в строке 'aafcccb' символ а идет последовательно 2 раза далее f только один символ, символ с последовательно 3 раза
    // и символ b один раз
    const tenth = 'aafcccb';
    let res = '';

    // ЗДЕСЬ ЕЩЕ ТЯЖЕЛЕЙ нужно подсчитать количество одинаковых символов в строке и при этом одинаковые символы не идут последовательно!!
    // то есть результат должен быть 4a3f4c
    const eleventh = 'aafcccffbaac';
    let newRes = '';