function dispMessage(){
    // a=10
    // b=20
    // c=a+b
    //alert("Hello");
    // alert("Sum is "+c);
    // alert(document.getElementById("txtEmail").value);
    //lblMessage.innerHTML=document.getElementById("txtEmail").value+","+document.getElementById("txtPassword").value;
    let email=document.getElementById("txtEmail").value;
    let password=document.getElementById("txtPassword").value;
    if(email==="prag@gmail.com"&&password==="1234"){
        lblMessage.style.color="green";
        lblMessage.innerHTML="Login Successful";
    }
    else{
        lblMessage.style.color="red";
        lblMessage.innerHTML="Login Failed";
    }
}