
// Возможно изложил не совсем понятно, но я старался :)))
  const first = 10 && 9 && false && 5 && 6;
  // false - потому что оператор И возвращает первое ложное значение
  const second = 9 || false || 5 || 6 || 0;
  // 9 - потому что оператор ИЛИ возвращает первое истинное значение
  const third = false && 9 || false && 5 && 6;
  // первый false - читаем слева на право и ну нас первое значение уже ложное и оператор И выводит именно первое ложное
  const fourth = 10 && 9 || 3 || 5 && 6;
  // 9 - потому сначала сработают операторы И по приоритету 10 && 9, 5 && 6,
  // и т.к. везде истинна, то переходим к ИЛИ и первое истиное значени это 9
  const fifth = 1 || 5 && 6 && 4 && 1 && 343;
  // 1 - потому что все амперсанды тру, переход в ИЛИ и тут сразу тру
  const sixth = 17 > 43 && true && '' || 1;
  // 1 - потому что сначала выполниться сравнение 17 > 43 которое выдаст нам false, 
  // после аперсанда 43 === true, true === true, после ИЛИ '' === false,  и только 1 === true.
  const seventh = 1 && true && 34 > 17 || 1;
  // true- потому что первое что провериться 34 > 17, 34 действительно больше, поэтому мы уивидим логический оператор
  const eighth = '' || 0 || 3 && 4 && 9 && 89;
  // 89 - потому что сначала оператор И (3 && 4 && 9 && 89) здесь везде истина крайняя 89,
  // потом '' || 0 === ложь, 0 || 89 === true, и так как 89 истина , выводим истину :) 
  console.log(first, second, third, fourth, fifth, sixth, seventh, eighth);
