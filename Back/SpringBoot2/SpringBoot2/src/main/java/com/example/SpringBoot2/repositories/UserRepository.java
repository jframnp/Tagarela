package com.example.SpringBoot2.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SpringBoot2.models.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, UUID>{

}
