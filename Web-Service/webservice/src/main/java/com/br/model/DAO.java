package com.br.model;

import java.util.List;

public interface DAO<T> {
	
	public void salvar(T t);
	public void editar(T t);
	public void excluir(Integer id);
	public List listar();
	public T buscar(String sobrenome);
	
}
