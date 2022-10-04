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

//Считаем овец с помощью цикла while

//С помощью цикла While

var sheepCounted = 0;
 while (sheepCounted < 10) {
 console.log("Посчитано овец: " + sheepCounted + "!");
 sheepCounted++;
}
console.log("Хрррррррррр-псссс");

//С помощью цикла for 

for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("Посчитано овец: " + sheepCounted + "!");
   }
   console.log("Хрррррррррр-псссс");

   var timesToSayHello = 3;
    for (var i = 0; i < timesToSayHello; i++) {
 console.log("Привет!");
}

var animals = ["лев", "фламинго", "белый медведь", "удав"];
for (var i = 0; i < animals.length; i++) {
 console.log("В этом зоопарке есть " + animals[i] + ".");
}

var name = "Ник";
for (var i = 0; i < name.length; i++) {
 console.log("В моем имени есть буква " + name[i] + ".");
}

for (var x = 2; x < 10000; x = x * 2) {
    console.log(x);
   }

//    ПОПРОБУЙТЕ!
//    Напишите цикл for, который печатает степени тройки, не превышающие 
//    10 000 (программа должна выводить 3, 9, 27 и т. д.)
//    Перепишите это задание, вместо for использовав цикл while. 
//    (Подсказка: установите начальное значение перед входом в цикл.

for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
   }

   var number = 0;
   while (number  < 10000) {
    console.log(number = number * 3);
   }