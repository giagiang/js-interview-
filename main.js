
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


// mảng trong javascript - array 

// 1 tạo mangt 
//  - cách tạo 
//  - sử dụng cách nào ? taị sao ? 
//  - kiểm tra data type 
//  2 truy vấn mảng 
//  - độ dài mảng 
//  - lấy phần tử theo index 

// var language  = [
//    'javascript',
//    'PhP',
//    'Ruby',
//    'dart',
//    null , 
//    undefined, 
//    function(){

//    },
//    {},
//    123
// ];
// console.log(language);



//cách tạo thứ hai của một array 

// var language = new Array();
// var language  = [
//    'javascript',
//    'PhP',
//    'Ruby',
//    'dart',
//    null , 
//    undefined, 
//    function(){

//    },
//    {},
//    123
// ];

// console.log(Array.isArray({}))

// kiểm tra kiểu dữ liệu data type ?
//kiểm tra bình thường chúng ta sử dụng typeof[]



// làm việc với Array 

// 1. to String 

// var language = [
//    'javascript ',
//    'PHP', 
//    'Ruby'
// ];
// console.log(language.toString()) 
// phương thức này chuyển đổi mảng thành một chuỗi 

// 2. Join
// console.log(language.join(' - ')) 
// Hãy chọn mệnh đề đúng trong các mệnh đề sau?

// 3. pop 
// console.log(language.pop())
// xóa element cuối mảng và trả về phần tử đã xóa 
// console.log(language);  

// 4. push 
// console.log(language.push('java'))
// console.log(language)
// thêm phần tử vào cuối mảng  
// 5. shift 
// console.log(language.shift())
 //xóa phần tử ở đầu mảng 
// console.log(language)
// 6. Unshift 
// console.log(language.unshift())
//thêm các phần tử mới vào đầu mảng  và tính tổng các phần tử trong mảng 
// console.log(language)
// 7. splicing 
// language.splice(1,0,'dart')
// console.log(language);
// 8. Concat  

// var language2 = [ 
//    'dart', 
//    'Ruby'
// ];
// console.log(language.concat(language2))
// gộp nhiều mảng lại thành một mảng mà không làm thau đổi mảng ban đầu 

// 9. splicing
// console.log(language.slice(1,2))
// phương thức này dùng để cắt một vài elêmnt của mảng 



// const grades = [10, 14, 15]; // array (plural)
// grades.forEach(function(grade) { // array item (singular)
//     console.log(grade);
// });


// let numbers = [9, 5, 14, 3, 11];

// let numbersAboveTen = numbers.filter(function(number) {
//     return number >= 10;
// });
// console.log(numbersAboveTen); 

// let number = [2,3,4,5,6];
// let double = number.map(function(numbe){
//     return numbe * 2 ; 
// })
// console.log(double);

let names = [1,2,3,4,]
let uppername = names.map(function(name){
    return name = name * 2  ;
})
console.log(uppername);