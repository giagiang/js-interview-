
// toán tử số học  arithmetic 
// toans tử gán - assignment 
// toán tử so sánh  - comparison
//toán tử logic -  ligical 

// var a = 1  ; 
// var b = 2 ; 
// if (a> 0 && b> 1){
//     alert ( 'dung'  );
// }
 


// toán tử số học  
// +  --> cộng 
// - --> trừ 
// * -->nhân
// ** --> lũy thừa 
// / --> chia 
// % --> chia lấy số dư
// ++ --> tăng một giá trị của số 
// -- --> giảm một giá trị của số 


// var a =  5 ; 
// var b = 2 ; 

// var c  = a ++ b ;
// console.log(c);


// tăng lên một giá trị của số 

// var a = 10 

// a -- ;
// console.log(a)


// toán tử nối chuỗi 

// var firstName = 'giang';
// firstName += 'gia';
// console.log (firstName );




// toán tử so sánh 


// var  a= 1 ;
// var b = 2 ;

// if (a < b ){
//     console.log('điều kiện này chạy sai rồi ');
// }else{
//     console.log('điều kiện này chạy đúng rồi ')
// }



// kiểu dữ liệu Boolean

// var a = 1 ;
// var b = 2 ;

// var isSuccess = a >  b ; 
// console.log( isSuccess);




// // câu lệnh if else 
// var isSuccess = 2 > 1 ;
// if (isSuccess){
//     console.log ('điều khiển đúng ');
// }else{
//     console.log('điều kiển sai ');
// }

// //toán tử logical 
// 1 &&  - and 
// 2. || - or  
// 3. !  - not 


// var a = 1 ;
// var b = 2 ;
// var c = 3 ;

// if(!(a < 0 )){
//     console.log('điều kiện đúng !');
// }


// kiểu dữ liệu trong javascript

// 1. dữ liệu nguyên thủy - primitive Data 
// - number 
// -string 
// - boolean 
// -undefined 
// -null 
// -symbol

// 2. dữ liệu phức tạp  - complex data  
// - function 
// - object 

  
// var myFunction = function()  {
//      alert('hi, chào cậu ');
// }
// // myFunction();

// var myObject = { 
//     name : 'gia giang',
//     age : 19 ,
//     address: 'hà nội ',
//     myFunction: function(){
//     }
// }; 
// console.log('myObject', myObject);

// var myAray = [
//     'javascript',
//     'ruby',
//     'php',
// ];


// toán tử so sánh  

// ===
// !==
// /

// var a  =  1;
// var b  = '1' ;

// console.log(a === b);
// khi sử dụng === thì nõ sẽ so sánh cả value và datatype


// var  a = 1 ;
// var  b = '1';
// console.log(a !== b );



// hàm (fuction) trong javascript
// 1hàm
// - hàm là một khối mã 
// - làm một việc cụ thể 
// 2 loại hàm 
// -  Built-in 
// - tự định nghĩa 
// 3 tính chất 
// - không thực thi khi định nghĩa 
// - sẽ thực thi khi được gọi 
// - có thể nhận tham số 
// - có thể trả về một giá trị 
// 4 tạo hàm đầu tiên 



// function giangday(){
//    alert('liêm luônn'); 
// }
// giangday();





// tham số hàm cơ vản trong javascript
// 1 tham số ?
// - định nghĩa ? 
// - kiểu dữ liệu ?
// - tính private?
// - 1 tham số ??
// - nhiều tham số ? 

// 2. truyền tham số 
// - 1 tham số 
// - nhiều tham số 

// 3 Arguments?
// - đối tượng arguments
// - giới thiệu vòng for 


// function writeLog ( massage ){
//     console.log(typeof massage)
// }
// writeLog (123)
// có thể truyền mọi kiểu dữ liệu miễn sao đúng cú pháp


// function writeLog ( message , mesages2){
  
//     if ( message){
//         console.log(message)
//     }
//     if ( mesages2){
//         console.log(mesages2)
//     } 
// }
// writeLog ('test2');


// 3 arguments and for of 


// function writeLog() {
//     var myString = '';
//     for ( var  giang of arguments){
//         myString += `${giang} +`
//     }
//     console.log(myString)
// }
// writeLog('giaignangas', 'gasnasd', 'sfsafsa','asdasdasd')


// hàm return

// function cong (a,b){
//     return(a+b);
// }
// var result  = cong(3,4);
// console.log(result)


// toString hàm chuyển đổi từ hàm thành chuỗi 
// function cong ( a,b){
//     return a.toString() + b.toString();

// }
// var result  = cong (5,6);
// console.log(result)






// một số điều kiện của function 
// 1. khi function trung tên 

// function showMessage(){
//     console.log('message 1');
// }

// function showMessage(){
//     console.log('message 2');
// }

// showMessage();
// khi định nghĩa ra hai function trùng tên thì cái function định nghĩa sau thì nó sẽ ghi đè lên function trước 

// 2 khai báo biến trong hàm 

// function showMessage(){
//      var int = 50 ;
//      console.log(int);
// }
// showMessage();
// 3. định nghĩa trong hàm ?


// function showMessage(){
//     function showMessage2(){
//         function showMessage3(){
//             console.log("ddsadasd");
//         }
//         showMessage3();
//     }
//     showMessage2();
// }
// showMessage();



