for (let i = 1; i < 100; i++) {

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    continue;
  }
  if (i % 3 == 0) {
    console.log("Fizz");
    continue;
  }
  if (i % 5 == 0) {
    console.log("Buzz");
    continue;
  }

  console.log(i);
}
//'''''''''''''''''''''''''''''''''''''''''''''SWITCH STATEMENT"""""""""""""""""""""""'''''''''''''''''''
for (let i = 1; i < 100; i++) {
  switch (i) {
    case (i % 3 == 0 && i % 5 == 0):
      console.log("FizzBuzz");
      break;
    case (i % 3 == 0):
      console.log("Fizz");
      break;
    case (i % 5 == 0):
      console.log("Buzz");
      break;
        default:
      break;
  }
}
