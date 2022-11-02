'use strict';

// задание 1
document.getElementById("task_1").onclick = function() {
    alert('Привет!')
}
// задание 2

document.getElementById('task_2').onmouseover = function() {
    alert('Привет!');
}

// задание 3
function task_3() {
    alert('Привет!');
}

// задание 4
function task_4() {
    alert('привет');
}

// задание 5
function task_5() {
    let input = document.getElementById('task_5');
    alert(input.value);
}

// задние 6
function task_6() {
    document.getElementById('task_6').value = 'Ой, я поменял свой текст!';
}

// задание 7
function task_7() {
    document.getElementById('task_7').src = './assets/img/2.jpg'
}

// задание 8
let task_8 = document.getElementById('task_8');

task_8.onfocus = function() {
    while(true) {
        alert(this.value);
    }
}

// задание 9
let task_9 = document.getElementById('task_9');

task_9.onfocus = function() {
    this.value = 'Ой, я поменял свой текст!';
}

// задание 10
let task_10 =  document.querySelector('#task_10');
task_10.onfocus = function() {
    this.value = 'Ой, я поменял этот текст';
}
task_10.onblur = function() {
    this.value = 'Ой, а тпереь еще раз поменял текст';
}
 
// Здание 11
let task_11 = document.querySelector('#task_11');
task_11.onclick = function() {
    this.value = 'Ку-ку';
}

// задние 12
let task_12 = document.querySelector('#task_12');
task_12.onclick = function() {
    this.value = 'О, теперь на меня не нажать';
    this.disabled = 'disabled';
}

// задание 13
let task_13 = document.querySelector('#task_13');
task_13.onmouseover = function() {
    this.src = './assets/img/2.jpg';
}

task_13.onmouseout = function() {
    this.src = './assets/img/1.jpg';
}

// задание 14
function task_14() {
    let task_14_input = document.querySelector('#task_14');
    task_14_input.style.color = 'red';
}

// задание 15
function task_15_1() {
    const task_15_input = document.querySelector('#task_15');
    task_15_input.style.display = 'none';
}

function task_15_2() {
    const task_15_input = document.querySelector('#task_15');
    task_15_input.style.display = 'inline';
}

// задание 16
function task_16() {
    const task_16 = document.querySelector('#task_16');
    task_16.style.color = 'red';
    task_16.style.width = '300px';
    task_16.style.heaight = '50px';
    task_16.style.borderRadius = '10px';
    task_16.style.padding = '10px'
}

// задание 17
let task_input_1 = document.getElementById('task_17_1');
let task_input_2 = document.getElementById('task_17_2');
task_input_2.style.display = 'none';
task_17_1.onclick = function() {
    this.value = 'О, теперь на меня больше не нажать!';
    this.disabled = 'disabled';
    task_input_2.style.display = 'block';
}
task_input_2.onclick = function() {
    this.style.display = 'none';
    task_input_1.disabled = false;
    task_input_1.value = 'О, на меня снова можно нажимать!';
}

// задание 18
let chet = 0; 
const task_18_input = document.getElementById('task_18');
task_18_input.onclick = function() {
    chet++;
    this.value = chet;
} 

// задание 19
function task_19() {
    let task_19_input = document.getElementById('task_19');
    task_19_input.style.float = "right";
    task_19_input.value = 'Теперь я плаваю справа';
}

// задание 20
function task_20() {
    let task_20_input = document.getElementById('task_20');
    task_20_input.value = 'Мой css класс:' + task_20_input.className;
}

// задание 21
function task_21() {
    let task_21_1 = document.querySelector('#task_21_1');
    let task_21_2 = document.querySelector('#task_21_2');
    
    let new_value_21_1 = task_21_1.value
    task_21_1.value = task_21_2.value;
    task_21_2.value = new_value_21_1;
}

// задание 22
function task_22() {
    let task_22_1 = document.getElementById('task_22_1');
    let task_22_2 = document.getElementById('task_22_2');
    task_22_2.value = Number(task_22_1.value);
}

// задание 23
function task_23() {
    let task_23_1 = document.getElementById('task_23_1');
    let task_23_2 = document.getElementById('task_23_2');
    if (isNaN(Number(task_23_1.value))) {
        return alert('Введено не число');
    }
    task_23_2.value = task_23_1.value ** 2;
}

// задание 24
let task_24 = document.querySelector('#task_24');
task_24.onclick = function() {
    this.style.cursor = 'not-allowed';
    this.disabled = true;
}

// задание 25
function task_25(button) {
    document.getElementById('task_25').value += button.value;
}

// задание 26
function task_26() {
    document.querySelector('#task_26').outerHTML = '<p>Ку-ку! А я <b>жирный</b></p>';
}

