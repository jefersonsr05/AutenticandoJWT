// Call the dataTables jQuery plugin
$(document).ready(function() {
    //on read
});

async function registrarUsuarios(){
    let dados={};
    dados.nome = document.getElementById('txtNome').value;
    dados.apelido = document.getElementById('txtApelido').value;
    dados.email = document.getElementById('txtEmail').value;
    dados.telefone = document.getElementById('txtTelefone').value;
    dados.password = document.getElementById('txtPassword').value;

    let repetirPassword = document.getElementById('txtRepetirPassword').value;

    if (repetirPassword != dados.password){
        alert('A Contrasenha é diferente');
        return
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    alert("Conta criada com sucesso");

    window.location.href = 'login.html'

}
