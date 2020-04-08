//  ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a  -div  -h1  -span  -input  -form  -option  -select
// Приклад результату
//  {
//                titleOfTag: 'area',
//              action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//              attrs: [
//              {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         /*     {/*some props and values*/}
// {/*...*/},
// {/*...*/},
// ]
// }


function Tag(property,tagName,describeTag,TagAtributes){
    this.property=property;
    this.tagName=tagName;
    this.describeTag=describeTag;
    this.TagAtributes=TagAtributes;

}
function Atributes( atributesName,atributesDescribe) {
this.atributesName=atributesName;
this.atributesDescribe=atributesDescribe;
}

propertyA="Тег 'a' является одним из важных элементов HTML и предназначен для создания ссылок." ;
tagNameA="a";
describeA=" В зависимости от присутствия атрибутов name или href тег 'a' устанавливает ссылку или якорь." +
    " Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. " +
    "При использовании ссылки, которая указывает на якорь," +
    " происходит переход к закладке внутри веб-страницы.";

let atributes1DescribeA="Задает адрес документа, на который следует перейти.";
let atributes2DescribeA="Устанавливает имя якоря внутри документа";

 let AtributHref=new Atributes("href",atributes1DescribeA);
 let AtributName=new Atributes("href",atributes2DescribeA);
 let TagNameA=new Tag(propertyA,tagNameA,describeA,[AtributHref,AtributName]);


let propertyDiv="Элемент div является блочным элементом" ;
let tagNameDiv="div";
let describeDiv="предназначен для выделения фрагмента документа с целью изменения вида содержимого.";

let atributes1DescribeDiv="Задает выравнивание содержимого тега 'div'.";
let atributes2DescribeDiv="Добавляет всплывающую подсказку к содержимому";

let AtributAlign=new Atributes("align",atributes1DescribeDiv);
let AtributTitle=new Atributes("title",atributes2DescribeDiv);
let TagNameDiv=new Tag(propertyDiv,tagNameDiv,describeDiv,[AtributAlign,AtributTitle]);



 let propertyH1="тег 'h1' представляет собой наиболее важный заголовок первого уровня" ;
let tagNameH1="h1";
let describeH1=" заголовок первого уровня отображается самым крупным шрифтом жирного начертания";

let atributes1DescribeH1="Скрывает содержимое элемента от просмотра..";
let atributes2DescribeH1="Применяется для определения стиля элемента с помощью правил CSS.";

let AtributHidden=new Atributes("hidden",atributes1DescribeH1);
let AtributStyle=new Atributes("style",atributes2DescribeH1);
let TagNameH1=new Tag(propertyH1,tagNameH1,describeH1,[AtributHidden,AtributStyle]);



let propertySpan="Тег 'span' предназначен для определения строчных элементов документа." ;
let tagNameSpan="span";
let describeSpan=" В отличие от блочных элементов, таких как 'table', 'p' или 'div'," +
    " с помощью тега 'span' можно выделить часть информации внутри других тегов" +
    " и установить для нее свой стиль.";

let atributes1DescribeSpan="Определяет имя класса, которое позволяет связать тег со стилевым оформлением.";
let atributes2DescribeSpan="Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.";

let AtributClass=new Atributes("class",atributes1DescribeSpan);
let AtributAccesskey=new Atributes("accesskey",atributes2DescribeSpan);
let TagNameSpan=new Tag(propertyH1,tagNameH1,describeH1,[AtributClass,AtributAccesskey]);



let propertyInput="Тег 'input' является одним из разносторонних элементов формы и " +
    "позволяет создавать разные элементы интерфейса " +
    "и обеспечить взаимодействие с пользователем" ;
let tagNameInput="input";
let describeInput=" Главным образом 'input' предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. " +
    "Хотя элемент 'input' не требуется помещать внутрь контейнера 'form', определяющего форму, " +
    "но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа," +
    " то указывать 'form' обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, " +
    "скриптов на языке JavaScript.";

let atributes1DescribeInput="Он позволяет задавать следующие элементы формы: текстовое поле (text)," +
    " поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), " +
    "кнопка (button), кнопка для отправки формы (submit)," +
    " кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image).";
let atributes2DescribeInput="Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.";

let AtributType=new Atributes("type",atributes1DescribeInput);
let AtributAccept =new Atributes("accept",atributes2DescribeInput);
let TagNameInput=new Tag(propertyInput,tagNameInput,describeInput,[AtributType,AtributAccept]);



