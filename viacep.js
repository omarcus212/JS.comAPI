'use strict'


const cep = document.getElementById('cep');


const pesquisarcep = async (cep) => {

    const url = `https://viacep.com.br/ws/${cep}/json/`;


    const response = await fetch(url);

    const data = await response.json();

  

  return data;
    

}

const preencherformulario = async () =>{

const endereco = await pesquisarcep(cep.value);
const teste = document.getElementById('endereco').value = endereco.logradouro;
document.getElementById('bairro').value = endereco.bairro;
document.getElementById('cidade').value = endereco.localidade;
document.getElementById('estado').value = endereco.uf;

console.log(endereco);


}

cep.addEventListener('focusout', preencherformulario);