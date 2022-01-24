// // alert('hi! javascript')

// // var fullName='le Gia Giang';
// // console.warm(fullName)


// // var a  = 1 ;
// // var b = 2 ;
// // if(a==b ){
// //     alert('sai');
// // }


// // //number type 
// // var a= 1 ; 
// // var b = 2; 
// // var c = 4.5;

// // //string type 
// // var fullName = 'Giang Gia'

// // //boolean type 
// // var isSuccess = true ;

// // //Undefined type 
// // var age;

// // //Null 
// // var isNull = null; //nothing

// // //Symbol 

// // var id =Symbol('id') ; //unique
// // var id2 = Symbol('id'); //unique

// // //Function
// // var myFunction = function(){
// //     alert('hi! anh em ')
// // }

// // //Object types
// // var myObject = {
// //     name: 'Giang Le',
// //     age : 20,
// //     adress: 'Thanh hoa',
// //     myFunction: function(){

// //     }
// // };

// // var myArray = [
// //     'javarscrip',
// //     'php',
// //     'Ruby',
// // ];
// // console.log(typeof myArray)

// // console.log(Boolean(1))
// // console.log(Boolean(['BMW']))
// // console.log(Boolean({name:'Ricciardo'}))

// // console.log(!!'he')

// // console.log(!!1)

// // console.log(!!false) // false
// // console.log(!!0) // false
// // console.log(!!'') // false
// // console.log(!!null) // false
// // console.log(!!undefined) // false
// // console.log(!!NaN) // false

// var a = 1; 
// var b = 2 ; 

// var resull = 'A' && 'B' &&'C' &&'D';
// console.log(resull);

// if(resull){
//     console.log('dieu kien dung');
// }else{
//     console.log('dieu kien sai')
// }

// var result =  'B' || 'C' || 'D';
// console.log('result', result)



// // 1.tạo chuỗi 
// // 2.một số case sử dụng backslash (\)
// // 3. xem độ dài chuỗi (length)
// // 4. chú ý độ dài viết code "" + ""
// // 5. template string ES6

// // var fullName = 'gia giang';



// // var fullCau = "day la dau \\";

// // console.log(fullCau)


// var firstName = 'Gia';
// var lastName = 'Giang';
// console.log(`toi la: ${firstName} ${lastName}`);


// function increase(number) {
    
//     number = number + 2
//     // không sửa phần dưới này
//     return number 
// }

// increase(6)

// làm việc với chuỗii 

// var myString = ' Hoc JS tai JS JS f8!    '; 
// Keyword: Javascript string methods 

// 1. length 
// console.log(myString.length)

// 2. find index 
// console.log(myString.lastIndexOf('JS'))    

// 3. cut String
// console.log (myString.slice(-3 , -1))

// 4. replace
// console.log(myString.replace(/JS/g, 'Javascript'))

// 5. convert to upper case 

// console.log(myString.toUpperCase())

// 6. convert to lower case 
// console.log(myString.toLowerCase())

// 7. trim loại boe khoảng trắng hai đầu 
// console.log(myString.trim().length)

// 8. split
// var languages = 'Javascript, inthe, cais';

// console.log(languages.split(', '))

// 9. get a character by index 

// const myString2 = 'Gia Giang';

// console.log( myString2.charAt(5))

// var strings = 'Học Javascript tại F8'

// console.log(strings.slice(3 , 15))

// var age = 18; 
// var PI = 3.24;

// var myString = PI.toString();

// console.log(myString)
// try {
//     // const PI = 3.141592653589793;
//     // PI = 3.14;
//     throw new Error("nội dung lỗi của tôi ")
//   }
//   catch (err) {
    
//     console.log(err.message);
//   

// làm việc với array 

// 1. to String
// 2. Join
// 3. pop
// 4. push 
// 5. shift 
// 6. unshift
// 7. Splicing 
// 8. Concat 
// 9. Slicing



// function writelog(message){
//     console.log(message);
// } 
// writelog("giagiang");
// writelog("cais gif")



// var myinfor = {
//     name : 'gia giang',
//     age : '19', 
//     address : 'thanh hoa , vn'
// };
// myinfor.email = 'legiagiang@yahoo.com'

// console.log(myinfor)



// function User (firstName, lastName,avatar){
//     this.firstName = firstName;
//     this.lastName =  lastName;
//     this.avatar = avatar ; 

//     this.getName = function() {
//         return`${firstName} ${lastName}`
//     }
// }
// User.prototype.clasName = 'facebook'
// User.prototype.getClassName = function(){
//     return this.getClassName;
// }
//     var fouder = new User('gia', 'giang' , 'avatar'); 
//     var mamber = new User('ca', 'tram', 'avatar');