// задание 27
function task_27() {
    document.querySelector('#task_27').outerHTML = "<h3>Абзац превратился в h3!</h3>";
}

// задание 28
function task_28() {
    document.querySelector('#task_28').outerHTML =  '<h3>' + document.querySelector('#task_28').innerHTML + '</h3>'
}

// задание 29
function task_29() {
    let input_1 = document.getElementById('task_29_1');
    let input_2 = document.getElementById('task_29_2');
    let input_3 = document.getElementById('task_29_3');

    input_3.textContent = +input_1.value + +input_2.value;
}

// задание 30
function task_30() {
    let block = document.getElementById('task_30');
    for (let i of block.getElementsByTagName('p')) {
        i.textContent = 'Ку-ку!';
    }
}


// задание 31
const mass_ClassName = document.querySelector('#task_31').getElementsByClassName('www');

let i = 1;
for (const element of Array.from(mass_ClassName)) {
    element.className = i;
    i++;
}

// задание 32
const mass_ClassName_32 = document.querySelectorAll('#task_32 .www');
let chet_32 = 1
for (let elem of mass_ClassName_32) {
    elem.className = chet_32;
    chet_32++;
}

// Задание 33
function task_33() {
    alert(document.getElementById('task_33').className);
}

// Задание 34
function task_34_1() {
    alert(document.getElementById('task_34').className);
}

function task_34_2() {
    alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!')
    document.getElementById('task_34').removeAttribute('class');
}

// Задание 35
function task_35_1() {
    alert(document.getElementById('task_34').className);
}

function task_35_2() {
    alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!')
    document.getElementById('task_34').className = 'new-class';
}

// задание 36
function task_36(elem) {
    document.getElementById('task_36').textContent = elem.value;
}

// Заадние 37
function task_37() {
    for (let elem of document.querySelectorAll('.task_37')) {
        elem.textContent += ' ' + '(' + elem.href + ')';    
    }
}

// Задание 38
function task_38(elem) {
    document.getElementById('task_39').style.color = 'red';
    elem.disabled = true;
}

// Задание 39
function task_39() {
    let chet = 1;
    for (let elem of document.querySelectorAll('.task_39')) {
        elem.textContent = chet
        chet++;
    }
}


// Задание 40
function task_40() {
    let chet = 1;
    for (let elem of document.querySelectorAll('.task_40')) {
        elem.textContent = chet + '. ' + elem.textContent
        chet++;
    }
}

// следущая ссылка
let date = new Date();
// задание 41
function task_41() {
    alert(date.getDate());
}

// task_41();

// задание 42
function task_42() {
    alert(date.getMonth());
}

// task_42();

// Задание 43
function task_43() {
    alert(date.getFullYear());
}

// task_43();

// задание 44

function make_date(str) {
    if (str.lenght <= 1) {
        return 0 + str;
    }
    
    return str;
}

function task_44() {
    let result = '';
    let hour_minut_second = `${make_date(date.getHours())}:${make_date(date.getMinutes())}:${make_date(date.getSeconds())}`;
    let day_month_yaer = `${make_date(date.getDate())}.${make_date(date.getMonth())}.${make_date(date.getFullYear())}`;
    
    alert(hour_minut_second + ' ' + day_month_yaer);
}

// task_44()

function task_45() {
    alert(date.getDay());
}

// task_45();

function task_46() {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    alert(days[date.getDate()]);
}

// task_46();

function task_47() {
    date = new Date(2015, 0, 7);
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    alert(days[date.getDay()]);
}

// task_47();

function task_48() {
    alert(date.getTime() / 1000);
}

// task_48()

function task_49() {
    let date_old = Date.parse('1988-03-01T00:00:00');
    let now = date.getTime();

    let result = now - date_old;
    alert(result / (1000 * 60 * 60));
}

// task_49();

function task_50() {
    let old =new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    alert((date.getTime() - old.getTime()) / 1000);
}

// task_50();

function task_51() {
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds();
    alert(86400 - hour*60*60 - minute*60 - seconds);
}

// task_51()

function task_52(elem) {
    let birthday = new Date(Date.parse(elem.value));
    // let birthday =  Data.parse(elem.value);
    let now = new Date;
    birthday.setFullYear(+now.getFullYear())
    if (birthday <= now) {
        birthday.setFullYear(+birthday.getFullYear() + 1);
    }
    document.getElementById('task_52').textContent = (+birthday - now) / 86400000;
}

// Следущая ссылка

// Задание 53
let elem = document.getElementById('task_53');

function task_53() {
    elem.textContent = 1;
    window.setInterval(task_53_2, 1000)


}

