//função para preencher os campos do formulario
const completarFormulario = (endereco) =>{
 document.getElementById('endereco').value = endereco.logradouro;
 document.getElementById('bairro').value = endereco.bairro;
 document.getElementById('cidade').value = endereco.localidade;
 document.getElementById('estado').value = endereco.uf;
};
  
//função para pesquisar o cep pela url da API
    const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;

    //aplicado API em json
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();
   
    completarFormulario(endereco);
    console.log(endereco)
}

//evento no campo, quando preenche o cep e tenta ir para o proximo campo (focusout), ira executar a função pesquisarCep e completarFormulario
document.getElementById('cep').addEventListener('focusout', pesquisarCep);


//ocultação dos campo de endereço
document.getElementById('cep').addEventListener('focusout', function(){
    let endereco = document.querySelectorAll('.endereco');
 for(let i=0; i<endereco.length;i++) {
     if(endereco[i].style.display ==="none") {
    endereco[i].style.display ="block";
} else{
    endereco[i].style.display = "none";
    }
    console.log(endereco[i].style.display)
    endereco[i].style.display = 'block'
 }
})

let button = document.getElementById('confirmacadastro')
button.addEventListener('click', function() {
    window.location = "confimacadastro.html"
})

