// 1-st

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const result = [
  `${Object.keys(citiesAndCountries)[0]} - это ${citiesAndCountries['Киев']}`,
  `${Object.keys(citiesAndCountries)[1]} - это ${citiesAndCountries['Нью-Йорк']}`,
  `${Object.keys(citiesAndCountries)[2]} - это ${citiesAndCountries['Амстердам']}`,
  `${Object.keys(citiesAndCountries)[3]} - это ${citiesAndCountries['Берлин']}`,
  `${Object.keys(citiesAndCountries)[4]} - это ${citiesAndCountries['Париж']}`,
  `${Object.keys(citiesAndCountries)[5]} - это ${citiesAndCountries['Лиссабон']}`,
  `${Object.keys(citiesAndCountries)[6]} - это ${citiesAndCountries['Вена']}`
]





// 2-nd

function getArray(amount){
  let arrA = [],
      arrB = [];

  for (let i = 1; i <= amount; i++) {
      if (i % 3 == 0){
          arrB.push(i)
          arrA.push(arrB)
          arrB = []
      } else {
          arrB.push(i)
      }
  }
  console.log(arrA)
}

getArray(9)
getArray(12)

// 3-d

const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг' ,'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',  'Sunday'],
}

function getNameOfDay1(){
  let lang = 'en';
  let day = 7;
  console.log(namesOfDays[lang][day - 1])
}

function getNameOfDay2(){
  const lang = 'ru';
  const day = 3;
  console.log(namesOfDays[lang][day - 1])
}

getNameOfDay1()
getNameOfDay2()

// 4-th

function getSumOfMinNum() {
  let arr = [-4, 17, 19, 5, 325, 23.7, -10, 18.23],
      newArr = [],
      finalArr = [],

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 1 == 0 && arr[i] >= 0){
          newArr.push(arr[i])
          console.log(newArr)
      }
  }

  let min = newArr[0];
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] < min) {
        min = newArr[j];
    } else {
      finalArr.push(newArr[j])
    }
  }
 
  let secondMin = finalArr[0];
  for (let j = 0; j < finalArr.length; j++) {
    if (finalArr[j] < secondMin) {
      secondMin = finalArr[j];
    }
  }
 console.log(min + secondMin)
}
getSumOfMinNum()
