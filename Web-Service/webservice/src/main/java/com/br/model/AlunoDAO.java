package com.br.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.br.model.DAO;
import com.br.model.AlunoModel;

public class AlunoDAO implements DAO<AlunoModel>{

	private final EntityManagerFactory entityManagerFactory;
	private final EntityManager entityManager;
	
	public AlunoDAO() {
		this.entityManagerFactory = Persistence.createEntityManagerFactory("persistence");
		this.entityManager = entityManagerFactory.createEntityManager();
	}
	
	public void salvar(AlunoModel aluno){
		this.entityManager.getTransaction().begin();
		this.entityManager.persist(aluno);
		this.entityManager.getTransaction().commit();
		
	}
	
	public void editar(AlunoModel aluno){
		this.entityManager.getTransaction().begin();
		this.entityManager.merge(aluno);
		this.entityManager.getTransaction().commit();
	}
	
	public void excluir(Integer id){
		this.entityManager.getTransaction().begin();
		this.entityManager.remove(id);
		this.entityManager.getTransaction().commit();
	}
	
	public List listarAlunos(){
		 return this.entityManager.createQuery("SELECT a FROM AlunoModel a ORDER BY a.nome").getResultList();
		 
	}
	
	public AlunoModel buscarPorSobrenome(String sobreNome){
		
		return this.entityManager.find(AlunoModel.class, sobreNome);
	}
}
