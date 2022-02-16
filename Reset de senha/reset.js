function validar() {
  
    let senha = formuser.senha.value;
    let rep_senha = formuser.rep_senha.value;
 
 
    if(senha == "" || senha.length <= 7 ){
        alert ("Preencha o campo senha com no mínimo 8 caracteres");
        formuser.senha.focus();
         return false;
    }
 
    if (senha != rep_senha){
        alert ("senhas diferentes");
        formuser.rep_senha.focus();
        return false;
 
    }
 }