let propertyForm="Связывает поле с формой по её идентификатору." ;
let tagNameForm="form";
let describeForm=" Такая связь необходима в случае, когда поле располагается за пределами 'form'," +
    " например, при создании её программно или по соображениям дизайна.";

let atributes1DescribeForm="none";
let atributes2DescribeForm="none";

let AtributNone1=new Atributes("не написано",atributes1DescribeForm);
let AtributNONE2 =new Atributes("не написано",atributes2DescribeForm);
let TagNameForm=new Tag(propertyForm,tagNameForm,describeForm,[AtributType,AtributAccept]);





let propertyOption="Тег 'option' определяет отдельные пункты списка, создаваемого с помощью контейнера 'select'." ;
let tagNameOption="option";
let describeOption=" Ширина списка определяется самым широким текстом, указанным в теге 'option', а также может изменяться с помощью стилей." +
    " Если планируется отправлять данные списка на сервер, то требуется поместить элемент 'select' внутрь формы." +
    " Это также необходимо, когда к данным списка идет обращение через скрипты.";

let atributes1DescribeOption="Заблокировать для доступа элемент списка.";
let atributes2DescribeOption="Указание метки пункта списка.";

let AtributDisabled =new Atributes("disabled",atributes1DescribeOption);
let AtributLabel =new Atributes("label",atributes2DescribeOption);
let TagNameOption=new Tag(propertyOption,tagNameOption,describeOption,[AtributDisabled,AtributLabel]);



let propertySelect="Тег 'select' позволяет создать элемент интерфейса в виде раскрывающегося списка," +
    " а также список с одним или множественным выбором'." ;
let tagNameSelect="select";
let describeSelect=" Конечный вид зависит от использования атрибута size тега 'select'," +
    " который устанавливает высоту списка. Ширина списка определяется самым широким текстом," +
    " указанным в теге 'option', а также может изменяться с помощью стилей. " +
    "Каждый пункт создается с помощью тега 'option', который должен быть вложен в контейнер 'select'." +
    " Если планируется отправлять данные списка на сервер, то требуется поместить элемент 'select' внутрь формы." +
    " Это также необходимо, когда к данным списка идет обращение через скрипты.";

let atributes1DescribeSelect="Устанавливает, что список получает фокус после загрузки страницы.";
let atributes2DescribeSelect="Позволяет одновременно выбирать сразу несколько элементов списка.";

let AtributAutofocus =new Atributes("autofocus",atributes1DescribeOption);
let AtributMultiple =new Atributes("multiple",atributes2DescribeOption);
let TagNameSelect=new Tag(propertySelect,tagNameSelect,describeSelect,[AtributAutofocus,AtributMultiple]);

console.log(TagNameSelect);



// -  Створити класс  для об'єкту який описує теги
// Властивості
// назва тегу
// опис його дій
// масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// опис дії атрибуту
// нформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }


class NewTag {

    constructor(property,tagName,describeTag,TagAtributes) {
        this.property=property;
        this.tagName=tagName;
        this.describeTag=describeTag;
        this.TagAtributes=TagAtributes;

    }

}class NewAtributes  {
    constructor(atributesName,atributesDescribe) {

        this.atributesName=atributesName;
        this.atributesDescribe=atributesDescribe;
    }
}

 let TagNameA1 =new NewAtributes(propertyA,tagNameA,describeA,[AtributHref,AtributName]);
let TagNameDiv1=new NewTag(propertyDiv,tagNameDiv,describeDiv,[AtributAlign,AtributTitle]);
let TagNameH11=new NewTag(propertyH1,tagNameH1,describeH1,[AtributHidden,AtributStyle]);
let TagNameSpan1=new NewTag(propertyH1,tagNameH1,describeH1,[AtributClass,AtributAccesskey]);
let TagNameInput1=new NewTag(propertyInput,tagNameInput,describeInput,[AtributType,AtributAccept]);
let TagNameForm1=new NewTag(propertyForm,tagNameForm,describeForm,[AtributType,AtributAccept]);
let TagNameOption1=new NewTag(propertyOption,tagNameOption,describeOption,[AtributDisabled,AtributLabel]);
console.log(TagNameA1);


// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


