
    <script>
        // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Есть участок кода! обернуть в try catch нужный участок кода и выбросить ошибку если getResult возвращает undefined
        function getResult() {
            var obj = {
                name: 'Sergei',
                lastName: 'Shakhov'
            }
            return obj;
        }
        const a = getResult();
        try {
            if (a == undefined) throw new Error('ERRROORRR')
        }
        catch (e) {
            console.log('SUPER ERRROR', e)

        }
        console.log('RESULT', a);

        //2) исправить код чтобы консоль логи показывали от 0 до 10, и написать почему сейчас выводит десять десяток!!
        for (var i = 0; i < 10; i++) {
            setTimeout(() => console.log(i), 0);
        }
        // выводит десять десток, потому что по окончанию цикла i = 10, когда начнут выполняться setTimeout i уже будет равен 10, поэтому все покажут 10.
        // for (let i = 0; i < 10; i++) {
        //     setTimeout(() => console.log(i), 0);
        // }

        // 3) Есть код!! В какой последовательности выполнится!
        function getDatas() {
            return [
                {
                    name: "Vasia"
                },
                {
                    name: "Boria"
                },
                {
                    name: "Misha"
                },
            ]
        }
        const res = getDatas();
        console.log('RES', res);
        setTimeout(() => console.log('settimeout1'), 100);
        setTimeout(() => console.log('settimeout'), 10);
        console.log('One');
        console.log('two');
        // 1.console.log('RES', res);
        // 2.console.log('One');
        // 3.console.log('two');
        // 4.setTimeout( () => console.log('settimeout'), 10);
        // 5.setTimeout(() => console.log('settimeout1'), 100);




        //4) Что выведет alert в setTimeOut
        setTimeout(function () {
            alert(i);
        }, 100);

        for (var i = 0; i < 1000000; i++) {
        }

        // alert в setTimeOut выведет 1000000


        // 5) Есть функция funct! Сделать из нее функцию конструктор которая создает обьект со свойствами name lastName
        function Funct(name, lastName) {
            this.name = name;
            this.lastName = lastName;
        }
        let newObj = new Funct();


        // 6) Создать функцию конструктор, которая принимает обьект и берет только lastName и position и создает обьект с этих свойств
        function factory({ lastName, position }) {
            return {
                lastName, position // решение, было return Zina;
            };
        }

        new factory({
            name: 'Sergei',
            lastName: 'Shakhov',
            height: 188,
            position: 'Software developer'
        });


        // 7) Сделайте так чтобы выболнялось settimeout1 RES RES1
        setTimeout(() => console.log('settimeout1'), 100);
        setTimeout((res) => console.log('RES', res), 101);
        setTimeout((res) => console.log('RES1', res), 102);


        // 8) Есть код! Почему строчка с комментарием покажет {misha: NADUSHA}! Сделать так чтобы a.getObject(); вернул {misha: 'misha'}
        // то есть должны быть независимые обьекты!!
        function newFactory(obj) {
            var object = obj;

            return {
                getObject: function () {
                    return object;
                }
            };
        }
        var a = newFactory({ misha: 'misha' });
        var k = Object.assign({}, a.getObject());// изменил эту строчку
        k.misha = 'NADUSHA';
        a.getObject(); // КОММЕНТАРИЙ!!! покажет NADUSHA 

    </script>
