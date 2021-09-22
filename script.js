
// simula nosso banco de dados
import  { bdUser } from './scripCadastro.js'


// pega o botao de continuar
const botaoContinuar = document.querySelector('.botaoContinuar')

// adiciona um evento de clique, que chama uma função  
botaoContinuar.addEventListener('click', () => {
    
    //seleciona o campo de input e pega o valor que foi digitado nele
    const pegaCpf = document.querySelector('#cpf');
    const valorCpf = pegaCpf.value

    //seleciona o campo de input e pega o valor que foi digitado nele
    const pegaSenha = document.querySelector('#senha');
    const valorSenha = pegaSenha.value


    // // monta o modelo que é exatamente ao do banco
    // const montaUsuario = (cpf, senha) => {
    //     const usuario = {
    //         cpf: cpf,
    //         senha: senha
    //     }
    //     bdUser.push(usuario)
    // }

    

    // procura dentro do pseudo banco se ele existe e retorna dentro de uma lista true ou false
    const temBD = bdUser.map( (elemento) => {
        if(elemento.cpf == valorCpf && elemento.senha == valorSenha){
            return true
        } else {
            return false
        }
    })

    console.log(temBD)

    // mostra se existe o usuario ou nao
    if(temBD[0] == true) {
        alert('sucesso')
    } else{
        alert('cpf ou senha invalidos')
    }


})
