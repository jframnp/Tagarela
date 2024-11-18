package com.example.SpringBoot2.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SpringBoot2.models.ToddlerModel;

@Repository
public interface ToddlerRepository extends JpaRepository<ToddlerModel, UUID> {
    boolean existsByRg(Integer rg);
}
