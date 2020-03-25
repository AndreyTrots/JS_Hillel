 // ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Написать функцию которая берет с помощью деструктуризации только поля gender, lastName
        const person = {
            name: 'Kolia',
            gender: 'male',
            lastName: 'Borisenko',
            age: 23
        };

        function getPerson({gender, lastName}) {
            return {
                isStudent: true,
                gender,
                lastName,
            }
        }
        console.log(getPerson(person));

        //2 Написать функцию которая принимает только два первых значения массива array (использовать деструктуризацию)
        const array = [10, 34, 54, 23];
        function getPerson([first, second]) { // магия здесь
            return first > second;
        }
        console.log(getPerson(array));
        
        //3 есть обьект. Необходимо
        // 1 - на выходе получить обьект в котором будет 2 поля 
        // previousCentury, currentCentury,
        // где в первом поле будет массив с тех школ в которых year меньше 2000 а во втором все остальные
        // 2 - в каждом обьекте где School1, School2 и так далее добавить два поля male, female где будут массивы
        // в male те обьекты в которых  gender- male, в female те - у которых female
        const schools = [
  {
    name: "School1",
    year: 1980,
    students: [
      { gender: "male", name: "G" },
      { gender: "female", name: "M" },
      { gender: "male", name: "N" },
      { gender: "female", name: "K" },
      { gender: "male", name: "A" }
    ]
  },
  {
    name: "School2",
    year: 1990,
    students: [
      { gender: "male", name: "G" },
      { gender: "female", name: "M" },
      { gender: "male", name: "N" },
      { gender: "female", name: "K" },
      { gender: "male", name: "A" }
    ]
  },
  {
    name: "School3",
    year: 2001,
    students: [
      { gender: "male", name: "G" },
      { gender: "female", name: "M" },
      { gender: "male", name: "N" },
      { gender: "female", name: "K" },
      { gender: "male", name: "A" }
    ]
  },
  {
    name: "School4",
    year: 2012,
    students: [
      { gender: "male", name: "G" },
      { gender: "female", name: "M" },
      { gender: "male", name: "N" },
      { gender: "female", name: "K" },
      { gender: "male", name: "A" }
    ]
  },
  {
    name: "School5",
    year: 1993,
    students: [
      { gender: "male", name: "G" },
      { gender: "female", name: "M" },
      { gender: "male", name: "N" },
      { gender: "female", name: "K" },
      { gender: "male", name: "A" }
    ]
  },
  {
    name: "School6",
    year: 2007,
    students: [
      { gender: "male", name: "G" },
      { gender: "female", name: "M" },
      { gender: "male", name: "N" },
      { gender: "female", name: "K" },
      { gender: "male", name: "A" }
    ]
  }
];
let previousCentury = schools.filter(el => el.year < 2000);
let currentCentury = schools.filter(el => el.year >= 2000)
let filteredSchools = {previousCentury, currentCentury};

  previousCentury = previousCentury.map(el => {
    el.male = el.students.filter(element => element.gender === "male")
    el.female = el.students.filter(element => element.gender === "female")
    return el;
  });
currentCentury = currentCentury.map(el => {
    el.male = el.students.filter(element => element.gender === "male")
    el.female = el.students.filter(element => element.gender === "female")
    return el;
  });
console.log (filteredSchools);

