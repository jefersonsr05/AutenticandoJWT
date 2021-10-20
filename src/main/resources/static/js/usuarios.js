// Call the dataTables jQuery plugin
$(document).ready(function() {

  carregarUsuarios();

  $('#usuarios').DataTable();
  atualizarEmailDeUsuario();
});

function atualizarEmailDeUsuario() {
    document.getElementById('txtEmail').outerHTML = localStorage.email;
}

async function carregarUsuarios(){

    const request = await fetch('api/usuarios', {
      method: 'GET',
      headers: getHeaders()
    });
    const usuarios = await request.json();

    let listadoHtml = '';
    for (let usuario of usuarios){
        let botaoExcluir = '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        let telefoneTexto = usuario.telefone == null ? '-' : usuario.telefone;
        let usuarioHtml = '<tr><td>'+usuario.id+'</td><td>'+usuario.nome+' ' + usuario.apelido +'</td><td>'+usuario.email+'</td><td>'+telefoneTexto+'</td><td>'+botaoExcluir+'</td></tr>';
        listadoHtml += usuarioHtml;
    }

    console.log(usuarios);



    document.querySelector('#usuarios tbody').outerHTML = listadoHtml;


}
function getHeaders(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }
}

async function eliminarUsuario(id){

    if (!confirm('Deseja deletar este usuario?')){
        return;
    }
    const request = await fetch('api/usuarios/'+id, {
        method: 'DELETE',
        headers: getHeaders()
    });

    location.reload();

}