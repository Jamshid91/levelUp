// Карусель
let reviews = document.querySelectorAll('.reviews .review');
let buttons = document.querySelectorAll('.reviews button');
let [prev, next] = buttons;
let i = 0;

next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);

function moveNext() {
    if(i == reviews.length - 1) {
        reviews[i].style.display = 'none'
        i = 0;
        reviews[i].style.display = "flex";
    } else {
        reviews[i].style.display = "none";
        reviews[i + 1].style.display = "flex";
        i++
    }
}

let anim = setInterval(function () {
    moveNext();
}, 2000);

function movePrev() {
    clearInterval(anim)

    if (i == 0) {
        reviews[i].style.display = "none";
        i = reviews.length - 1;
        reviews[reviews.length - 1].style.display = "flex";

    } else {
        reviews[i].style.display = "none";
        reviews[i - 1].style.display = "flex";
        i--;
    }
}

reviews.forEach(elem => {
    elem.addEventListener('click', () => {
        clearInterval(anim)
    });
});


// Таймер обратного отсчета
document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('Jan 20 2022 00:00:00');

    const daysVal = document.querySelector('.time-dash .days');
    const hoursVal = document.querySelector('.time-dash .hours');
    const minutesVal = document.querySelector('.time-dash .minuts');
    const secondsVal = document.querySelector('.time-dash .seconds');

    const daysText = document.querySelector('.day-text');
    const hoursText = document.querySelector('.hour-text');
    const minutesText = document.querySelector('.minut-text');
    const secondsText = document.querySelector('.second-text');

    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    const timeCount = () => {
        let now = new Date();
        let leftUntil = newYear - now

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;       
        
        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
        
        if(leftUntil < 0) {
            document.querySelector('.time-item').innerHTML = 'Акция завершена'
        } 
    }
    timeCount();
   setInterval(timeCount, 1000)
});



// Форма заказа
let form = document.getElementById('form');
let userName = document.getElementById('userName');
let userPhone = document.getElementById('userPhone');
let submitBtn = document.getElementById('submitForm')


submitBtn.addEventListener('click', () => {
  checkInputs()

  let successName = userName.parentElement.classList;
  let succesNum = userPhone.parentElement.classList;

  if(successName == 'success' && succesNum == 'success') {
    submitBtn.type = 'submit'
  }
});

function checkInputs() {
  const userNameValue = userName.value.trim();
  const userPhoneValue = userPhone.value.trim();


  if(userNameValue === '' || userNameValue.length <= 3) {
    setErrorFor(userName, "Введите ваше имя")
    userName.style.border = '2px solid tomato'
  } else {
    setSuccesFor(userName)
    userName.parentElement.classList.add('success')
    userName.style.border = '2px solid #2ecc71'
  }

  if(userPhoneValue === '' || userPhoneValue.length < 16) {
    setErrorFor(userPhone, "Введите номер телефона")
    userPhone.style.border = '2px solid tomato'
  } else {
    setSuccesFor(userPhone)
    userPhone.parentElement.classList.add('success')
    userPhone.style.border = '2px solid #2ecc71'
  }
}

function setErrorFor(input, message) {
let small = input.parentElement.children[2]

    input.classList.add('inputError');

    small.innerText = message
}

function setSuccesFor(input) {
let small = input.parentElement.children[2]
    small.innerText = ''
} 

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

let inp = document.getElementById("userPhone");
inp.onclick = function() {
    inp.value = "+";
}
let old = 0;

inp.onkeydown = function() {
    let curLen = inp.value.length;
    
    if (curLen < old){
      old--;
      return;
      }
      
    if(curLen == 0) 
    inp.value = inp.value + "+";

    if (curLen == 2) 
    	inp.value = inp.value + "(";
      
    if (curLen == 6)
    	inp.value = inp.value + ")";
      
     if (curLen == 10)
    	inp.value = inp.value + "-"; 
      
     if (curLen == 13)
    	inp.value = inp.value + "-";  
      
     if (curLen > 15)
    	inp.value = inp.value.substring(0, inp.value.length - 1);
      
     old++;
}
// End Form