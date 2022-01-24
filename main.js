// xóa các phần tử  trùng trong mảng

var array = ['a','b','c','a','b','c']
console.log([...(new Set(array))]);