let lado = false
// false = esquerda = sign up
// true = direita = log in

function login_sist(){
    const square = document.getElementById('forms_SignUp'); /*Essa linha terá melhores explicações no README*/
    const bnt_login = document.getElementById('Li_bnt');
    const bnt_signup = document.getElementById('Su_bnt');
    const type_h1 = document.getElementById('type_h1');
    const bnt_acesso = document.getElementById('continue');
    const desc = document.getElementById('detalhe');
    const area = document.getElementById('area');
    console.log("");
    if(lado == false){
        square.style.animationName = 'login_frame';
        square.style.animationPlayState = 'running';
        bnt_login.style.backgroundColor = 'rgb(0, 154, 62)';
        bnt_signup.style.backgroundColor = 'transparent';
        type_h1.innerHTML="Log In";
        bnt_acesso.innerHTML = "Log In";
        desc.innerHTML = "Favor inserir os dados usados na criação da contaaaaaaaaaaaaa";
        // Fazer mudar para Log_In o html

        
        
        
        lado = true;
    }
}





function signup_sist(){
    const bnt_signup = document.getElementById('Su_bnt');
    const bnt_login = document.getElementById('Li_bnt');
    const square = document.getElementById('forms_SignUp');
    const type_h1 = document.getElementById('type_h1');
    const bnt_acesso = document.getElementById('continue');
    const area = document.getElementById('area');
    const desc = document.getElementById('detalhe');
    if(lado == true){
        square.style.animationName = 'signup_frame';
        square.style.animationPlayState = 'running';
        bnt_signup.style.backgroundColor = 'rgb(0, 154, 62)';
        bnt_login.style.backgroundColor = 'transparent';
        type_h1.innerHTML="Sign Up";
        bnt_acesso.innerHTML = "Sign Up";
        desc.innerHTML = "Favor não usar informações reais para criação de conta";
        
        // Fazer mudar para Sign_Up o html

        lado = false;
    }
}



