//  step-1 add event listener in click button get data
 document.getElementById("user-button").addEventListener('click',function(){
    // step-2 get user email in input feild
    // ste-2.1 email value get into email
    const emailFeild=document.getElementById("user-email");
    const email=emailFeild.value
    // console.log(email);
    //    step-3 a get password value in password feild
    const passwordFeild=document.getElementById("user-password");
    const password=passwordFeild.value;
    // step-4 macth the value input and server
    // note it just using examiple but thats not right way to match
    if(email==="sagor@gmail.com" && password==="sagor"){
        window.location.href="bank.html"
    }else{
        alert("your email and password is in correct")
    }
    
 
})