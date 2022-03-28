let lang = "en";
if (lang == "ru"){
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
}else if(lang == "en") {
    console.log("Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday");
}else {
    console.log("Что-то пошло не так:(");
}

//через switch
switch(lang){
    case "ru": console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"); break;
    case "en": console.log("Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"); break;
    default: console.log("Что-то пошло не так:(");
}

//через массив
let array = {
    "ru": ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    "en": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
console.log(array[lang]);

//имена
let namePerson= "Артем";
let result = (namePerson === "Артем") ? "Директор": (namePerson ==="Александр") ? "Преподаватель" : "Студент";
console.log(result);