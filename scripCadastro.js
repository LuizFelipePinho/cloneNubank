
export let bdUser = []

const botaoCriar = document.querySelector('.botaoContinuar')

botaoCriar.addEventListener("click", () => {
    const campoCpf = document.querySelector('#cpf');
    const cpfCadastrado = campoCpf.value;

    const campoSenha = document.querySelectorAll('#senha')

    // retorna uma lista das senhas que o usuario mandou no input
    const listaSenhas = (campoSenha) => {
        let listaSenhasCadastrada = []
        for( let i = 0; i < campoSenha.length; i++){
            listaSenhasCadastrada.push(campoSenha[i].value)
        }
        return listaSenhasCadastrada
    }
    
    const senhasCadastradas = listaSenhas(campoSenha)


    // preciso comparar se as duas senhas são iguais

    const verificaIgualdadeSenha = (senhasCadastradas) => {
        if(senhasCadastradas[0] === senhasCadastradas[1]){
            return true 
        } else {
            return false 
        }
    }


    const atualizaListaDeUsuario = (cpf, senha) => {
        const obj = {
            cpf: cpf,
            senha: senha
        }
        bdUser.push(obj)
    }


    if (verificaIgualdadeSenha(senhasCadastradas)) {
        // cadastre o cpf e a senha no pseudo banco
        atualizaListaDeUsuario(cpfCadastrado, senhasCadastradas[0])
        console.log(bdUser)

    } else {
        // mande uma msgm dizendo que as senhas nao são iguais
        alert('As senhas devem ser iguais')
    }



})