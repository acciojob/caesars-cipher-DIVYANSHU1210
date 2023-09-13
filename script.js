// Your Script here.

  function rot13(encodedStr) {
    let decodedArr = []; // Your Result goes here
  
      for (let i = 0; i < encodedStr.length; i++) {
          let c = encodedStr.charAt(i);
          
          if (c!= " "){
              decodedArr.push(lookup[c])
          }
          else{
              decodedArr.push(c);
          }
      }
      
    // Only change code below this line
  
    return decodedArr;
  }
  
  // You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
  
  // console.log(rot13("SERR YBIR? NPPVBWBO"));
  
  // Do not change this line
  window.rot13 = rot13;