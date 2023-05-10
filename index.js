let username=document.getElementById("username");
let password=document.getElementById("password");

let flag=1;

function validform(){
    if(username.value==""){
        document.getElementById("userError").innerHTML="empty username";
        flag=0;
    }else if(username.value.length<3){
        document.getElementById("userError").innerHTML="min 3 char required";
        flag=0;
    }else{
        document.getElementById("userError").innerHTML="";
        flag=1;
    }

    if(password.value==""){
        document.getElementById("passError").innerHTML="empty password";
        flag=0;
    }else{
        document.getElementById("passError").innerHTML="";

    }

    if(flag){
        return true;
    }else{
        return false;
    }
    
}

