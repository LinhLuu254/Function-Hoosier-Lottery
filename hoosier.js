//Random Number
const lotteryNumber = function () {
    let num =  (1 + Math.floor(Math.random() * 49));

    let numberArea = document.querySelector(".number");

    numberArea.innerHTML = `Lottery number is: ${num}`;

    return(num);    
 }
 
 const getsixNumber = function(){
     let strNum = "";
     for(let i=1; i<6; i++) {
         strNum += lotteryNumber() + " ";
     }

    let numberAreaSix = document.querySelector(".sixnumber");

    numberAreaSix.innerHTML = `All Lottery Numbers: ${strNum}`;
    
    return strNum;
     
 }

 let MylotteryNumber = lotteryNumber();
 console.log("Lottery number is " + MylotteryNumber);
 
 let allNum = getsixNumber();
 console.log("All Lottery Numbers: " + allNum);