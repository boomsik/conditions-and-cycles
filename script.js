var name = "Николай";
console.log("Привет, " + name);
if (name.length > 6) {
 console.log("Ну и длиннющее же у вас имя!");
} else {
 console.log("Имя у вас не из длинных.");
}

var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
if (lemonChicken) {
 console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
 console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
 console.log("Ладно, закажу свинину.");
} else {
 console.log("Что ж, остается рис с яйцом.");
}

// ПОПРОБУЙТЕ!
// Напишите программу с переменной name. Если в этой переменной находится 
// ваше имя, напечатайте: «Привет мне!» — иначе напечатайте: «Привет, 
// незнакомец!» (Подсказка: используйте === для сравнения переменной name
// с вашим именем.)
// Теперь дополните программу, чтобы она здоровалась с вашим папой, 
// если в name его имя, и с вашей мамой, если в name ее имя. Если же там 
// что-то иное, по-прежнему печатайте «Привет, незнакомец!».

var myname = "Viktor";
var hisName = "Anton";
var herName = "Julia";
if(myname === "Viktorr"){
    console.log("Привет мне!");
} else if (hisName === "Antonn"){
    console.log("Привет Антон!");
} else {
    console.log("Привет, незнакомец!");
}