function Car(model,producer,yearOfIssue,maxSpeed,vMotor){
    this.model=model;
    this.producer=producer;
    this.yearOfIssue=yearOfIssue;
    this.maxSpeed=maxSpeed;
    this.vMotor=vMotor;
        this.drive=function drive(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);}
      this.info= function info() {

          let j=  JSON.stringify(this.model+" ," +this.producer+","+this.yearOfIssue+","+this.maxSpeed+","+this.vMotor);
          console.log(j);
      }
      this.increaseMaxSpeed=function increaseMaxSpeed (newSpeed) {
          return this.maxSpeed+newSpeed
      }
      this.changeYear= function  changeYear (newValue){
          this.yearOfIssue=newValue;
      }
      this.addDriver=function addDriver (driver){

          return this.driver= driver;

  }
}
let Mustang=new Car("Mustang","GMC",1969,300,'3l');
console.log(Mustang.increaseMaxSpeed(500));


function Driver(name,age,sex) {
this.name=name;
this.age=age;
this.sex=sex;
}
 let Vitya=new Driver("vitya",42,"male");
Mustang.addDriver(Vitya);
console.log(Car.driver);
console.log(Mustang);
Mustang.info();
for (const el in Mustang) {
    document.write(el );
    document.write('<br>');
}
Mustang.drive();


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


class NewCar{
    constructor(model,producer,yearOfIssue,maxSpeed,vMotor) {
        this.model=model;
        this.producer=producer;
        this.yearOfIssue=yearOfIssue;
        this.maxSpeed=maxSpeed;
        this.vMotor=vMotor;
    }
    drive(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);}
    info() {

        let j=  JSON.stringify(this.model+" ," +this.producer+","+this.yearOfIssue+","+this.maxSpeed+","+this.vMotor);
        console.log(j);
    }
   increaseMaxSpeed (newSpeed) {
        return this.maxSpeed+newSpeed
    }
      changeYear (newValue){
        this.yearOfIssue=newValue;
    }
     addDriver (driver){

        return this.driver= driver;

    }
}
let Lada=new NewCar("priora","vaz",2010,130,1.6);
Lada.addDriver({name:"georgiy",age:62});
console.log(Lada);


// створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella{

    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize

    }
}
class Prince{
    constructor(name,age,sizeOfFoundShoe) {
        this.name=name;
        this.age=age;
        this.sizeOfFoundShoe=sizeOfFoundShoe

    }
}
function randomName() {
    let text = "";
    let possible = "ABCoDEFaGHIJeKLMNOePQaRSTeUVWXaYZabcadefguhijkolmnaopqrastuviwxiyz";

    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function randomAge(){ return Math.floor(Math.random()*(25-16)+16);}
function randomSize(){ return Math.floor(Math.random()*(45-34)+34);}
    let arrayOfCinderella=[];
while (arrayOfCinderella.length<10){
arrayOfCinderella.push(new Cinderella(randomName(),randomAge(),randomSize()));
}
let Prince1=new Prince(randomName(),randomAge(),randomSize());

console.log(arrayOfCinderella);
console.log(Prince1);
let count=0;
 let luckyCinderellas=[];
for (let element of arrayOfCinderella) {
    if (Prince1.sizeOfFoundShoe === element.footSize) {
        count++;
        luckyCinderellas.push(element);
    }
}
    if(count>=1){
let l= luckyCinderellas[Math.floor(Math.random()*(count))];
      console.log(  l.name  +" охомутала принця "+Prince1.name+" "+l.footSize +" розміром ноги")

    }
    else{console.log("не судьба знайти свою попелюшку")}

// створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Cinderel(name,age,footSize) {
    this.name=name;
    this.age=age;
    this.footSize=footSize
}
    let arr=[];
for (let i = 0; i <10 ; i++) {
   arr.push(new Cinderella(randomName(),randomAge(),randomSize()))
}
    function Princik(name,age,sizeOfFoundShoe) {
        this.name=name;
        this.age=age;
        this.sizeOfFoundShoe=sizeOfFoundShoe;
        this.finderOfCinderellas=function (array) {
            for (let i = 0; i < arr.length; i++) {
                if(this.sizeOfFoundShoe===arr[i].footSize){
                   console.log (this.name+" i "+arr[i].name);
                }


            }

        }
    }
let Princik1=new Princik("Vasylko",92,37);
Princik1.finderOfCinderellas(arr);