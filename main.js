// Array methods;
// forEach()
// evary()
// some()
// find()
// filter()
// map()
// reduce ()

var courses = [
    {
        id: 1,
        name: 'php',
        coin : 1
    },
    {
        id: 2,
        name: 'javascript',
        coin : 2
    },
    {
        id: 3,
        name: 'html,css',
        coin : 10
    }, {
        id: 4,
        name: 'reactJs',
        coin : 4
    }, {
        id: 5,
        name: 'Ruby',
        coin : 9
    },
];
// forEach
// courses.forEach(function(courses,index ){
//         console.log(index,courses);
// });

// every 
// var isFree = courses.every(function(courses,index){
//     // console.log(index)
//     return courses.coin === 0 ;
// });
// console.log(isFree);

// some
// var isFree = courses.some(function(courses, index){
//     console.log(index);
//     return courses.coin ===0 ;
// });
// console.log(isFree);


//find
var course = courses.find(function(course, index){
    return course.name === 'javascript'; 
});
 
console.log(course);