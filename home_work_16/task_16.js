<script>
        // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))


        //1) Есть код ! с помощью async await реализуем правильную последовательность!!
        // setTimeout(()=> console.log('1'), 1300);
        // console.log('2')
        // console.log('3')
        // setTimeout(()=> console.log('4'), 300);
        // console.log('5')
        async function getResPromise() {
            const NewPromise = new Promise((resolve, reject) => {
                setTimeout(() => resolve('1'), 1300);
            });
            const NewPromise2 = new Promise((resolve, reject) => {
                setTimeout(() => resolve('4'), 300);
            });
            const resNewPromise = await NewPromise;
            console.log(resNewPromise);
            console.log('2')
            console.log('3')
            const resNewPromise2 = await NewPromise2;
            console.log(resNewPromise2);
            console.log('5')
        };

        getResPromise();




        // 2) Есть роуты!! Делаем через async await то что в предыдущей!только с небольшим усложнением
        // Добавился третий роут. Результат второго запроса даст обьект в котором будет поле orderList.
        // В поле orderList будет массив с обьектов, и в каждом обьекте будет поле productId.
        // Использя  эти productId и 3-й роут, сделать Promise.all и получить массив с продуктов.
        // https://playwithpromise.herokuapp.com/api/order-review/last - вернет обьект с id такой( 5d4762e02481a600174fb1ae )
        // после чего используя id делаем другой запрос
        // https://playwithpromise.herokuapp.com/api/order-review/getid/{id} 
        // https://playwithpromise.herokuapp.com/api/order-system/product/{productId}

        //1
        async function getProduct() {
            const orderLastReview = await fetch('https://playwithpromise.herokuapp.com/api/order-review/last',
                { method: 'GET' }).then(res => res.json());

            const orderReview = await fetch(`https://playwithpromise.herokuapp.com/api/order-review/getid/${orderLastReview._id}`,
                { method: 'GET' }).then(res => res.json());

            const products = [];

            for (const item of orderReview.orderList) {
                const product = await fetch(`https://playwithpromise.herokuapp.com/api/order-system/product/${item.productId}`,
                    { method: 'GET' }).then(res => res.json());
                products.push(product);
            }

            return await Promise.all(products);
        }

        console.log(await getProduct());

        //2
        fetch('https://playwithpromise.herokuapp.com/api/order-review/last', { method: 'GET' })
            .then(data => data.json())
            .then(res1 => fetch(`https://playwithpromise.herokuapp.com/api/order-review/getid/${res1._id}`, { method: 'GET' }))
            .then(data => data.json())
            .then(res2 => {
                const promises = [];

                for (let i = 0; i < res2.orderList.length; i++) {
                    const item = res2.orderList[i];
                    const promice = fetch(`https://playwithpromise.herokuapp.com/api/order-system/product/${item.productId}`, { method: 'GET' }).then(res => res.json());
                    promises.push(promice);
                }

                return Promise.all(promises);
            })
            .then(data => console.log(data))


    </script>