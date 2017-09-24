package com.br.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.br.model.AlunoDAO;
import com.br.model.AlunoModel;

@Path("/api")
public class AlunoController {

	private final AlunoDAO alunoDAO = new AlunoDAO();
	
	@POST
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	//
	@Path("/cadastrar")
	
	public String cadastrar(AlunoModel aluno){
		try{
			alunoDAO.salvar(aluno);
			return "Aluno cadastrado com sucesso.";
			
		}catch(Exception e){
			return "Não foi possível cadastrar Aluno!";
		}
	}
	
	@POST
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	@Path("/editar")
	
	public String editar (AlunoModel aluno){
		try{
			alunoDAO.editar(aluno);
			
			return"Informações salvas com sucesso.";
					
		}catch (Exception e){
			return "Erro a salvar informações!" + e.getMessage();
		}
	}
	
	@DELETE
	@Produces("application/json; charset=UTF-8")
	@Path("/excluir/{id}")
	
	public String excluir(@PathParam("idaluno") Integer id) {
		try {
			
			alunoDAO.excluir(id);
			
			return "Aluno excluído com sucesso.";
		}catch(Exception e) {
			return "Erro ao excluir Aluno!" + e.getMessage();
		}
	}
		@GET
		@Produces("application/json; charset=UTF-8")
		@Path("/buscarPorId/{id}")
		public AlunoModel buscarPorSobrenome(@PathParam("sobrenome") String sobrenome) {
			
			AlunoModel aluno = alunoDAO.buscarPorSobrenome(sobrenome);
			
			if(aluno!= null) 
				return aluno;
			
			return null;
		
	}
		
		@GET
		@Produces("application/json; charset=UTF-8")
		@Path("/buscarTodos")
		public List<AlunoModel> listar(){
			
			List<AlunoModel> alunos = alunoDAO.listarAlunos();
			
			if(alunos != null)
				return alunos;
			
			return null;
		}
	
	
	
	
}
