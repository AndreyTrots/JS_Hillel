 //1) Есть функция a! Пояснить почему при вызове функции b возьмется k из функции b! Ну и предложить решение чтобы брать k которое выше!
 function a(arg) {
    let k = 10;
    function b() {
      let k = 20;
      return k;
    }
    const res = b() + arg;
    return res;
  }

  // Потому что при объявлении переменной с совпадающим именем из внешней области приоритет имеет локальная область видимости (в данном случае самой функции b)
  // Решение:

  function a(arg) {
    let k = 10;
    function b() {
      // let _k = 20; return _k;
      return 20; // :D
    }
    const res = b() + arg;
    return res;
  }

  //2) Написать функцию которая принимает параметр num и вовращает новую функцию которая тоже принимет один параметр возвращает произведение!
  // то num нужно замкнуть!
  function a(num) {
    return function (num2) {
      return num * num2;
    };
  }
  const res = a(5);
  res(10); // 50

  // 3) Есть функция counter!Пояснить почему res, res1 берут разные i с замыкания!
  function counter() {
    var i = 1;

    return function () {
      // (**)
      return i++;
    };
  }

  const res = counter();
  res();
  res();

  const res1 = counter();
  res1();
  res1();

  // Потому res и res1 имеет собственный контекст замыкания

  //4) Есть функция с которую мы разбирали! Нужно переопредлить toString f чтобы не обращатся к свойству k, а после нажатия enter выводило результат!
  function c(num) {
    f.k = 0;
    f.toString = function () {
      return this.k;
    };
    function f(num1) {
      f.k += f.k ? num : num + num1;
      return f;
    }
    return f;
  }
  с(5)(6)(1).k; // таким образом мы получали k которое хранит сумму!!
  с(5)(6)(5); // нужно чтобы в консоле показало не тело функции а результат то есть ну/но переопределить toString

  // 5) Разомнем мозги пишем собственный reduce!
  function reduce(array, f) {
    let state = array[0];
    for (let i = 1; i < array.length; i++) {
      state = f(state, array[i]);
    }
    return state;
  }
  reduce([5, 2, 5, 1, 6, 3, 6], (prev, curr) => prev + curr);

  // 6) Взял задачу с нета! Обьяснить почему первая выведет 10, а 2 остальные 0!

  /*1)*/
  function arrOfFunctions() {
    var functions = [];

    for (var i = 0; i < 10; i++) {
      var f = function () {
        // функция-стрелок
        alert(i); // выводит свой номер
      };
      functions.push(f);
    }

    return functions;
  }

  var res = arrOfFunctions();

  res[0](); // стрелок выводит 10, а должен 0

  // Потому что var имеет контекст без локального замыкания, потому все функции хранят последнее модифицированное значение i
  
  /*2*/
  function arrOfFunctions() {
    var functions = [];

    for (var i = 0; i < 10; i++) {
      (function (i) {
        var f = function () {
          alert(i);
        };
        functions.push(f);
      })(i);
    }

    return functions;
  }

  var res = arrOfFunctions();

  res[0]();

  // Потому что мы делаем замыкание, передавая в анонимную функцию текущее значение переменной цикла

  /*3*/ function arrOfFunctions() {
    var functions = [];

    for (let i = 0; i < 10; i++) {
      var f = function () {
        alert(i);
      };
      functions.push(f);
    }

    return functions;
  }

  // Потому что объявление переменной через let замыкает ее на текущий контекст и область видимости

  var res = arrOfFunctions();
