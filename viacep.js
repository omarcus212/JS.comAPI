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
document.getElementById('bairro').value = endereco.bairro;

}

cep.addEventListener('focusout', preencherformulario);