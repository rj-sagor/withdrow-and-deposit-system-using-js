document.getElementById('withdraw-button').addEventListener("click",function(){
    // step-1
    const newWithdrawfield=document.getElementById('withdraw-feild');
    const newWithdrawAmountString=newWithdrawfield.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
    // step-2
    if(isNaN(newWithdrawAmount)){
        alert("please input your blance")
        return;
    }
    // step-5
    const currenWithdrawfield=document.getElementById('curren-withdraw');
    const currenWithdrawAmountString=currenWithdrawfield.innerText;
    const currenWithdrawAmount=parseFloat(currenWithdrawAmountString);
    // step-3
   const  newWithdrawTotalAmount=currenWithdrawAmount+newWithdrawAmount
   currenWithdrawfield.innerText=newWithdrawTotalAmount

//    step-4
const currentBlanceField=document.getElementById('curren-balance');
const currentBlanceString=currentBlanceField.innerText;
const currentBlanace=parseFloat(currentBlanceString);

if(currentBlanace<newWithdrawAmount){
   alert("ok");
}else{
    const NewBalanceAfterWithdraw=currentBlanace-newWithdrawAmount;
    currentBlanceField.innerText=NewBalanceAfterWithdraw;
}

// step-
   newWithdrawfield.value=""

})