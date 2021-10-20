package com.cursojava.curso.dao;

import com.cursojava.curso.modells.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();


    void excluir(Long id);

    void registrar(Usuario usuario);

    Usuario obterUsuarioPorCredenciais(Usuario usuario);
}
