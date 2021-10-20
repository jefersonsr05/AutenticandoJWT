// Call the dataTables jQuery plugin
$(document).ready(function() {
    //on read
});


async function iniciarSecao(){
    let dados={};
    dados.email = document.getElementById('txtEmail').value;
    dados.password = document.getElementById('txtPassword').value;



    const request = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });


    const resposta = await request.text();
    if (resposta != 'FAIL') {
        localStorage.token = resposta;
        localStorage.email = dados.email;
        window.location.href = 'usuarios.html'
    } else {
        alert("As credenciais são inválidas! Tente novamente!");
    }

}
