
// {
//  let a=5
//  console.log(a)
// }
// console.log(a)


// var a=5
// if(true){
//     var a=6
//     console.log(a)

// }

//HiGHER ORDER FUNCTION
// function outer(a){
//     console.log('outer')
//     a()
// }
//  function inner(){
//     console.log('inner')
//  }
//    outer(inner)

function outer(){
    console.log('outer')
      function inner(){
        console.log('inner')
      }
      return inner
}
 
let inner= outer()
 inner()














