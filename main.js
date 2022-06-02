
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

showMessage2();

function showMessage () {
    console.log("declaration function" );
}

var showMessage2 = function (){
        console.log("expression function");
}
// declaration function có thể được gọi trước khi được định nghĩa 
//expresstion Function không được hosting không thể gọi được trước khi được định nghĩa 