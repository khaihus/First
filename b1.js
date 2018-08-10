// const
// let
// var

//cách 1:
// functionName(5);
// function functionName(age) {
//     console.log("Age: "+age);
// }

//Cách 2:
// const functionName = function(age){
//     console.log(age);
// }

//cách ngắn hơn (của phiên bản js6 - ES6)
// const fname(age) =>...

//----------------------------------------------------------------------------------

// var a= 6;
// function print(){
//     var b = 10;

//     console.log(a);     //6
//     console.log(b);     //10
// }
//     console.log(a);     //6

//     console.log(global.a);  //if want to use global.a, have to delete "var" before a
//     console.log(b);     //undefined

// print();//run this func

//----------------------------------------------------------------------------------
//                                  For loop

//*Note: for is not a function ?!

//          in ra 5 4 3 2 1

// function count(num){
//     for(var i= num; i>=0;i--){   
//         console.log(i);
//     }
// }

//          dùng hàm tạo độ trễ

//cách 1:
// function count(num){
//     for(let i= num; i>=0;i--){   
//         setTimeout(function() {     // set Time out delay
//             console.log(i);
            
//         }, 1000*(num - i));
//     }
// }

//cách 2:
// function print(num,time){
//     setTimeout(function()  {
//         console.log(num);
//     }, 1000*time);
// }

// function count(num){
//         for(var i= num; i>=0;i--){   
//             print(i,num-i);
//         }
//     }


// count(5);

//----------------------------------------------------------------------------------
//                  Function as an object

// function aRose(){
//     console.log("cc");
// }
// var 

//----------------------------------------------------------------------------------
//                  Async
function printA(){
    setTimeout(function() {
        console.log("A");
    }, 1000*5);
}

function printB(){
    console.log("B");
}

printA();
printB();
// sẽ in ra B trước A   
//(setTimeout không phải của js => phải chờ lệch khác thực thi đã rồi mới dc chạy)

//Khắc phục: dùng callback
