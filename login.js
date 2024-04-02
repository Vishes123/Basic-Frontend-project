//Validation Code For inputs

var Email= document .forms['form']['Email'];
var Password= document .forms['form']['Password'];

var Email= document .getElementById('Email_error')
var Password= document .getElementById('Password_error')

function Validation(){
    if (Email.valu.lenth < 9){
        Email.style.border ="1px solid red";
    }

}