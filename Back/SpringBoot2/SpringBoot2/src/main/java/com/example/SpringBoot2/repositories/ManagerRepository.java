package com.example.SpringBoot2.repositories;

import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.SpringBoot2.models.ManagerModel;

@Repository
public interface ManagerRepository extends JpaRepository<ManagerModel, UUID> {
    boolean existsByLogin(String login);  // Verifica se o login já existe
    Optional<ManagerModel> findByLogin(String login);  // Busca usuário por login
    boolean existsByEmail(String email);  // Verifica se o email já existe
    Optional<ManagerModel> findByEmail(String email);  // Busca usuário por email
}