//     fouder.caimoi=('roi toi luon');
//     mamber.caigi = ('bay mau');
  

// console.log(fouder.getName());
// console.log(mamber);


// var date  = new Date();

// var year = date.getFullYear();
// var month = date.getMonth();
// var day = date.getDay();


// console.log(` ${year}/${month}/${day}`)


// var date  = 3; 
// if (date === 2 ){
//     console.log('hôm nay là thứ 2');
// }else if (date === 3){
//     console.log ('hôm nay là thứ 3'); 
// }else if (date === 4){
//      console.log('hoom nay laf thuws 4')
//     }

// var date = 2 ; 
//  switch (date){
//      case 1 : 
//         console.log( 'hôm nay là mùng một');
//         break;
//      case 2 :
//         console.log('hôm nay là mùng hai');
//         break; 

//  }

// toán tử ba ngôi  
// var giang =  { 
//    name : 'javascripat',
//    coin : 0 
// }
// if (giang.coin>0){
//    console.log(`${giang.coin} Coins`);
// }else{
//    console.log('mien phi');
// }
// var result  =  giang.coin > 0 ? `${giang.coin} coins`: 'mien phi';
// console.log(result);


// for loop
// var myArray = [
//    'js',
//    'python',
//    'php',
//    'ruby'
// ]
// var Arraylength  = myArray.length

// for (var i = 1 ; i < Arraylength ; i ++){
//    console.log(myArray[i]);
// }

// for in 
// object
// var myInfo = { 
//    name : 'giang',
//    age : 19 , 
//    address : ' thanh hoa'
// };
// for (var key in myInfo ){
//    console.log(typeof key);
// }

// array 

// var languages = [
//    'java',
//    'php',
//    'python'
// ]
// for (var key in languages){
//    console.log(key)
// }

// chuỗi 

// var mystring = 'giagiang' 
// for (var key in mystring){
//    console.log(mystring[key])
// }

// for of 
// mảng 
// var languages = [ 
//     'javascript',
//     'php',
//     'java'
// ]
// for (var key of languages){
//     console.log(key)
// }

// chuỗi 

// var mystring = 'languages';{
    
//     for (var value of mystring){
//         console.log(value)
//     }
// }

// var myinfo = { 
//     namne : 'giang',
//     age: 99

// }; 
// // for(var value of Object.keys(myinfo)){
// //     console.log(value)
// // }

// console.log(Object.values(myinfo))


// var myArray = [
//     'giang', 
//     'final',
//     'btec',
//     'thag 5 ra duowcj truowcng vaf ddi lamf'
// ];
// var i= 0 ; 
// while (i < myArray.length){
//     console.log(myArray[i]);
//     i++;
// }


// do while 
// var i = 0 ;
// do {
//     i++;
//     console.log (i); 
// }while (i<10);
// var i  = 0 ;
// var isSuccess = false ; 

// do {
//     i++;
//     console.log('nap the lan mot ' + i);

//     //thanh cong 
//     if  (false){
//         isSuccess = true ;         
//     }
// }while (!isSuccess &&  i >= 3);


// break and continue

// for ( var i = 0  ; i < 10 ; i++){
//     console.log(i)
//     if ( i >= 5){
//         break;
//     }
    
// }]


// continue

// for (var i = 0 ; i < 10 ; i++){

//     if ( i%2 !== 0 ){
//         continue;
//     }
//     console.log(i)
// }

// nested loop


// var myArray =  [
//     [ 1,2],
//     [ 3,4],
//     [ 5,6]
// ]
// for (var i = 0  ; i < myArray.length; i++){
//     for ( var a = 0 ; a < myArray[i].length;  a++)
//     console.log(myArray[i][a]);
// }

// làm việc với mảng p2
 
var courses = [
    {
        id : 1 ,
        name: 'Javascript',
        coin: 250 
    },
    {
        id : 2 ,
        name: 'html , css',
        coin: 0  
    },
    {
        id : 3 ,
        name: 'Ruby',
        coin: 0 
    },    {
        id : 4 ,
        name: 'php',
        coin: 400 
    },    {
        id : 5 ,
        name: 'ReactJS',
        coin: 500 
    },    {
        id : 6,
        name: 'python',
        coin: 600 
    },
];
// forEeach 
// courses.forEach(function(courses, index){
//     console.log(index, courses)
// });

courses.every(function(courses,index){
        return courses.coin === 0 ;
});



