
        // 0) есть переменные, нужно создать обьект с ключом date и значением 17-04-2012 используя эти переменные
        // Заметка!!!! использовать синтаксис квадратные скобки для задания ключа в обьекте!!!!!!!!!!!!!
        const a = 'date';
        const aValue =  '17-04-2012';
        let obj = {
            [a]: aValue
        };

        //1) Вывести все значения свойств обьектов в массиве
        var arr = [
            { author: 'Sergei', book: 'Sergei\'s book' },
            { author: 'Ivan', book: 'Ivan\'s book' },
            { author: 'Dmitrii', book: 'Dmitrii\'s book' }
        ];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result = result.concat(Object.values(arr[i]))
        }

        //2) есть пустой обьект obj и три переменные k m n! добавить свойства к obj c ключами имена которых совпадают со значениями переменных 
        // k, m, n и и значениями такими же как имя ключа!
        var k = 'book';
        var m = 'apartment';
        var n = 'table';
        var obj = {
            [k]: k,
            [m]: m,
            [n]: n
        };


        // 3) Есть массив с обьектов claims нужно привести к такому виду чтобы получить один обьект с ключами id и со значением весь обьект
        // Например 
        const newObj = {
            '1234': {
                id: 1234,
                model: 'MC7',
                status: 'Open'
            },
            '3453': {
                id: 3453,
                model: 'MC7',
                status: 'Open'
            }
            // и так далее
        }
        var claims = [
            {
                id: 1234,
                model: 'MC7',
                status: 'Open'
            },
            {
                id: 3453,
                model: 'MC7',
                status: 'Open'
            },
            {
                id: 6343,
                model: 'Gran Tour',
                status: 'Closed'
            },
            {
                id: 7644,
                status: 'In Progress'
            },
            {
                id: 7686,
                model: 'City Bike',
                status: 'Closed'
            },
            {
                id: 8356,
                model: 'Bike',
                status: 'Closed'
            },
            {
                id: 9745,
                model: 'Bicycle',
                status: 'Closed'
            },
            {
                id: 10253,
                model: 'Bicycle',
                status: 'Closed'
            },
            {
                id: 14234,
                model: 'Bike',
                status: 'Closed'
            }];
            function newObj () {
                return {[this.id]: {id: this.id, model: this.model, status: this.status}}
            }
            let newClaims = {};
            for (let i = 0; i < claims.length; i++) {
                let finalObj = newObj.bind(claims[i]);
                newClaims = {...newClaims,...finalObj()}
            }


        //4) Дан массив arr! Вернуть те которые в квадрате меньше самого большого значения
        const arr = [10, 6, 3, 5, 6, 2, 12, 64];
        let max = Math.max(...arr);
        arr.filter(el => Math.pow(el, 2) < max);

        // 5) Написать свой собственный some! Функция должна принимать два параметра массив и функцию!!
        function some(array, f) {
            let result;
            for (let i = 0; i < array.length;) {
                if (f(array[i]) === true) {
                    result = true;
                    break;
                } else if (f(array[i]) === false) {
                    result = false;
                    i++;
                }
            }
            return result
        }
        some([5, 2, 5, 1, 6, 3, 6], (el) => el > 5 );

        // 6) Переопределить toString функции getArrayClone и обьекта iron
        getArrayClone.toString() = function (arr) {
            return arr.slice()
        }
        const iron = {
            power: 2000,
            price: 2500
        };
        iron.toString();

        // 7)  Написать функцию которая записывает элементы из массива arr2 в новый массив которых нет в arr1!
        var arr1 = [5, 2, 'a'];
        var arr2 = [6, 5, 2, 4, 'a'];
        let newArr = [];
        function newObj (arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr1.includes(arr[i])) {
                    continue;
                } else newArr.push(arr[i])
            }
            return newArr;
        }  

        // 8) Какой контекст имеет первый и второй массив?
        var arr1 = [5, 2, 'a'];
        var arr2 = [6, 5, 2, 4, 'a'];  
        //Оба объ'екта имеют контекст window

        // 9) Есть два обьекта! Вызвать getSpeed1() с контекстом car2 и getSpeed2 с контекстом car1
        var car1 =  {
            speed: 200,
            getSpeed1() {
                return this.speed;
            },
        }
        var car2 = {
            speed: 220,
            getSpeed2() {
                return `${this.speed}km`;
            }, 
        }
        car1.getSpeed1.bind(car2)();
        car2.getSpeed2.bind(car1)();

        //10) Есть массив из обьектов нужно отфильтровать только те у которых цена больше 40000 и где model не равна Mercedes с помощью filter!
        const car = [
            {
                model: 'BMW',
                price: 45000,
                year: 2015,
                country: 'Germany'
            },
            {
                model: 'Audi',
                price: 75000,
                year: 2017,
                country: 'Germany'
            },
            {
                model: 'Mercedes',
                price: 80000,
                year: 2019,
                country: 'Germany'
            },
            {
                model: 'Volkswagen',
                price: 35000,
                year: 2019,
                country: 'Germany'
            },
        ];

        let newCar = car.filter(el => {
            return el.price > 40000 && el.model !== 'Mercedes';
        })

//  необязательные
        // 11) Есть массив claims если хотя бы один обьект имеет в поле статус значение Open то вернуть true! Ипользовать метод массива some!
        claims = [
            {
                id: 1234,
                model: 'MC7',
                status: 'Open'
            },
            {
                id: 3453,
                model: 'MC7',
                status: 'Open'
            },
            {
                id: 6343,
                model: 'Gran Tour',
                status: 'Closed'
            },
            {
                id: 7644,
                status: 'In Progress'
            },
            {
                id: 7686,
                model: 'City Bike',
                status: 'Closed'
            },
            {
                id: 8356,
                model: 'Bike',
                status: 'Closed'
            },
            {
                id: 9745,
                model: 'Bicycle',
                status: 'Closed'
            },
            {
                id: 10253,
                model: 'Bicycle',
                status: 'Closed'
            },
            {
                id: 14234,
                model: 'Bike',
                status: 'Closed'
            }];
            claims.some(el => el.status === 'Open')


        //12) Дан массив arr! Используя пробежаться по массиву и если все больше или равны 2 то вернуть true! Использовть every метод!
        const arr = [10, 6, 3, 5, 6, 2, 12, 64];
        arr.every(el => el >= 2)

        // 13) Используя claims переменную выше!! Удилить все элементы у которых статус isClosed!! Подсказка! удалить не значит брать и явно удалять можно использовать метод массивов и вернуть новый и перезаписать!!
        let claims = claims.filter(el => {
            if (el.status !== 'Closed') return el;
        })

        // 14) Написать свой собственный filter! Функция должна принимать два параметра массив и функцию!!
        function filter(array, f) {
            let newArray = [];
            for (let i = 0; i < array.length; i++) {
                if (f(array[i]) === true) {
                    newArray.push(array[i]);
                }
            }
            return newArray;
        }
        filter([5, 2, 5, 1, 6, 3, 6], function (el) { return el > 2 });
        // ВОТ ПРИМЕР КАК НАПИСАТЬ СВОЙ map
        function map(arr, f) { // arr - массив, f - функция обратного вызова
            let newArr = [];
            for (let current of arr) {
                newArr = [...newArr, f(current)];
            }
            return newArr;
        }

        map([5, 3, 1, 5, 3], function (curr) { return curr * 2 }); 