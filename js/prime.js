// let a =0;
// for(var i=1;i<=50;i++){
//     a =0;
//     for(var j=1;j<=i;j++){
//         if(i % j == 0){
//             a = a+1;
//         }
       
//     }
//     if(a == 2){
//         console.log(`${i} is prime number`);
//     }
 
// }
function isprime(a){
  if(a<1){
        console.log(`${a} is notprime number`);

  }
  else if(a == 2){
    console.log(`${a} is prime number`);

  }
  else{
    for(var i=2;i <=a;i++){
        if(a % i == 0){
          console.log(`${a} is notprime number`);
          break;
  
        }  else{
          console.log(`${a} isprime number`);
          break;
          
  
        }
      }
     
    
    }
    
  }

isprime(113);