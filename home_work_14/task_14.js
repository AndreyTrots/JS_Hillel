<script>
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

//1) Есть промис! что за параметры принимает функция? Зачем они? как вернуть обьект {id: 10, name: 'Sergei'} и 
// потом принять его с помощью функции промиса then? Как вернуть ошибку в промисе и потом ее перехватить?

// Функция принимает 2 парметра Resolve,Reject, которые также являются функциями, resolve если операция успешна, reject если операция не успешна.
const pr = new Promise(function (resolve, reject) {
    resolve({ id: 2, name: 'Sergei' })
});
pr.then((data) => data)
    .then((res) => {
        throw new Error('Something wrong')
    })
    .catch((x) => console.log('NEW ERROR', x))

//2) Есть код ! с помощью промисов написать таким образом чтобы выполнилось по порядку от одного до 5!
// На данный момент выполнятся setTimeout-ы вконце!!
const NewPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('1'), 1300);
    });
    const NewPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('4'), 300);
    })
    NewPromise.then(data => {
        console.log(data);
        console.log('2');
        console.log('3');
        return NewPromise2;
    }).then(data2 => {
        console.log(data2);
        console.log('5');
    });

    // setTimeout(() => console.log('1'), 1300);
    // console.log('2')
    // console.log('3')
    // setTimeout(() => console.log('4'), 300);
    // console.log('5')

    //3) Есть код !  Нужно всего лишь написать комментарий что делает каждая из строчок!
    const pr2 = new Promise(function (resolve, reject) { /*есть переменная с промисом, ктторый принимает два параметра(функцииresolve,reject*/
        resolve({ id: 2 }) /* функция успешна и принимает объект*/
    });
    pr2.then((data) => data) /* метод then возвращает Promise, принимает аргумент -данные которые отправлены из функции resolve */
        .then((res) => { /* следующий в цепочке then, который принимает результат первого */
            throw new Error('Something went wrong')  /* выбрасываем ошибку*/
        })
        .catch((e) => console.log('ERROR', e)) /*ловим ошибку*/

    // 4) Использую Promise.all получить массив из промисов и после чего отсортировать тот что возвращает массив! 
    const prom1 = new Promise(function (resolve, reject) {
        resolve(10);
    })
    const prom2 = new Promise(function (resolve, reject) {
        resolve({ id: 3 });
    })
    const prom3 = new Promise(function (resolve, reject) {
        resolve([6, 2, 4, 6]);
    })

    Promise.all([prom1, prom2, prom3]).then(([res1, res2, res3]) => res3.sort()).then(res => console.log(res));

    // 5) Есть роуты!! С помощью fetch
    // https://playwithpromise.herokuapp.com/api/order-review/last - вернет обьект с id такой
    // после чего используя id делаем другой запрос
    // https://playwithpromise.herokuapp.com/api/order-review/getid/{id} 

    fetch('https://playwithpromise.herokuapp.com/api/order-review/last')
        .then(res => res.json())
        .then(res => fetch(`https://playwithpromise.herokuapp.com/api/order-review/getid/${res._id}`))
        .then(res2 => console.log(res2));


</script>