function task_53_2() {
    elem.textContent = +elem.textContent + 1;
}

// Задание 54
elem = document.getElementById('task_54')
function task_54() {
    elem.textContent = 1;
    document.querySelector('#input_54_on').toggleAttribute('disabled');
    document.querySelector('#input_54_off').toggleAttribute('disabled');
    window.time_54 = window.setInterval(task_54_on, 1000);
}
function task_54_on() {
    elem.textContent = +elem.textContent + 1;
}
function task_54_off() {
    window.clearInterval(window.time_54);
    document.querySelector('#input_54_on').toggleAttribute('disabled');
    document.querySelector('#input_54_off').toggleAttribute('disabled');
}

// Задание 55
function task_55_on() {
    window.time_55 = window.setInterval(task_55, 1000);
}
function task_55() {
    let text = document.getElementById('task_55');
    let date = new Date();
    text.textContent = `${make_norm_date(date.getHours())}:${make_norm_date(date.getMinutes())}:${make_norm_date(date.getSeconds())}`
}
function make_norm_date(number) {
    if (number <= 9) {return '0' + number}
    return number
}


// Задание 56
let text = document.getElementById('task_56');
function task_56_on() {
    window.timer_56 = window.setInterval(task_56, 1000);
    document.getElementById('task_56_3').toggleAttribute('disabled');
    
}
function stop() {

    window.clearInterval(window.timer_56);
}

function task_56() {
    text.textContent = +text.textContent - 1;
    if (+text.textContent == 0) {
        stop();
        document.getElementById('task_56_2').style.display = 'block';
    }

}

// Задание 57
let chet_pic = 1;
function task_57_on() {
    window.timer_57 = window.setInterval(task_57, 1000)
}

function task_57() {
    if (chet_pic == 4) {
        chet_pic = 1;
    }
    document.getElementById('task_57').src = `./assets/img/${chet_pic}.png`;
    chet_pic += 1;
}

// Задание 58
function task_58_on() {
    window.setInterval(task_58, 1000);
}

function task_58() {
    let png_1 = document.getElementById('task_58_1');
    let png_2 = document.getElementById('task_58_2');
    let png_3 = document.getElementById('task_58_3');
    let t = png_1.src
    png_1.src = png_2.src;
    png_2.src = png_3.src;
    png_3.src = t;
}

// Задание 59

function take_59_on() {
    window.timer_59 = window.setInterval(task_59, 1000);
    document.getElementById('task_59_input_on').toggleAttribute("disabled");
    document.getElementById('task_59_input_off').toggleAttribute('disabled');
}
function task_59_input_off() {
    window.clearInterval(window.timer_59);
    document.getElementById('task_59_input_on').toggleAttribute("disabled");
    document.getElementById('task_59_input_off').toggleAttribute("disabled");
}

function task_59() {
    let png_1 = document.getElementById('task_59_1');
    let png_2 = document.getElementById('task_59_2');
    let png_3 = document.getElementById('task_59_3');
    let png_4 = document.getElementById('task_59_4');
    let png_5 = document.getElementById('task_59_5');
    let png_6 = document.getElementById('task_59_6');
    let t = png_1.src
    png_1.src = png_2.src;
    png_2.src = png_3.src;
    png_3.src = png_4.src;
    png_4.src = png_5.src;
    png_5.src = png_6.src;
    png_6.src = t;

}

// Задание 60
function task_60_on() {
    window.task_60_timer = window.setInterval(task_60, 1000);
}

function task_60() {
    let now = new Date()
    let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    let seconds_make = Math.floor((midnight - date) / 1000);
    let hour = Math.floor(make_norm_date(seconds_make / 3600));
    let minute = Math.floor(make_norm_date((seconds_make - hour *60 * 60) / 60));
    let seconds = Math.floor(make_norm_date(seconds_make % 60));
    document.querySelector('#task_60_hours').textContent = hour;
    document.getElementById('task_60_minutes').textContent = minute;
    document.getElementById('task_60_seconds').textContent = seconds;

}

function task_60_on(){
    window.task_60_timer = window.setInterval(task_60, 1000);
}
function task_60(){
    let now = new Date()
    var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0);
    var seconds_make =  Math.floor((midnight - now)/1000);//разница в милисекундах, перевели в секунды
    var hour   = Math.floor(seconds_make/(60*60));
    var minute = Math.floor((seconds_make-hour*60*60)/60);
    var seconds = Math.floor(seconds_make%60);

    document.querySelector('#task_60_hours').textContent = hour;
    document.getElementById('task_60_minutes').textContent = minute;
    document.getElementById('task_60_seconds').textContent  = seconds;
}