// các loại function 
//  1. declaration  function 
// 2. expression function
// 3. arrow function    

// showMessage2();

// function showMessage () {
//     console.log("declaration function" );
// }

// var showMessage2 = function (){
//         console.log("expression function");
// }
// declaration function có thể được gọi trước khi được định nghĩa 
//expresstion Function không được hosting không thể gọi được trước khi được định nghĩa 



// String chuỗi tron js
// 1 tạo chuỗi 
// - cách tạo chuỗi 
//  var fullName = 'cách tạo chuỗi';
//  var fullName = new String ('cách tạo chuỗi 2');
//  console.log(typeof fullName);
// - nên dùng cách nào ? lý do ?
// - kiểm tra datatype 
// 2 một số case sử dụng backlish (\)

// var fullName =  'case backlish trong \'javascript\'';
// var fullName =  'day la backlish \\';
// console.log(fullName);

// 3 xem độ dài chuỗi 

// var fullname = 'giagiang';
// console.log(fullname.length);
// 4 chú ý độ dài khi viết code 
// var fullName= " một số  case sử dụng backlish"
// + "1. một số case sử dụng backlish" ;
// +"2. một số case sử dụng backlish ";
// + "3. một số case sử dụng backlish ";
// console.log(fullName.length);

// 5 template string ES6 
// var firstName= 'gia';
// var  lastname= 'giang';
// console.log(`tôi là : ${firstName} ${lastname}`); 


// làm việc với chuỗi 
// 1 length 

// var string = "       độ dài là của văn bản của tôi là bao nhiêu JS      ";
// console.log(string.length);
// 2 find  index 
// console.log(string.indexOf('là',10));
// console.log(string.lastIndexOf('là'));
// console.log(string.search("là")); dùng search sẽ tìm kiếm là kí tự được xuất hiện đầu tiên 
//search không hỗ trợ biểu thức thứ hai khi chúng ta nhấp ('là')
// 3 cut string
// console.log("chuỗi tôi muốn cắt là: " + string.slice(5,43 ));
// console.log("tôi sẽ chuyền chuỗi số âm và cắt từ cuối lên :" + string.slice(-30,-1 ));
// console.log("tôi sẽ chuyền vào một tham số thì nó sẽ cắt từ vị trí đó tới cuối :"+ string.slice(12))
// 4 replace 
// console.log("chuỗi mà tôi muốn thay thế là "+ string.replace("là", "javascript"));
// console.log("chuỗi mà tôi muốn thay thế là "+ string.replace(/là/g, "javascript"));dùng biểu thức chính quy ta /là/g, tên hàm thay thế 

// 5 convert touppercase 
// console.log("hàm này để in hoa các chữ cái bên trong chuỗi:" + string.toUpperCase());
// 6 convert to lower case  
// console.log("hàm này sẽ trả về chuỗi tring in thường: " + string.toLowerCase());
// 7 trim 
// console.log("tôi sẽ thực hiện xóa khoảng trắng dư thừa trong chuỗi trên :" + string.trim().length);
// 8 split 
// var language  = "javascript, ruby, typeScript, PHP";
// console.log( language.split(", "))"tôi sẽ chia một chuỗi thành một mảng con: "
// 9 get a character  by index 
// const string = 'gia giang' ;
// console.log(string.charAt(1))


// var g = `giasifasnfsaf`;
// console.log(g.indexOf);



// let str = "42";
// Number.parseInt(str);

// console.log(str);

// age = 13 
// console.log(age);




// var a =10 ;
// var b = 11 ; 
// var c = 12 ; 

// if (a > 9 || b > 10 && c > 11  ){
//     console.log("điều kiện đúng");
// }
// else{
//     console.log("điều kiện sai")
// }


// kiểu dữ liệu số đối đối tượng number 


// let str = "42";
// Number.parseInt(str, 10);
// console.log(str);

// Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isFinite(2/0); //false 
// Number.isFinite(20/5); //true
// Number.isFinite(0/0); //false

// Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.isInteger(999999999); // true
// Number.isInteger(0.2);       // false
// Number.isInteger(Math.PI);   // false

// Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseFloat('10') // 10
// Number.parseFloat('10.00') // 10
// Number.parseFloat('238,21') // 238
// Number.parseFloat('237.22') // 237.22
// Number.parseFloat('34 56 78') // 34
// Number.parseFloat(' 37 ') // 37
// Number.parseFloat('18 is my age') // 18

// Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.parseInt('10') // 10
// Number.parseInt('10.00') // 10


// var numberObject = 1234.56789;

// // Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// numberObject.toFixed(); // '1235'
// numberObject.toFixed(1); // '1234.6'
// numberObject.toFixed(6); // '1234.567890'

// // Chuyển đổi và trả về số đã cho dưới dạng chuỗi
// (11).toString();    // '11'
// (18).toString();     // '18'
// (17.3).toString();   // '17.3'  

// kiểu số number trong js 
// 1. tạo giá trị number  
// - các cách tạo  
// var age = 22 ;
// - dùng cách nào
// cách trên  
// - kiểm tra datatype 
// console.log(typeof(age));

// 2 làm việc với number  
// - to string 


// - to fixed 



// Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi

