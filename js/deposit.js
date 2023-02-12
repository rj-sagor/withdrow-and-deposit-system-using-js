//  step-1 add evenleterner in deposit button 
 document.getElementById('deposit-button').addEventListener('click',function(){
    // step-2 get deposit value in deposit inpur area
    // note when use input and texarea then use .value to get the input value
 const depositFieldElement=document.getElementById('deposit-feild');
 const depositAmountString=depositFieldElement.value;
//  consvrt string to float
 const NewdepositAmount=parseFloat(depositAmountString);
//  step-3 get current deposti
// note non input and texarea field get value using innertext
  const depositCurrentvalue=document.getElementById('depost-currenvalue');
  const perviousdepositTotalString=depositCurrentvalue.innerText;
//   convart string to number or float
  const NewdepositTotal=parseFloat(perviousdepositTotalString)
//   new value and pervius valu concat
 const currenDepositTotal=NewdepositTotal + NewdepositAmount;
 depositCurrentvalue.innerText=currenDepositTotal

//  step-4 get balance vlaue calculation
const balanceCurrentElement=document.getElementById('curren-balance');
const BalanceCurrentString=balanceCurrentElement.innerText;
// convart string to number or float
const CurrentBlanaceAmount=parseFloat(BalanceCurrentString);
//  curren total valu concat new deposti value
const NewCurrenTotalBalance=CurrentBlanaceAmount + NewdepositAmount;
balanceCurrentElement.innerText=NewCurrenTotalBalance
//   step-5 clear value
 depositFieldElement.value="";

})

