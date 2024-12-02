package com.example.SpringBoot2.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SpringBoot2.models.GuardianModel;

@Repository
public interface GuardianRepository extends JpaRepository<GuardianModel, UUID> {

    // Método para verificar se o login já existe
    boolean existsByLogin(String login);

    // Método para buscar um GuardianModel pelo login
    Optional<GuardianModel> findByLogin(String login);
}
