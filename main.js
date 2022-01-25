// // xóa các phần tử  trùng trong mảng

// var array = ['a','b','c','a','b','c']
// console.log([...(new Set(array))]);


// xác định điểm dừng
//  logic handle => tạo ra điểm dừng 
// function  Recursion(){
//     num-- ;
//     if(num < 0){
//         //dừng 
//         //...
//     }
//     Recursion();

// }
// Recursion(10);




// function countDown(num){
//     if(num>0){
//         console.log(num);
//         return countDown(num - 1);

//     }
//     return num;

// }
// countDown(3);

// bjbj


// vòng lặp (đệ quy)
// function loop(start, end , cb ){
//     if ( start <= end){
//         cb(start);
//         return loop(start + 1 ,end , cb )
//     }

// }
// var array = [ 'javascript', 'php', 'ruby '];

// loop ( 0,array.length  ,function (index){
//     console .log(array[index]);
//     console.log('index:', index);
// } );


// tính giai thừa 
 //3*2*2 = 
 // 6*5 .... *1 = 
// cách 1 
//  function giaiThua(number){
//      var output =1;
//      for (var i = number; i > 0  ; i--  ){
//         output = output * i;
//      }
//      return output;
//  }
// console.log(giaiThua(9));

// cách 2 
// giải bằng đệ quy 
// function giaiThua(number){
//     if ( number > 0 ){
//         return number * giaiThua(number - 1);
//     }
//     return 1;
// }
// console.log(giaiThua(6));


function run (x,y ){
    if ( x > y -1 ){
        return [];        
    }
    return [(x + 1), ...run(x + 1, y)];
    // x:5 ,  [6 ...run(6 , 10)]
         //x:6   [7, ...run(7, 10)]
            //x:7  [8, ..run(8, 10) ]
                //x:8  [9, ..run(9, 10) ]
                //x:9  [10 , run(10,10) == []]
                  
    
}


function run (x,y ){
    if ( x > y -1 ){
        return [];        
    }
    return [(x + 1), ...run(x + 1, y)];
    // x:5 ,  [6 ...run(6 , 10)]
         //x:6   [7, ...run(7, 10)]
            //x:7  [8, ..run(8, 10) ]
                //x:8  [9, ..run(9, 10) ]
                //x:9  [10 , run(10,10) == []]
                  
    

// console.log(run(5,10));