const number= prompt('Введите число?')
if (number > 10) {
    alert ('Больше 10')
} else if (number < 10) {
    alert ('Меньше 10')
} else {
    alert ('Равно 10')
}

const adult = prompt('Сколько Вам лет?')
if (adult >= 18) {
    console.log ('Совершеннолетний')
} else {
    console.log ('Не совершеннолетний')
}

console.log (adult>=18 ? 'Сoвершеннолетний':'Не совершеннолетний')

const a = Number(prompt('Введите число?'))
const b = Number(prompt('Введите число?'))
const c = Number(prompt('Введите число?'))
if (a > b && a > c) {
    console.log (a)
} else if (b > a && b > c ) {
    console.log (b)
} else {
    console.log (c)
} 

const login = prompt('Прошу ввести логин')
if (login == 'test') {
    const password = prompt('Прошу ввести пароль')
    if (password == 'password') {
        alert('Поздравляем')
    } else if (password =='' || password == null) {
    alert ('Отмена')
    } 
    else {
    alert ('Error')
} }
else {
    alert ('Такого пользователя нет')
}

const password1 = prompt('Прошу ввести пароль!')
if (password1 !== 'password') {
    const password2 = prompt('Просим внести новый пароль')
    if (password2 == 'password') {
        alert ('Пароль не должен совпадать со старым паролем')
    } else {
        alert ('Пароль поменян')
    }
} else {
    alert ('Все верно')
}

const currency = prompt('Какой курс валют, Вас интересует?')
const money = Number(prompt('Введите сумму, которую вы хотите поменять'))
switch (currency) {
    case 'usd':
    alert (money * 28.1)
    break
    case 'eur':
    alert (money * 31.3)
    break
    default:
    alert ('Курс валют такой страны мы не знаем')
}

const d = Number(prompt('Проверка таблицы умножения! Введите первую цифру.'))
const e = Number(prompt('Введите вторую цифру.'))
const f = d * e
if (d <= 9 && d >= 1 && e <= 9 && e >= 1) {
const h = Number(prompt('Укажите ответ!'))
if (h === f) {
    console.log ('Ответ правильный')
} else {
    console.log ('Ответ неправильный, вот ответ', f)
} }
else {
    console.log ('Вы ввели неправильные цыфры')
}


const playGame = confirm("Игра 1, 2, 3?");

let computerChoice = Math.floor(Math.random()*3 - 1 + 1) + 1;
if (computerChoice === 1) {
	computerChoice = "1";
	}else if(computerChoice === 2) {
	computerChoice = "2";
	}else {
	computerChoice = "3";
} 
if(playGame){
  const userChoice = prompt("Давай сыграем! Вы выбераете 1, 2, или 3?");
  alert("Выбор компьютера: " + computerChoice);
    if(userChoice === computerChoice){
         alert("Ничья!");
    }else if(userChoice === "1"){
        if(computerChoice === "3"){
             alert(userChoice + " победа Ваша!");
        }else{ 
             alert(computerChoice + " победа Компьютера!");
        }    
    }else if(userChoice === "2"){
        if(computerChoice === "1"){
             alert( userChoice + " победа Ваша!");   
        }else{
             alert( computerChoice + " победа Компьютера!");
        }
    }else if (userChoice === "3"){ 
        if(computerChoice === "1"){
             alert( computerChoice + " победа Компьютера!");
        }else{
             alert( userChoice + "победа Ваша!");
        }
    }else{
    		alert("Пользователь ввел неверный ответ. Пожалуйста, введите 1, 2 или 3!");
    }    
}else{
  alert("Возможно, мы можем сыграть позже.");
}



let playGame1 = confirm("Игра 1, 2, 3?");
let computerChoice1 = Math.floor(Math.random()*3 - 1 + 1) + 1;
let computerChoice2 = computerChoice1 === 1 ? computerChoice1 = "1" : computerChoice1 === 2 ? computerChoice1 = "2" : computerChoice1 = "3"
let userChoice1 = prompt("Давай сыграем! Вы выбераете 1, 2, или 3?")
let playGame2
alert (playGame2 = playGame1 = userChoice1 === computerChoice2 ? "Ничья!" : userChoice1 === "1" ? computerChoice2 === "3" ? userChoice1 + " победа Ваша!" : computerChoice2 + " победа Компьютера!" : userChoice1 === "2" ? computerChoice2 === "1" ? userChoice1 + " победа Ваша!" : computerChoice2 + " победа Компьютера!" : userChoice1 === "3" ? computerChoice2 === "1" ? computerChoice2 + " победа Компьютера!" : userChoice1 + " победа Ваша!" : "Пользователь ввел неверный ответ. Пожалуйста, введите 1, 2 или 3!" )