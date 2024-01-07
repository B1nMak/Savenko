var name = prompt ("Введите имя");

var second_name = prompt("Введите Фамилию");

var father = prompt('Введите отчество');

console.log('ваше ФИО:', second_name, name, father  );

var age_year = prompt ('Возраст в годах');
console.log('Возраст в годах:', parseInt(age_year));

var age_days = prompt ('Возраст в днях');
console.log('Возраст в днях:', parseInt(age_days));

console.log('Через 5 лет вам будет:', parseInt(age_year ) + 5)

var gender = confirm ("Вы мужского пола?")

if (gender === true) {
    console.log("Ваш пол: мужской")
}
else{
    console.log('Ваш пол: женкий')
}
if(gender === true){
    if (parseInt(age_year) < 63){
        console.log('Вы на пенсии:нет');
    }
    else
    {
        console.log("Вы на пенсиии: да");
    }
}
else{
    if (parseInt(age_year) < 58){
        console.log("Вы на пенсии: нет");
    }
    else
    {
        console.log("Вы на пенсии: да");
    }
}