const dbUsuarios = [
    {
        cpf: "123",
        senha: 'abc'
    }
]


const botaoContinuar = document.querySelector('.botaoContinuar')
botaoContinuar.addEventListener('click', () => {
    
    const pegaCpf = document.querySelector('#cpf');
    const valorCpf = pegaCpf.value

    const pegaSenha = document.querySelector('#senha');
    const valorSenha = pegaSenha.value


    const montaUsuario = (cpf, senha) => {
        const usuario = {
            cpf: cpf,
            senha: senha
        }
        return usuario
    }

    console.log(montaUsuario(valorCpf, valorSenha))

    const temBD = dbUsuarios.map( (elemento) => {
        if(elemento.cpf == valorCpf && elemento.senha == valorSenha){
            return true
        } else {
            return false
        }
    })

    if(temBD[0] == true) {
        alert('sucesso')
    } else{
        alert('cpf ou senha invalidos')
    }
})

