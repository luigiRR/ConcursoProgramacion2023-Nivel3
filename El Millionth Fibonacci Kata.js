function fib(n) {
  let number;
  
  if(n<0) {
    n = n*-1;
    number = (fibbonacci(n-2) + fibbonacci(n-1)) *-1;             
    
  }else number = fibbonacci(n+2) - fibbonacci(n+1);     
  
  return number < 2000000 ? BigInt(number): false;
}

function fibbonacci(n){
  if(n == 0 || n ==1) return n;
  return n <= 1 ? n : fibbonacci(n - 1) + fibbonacci(n - 2);
}
