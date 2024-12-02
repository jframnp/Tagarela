package com.example.SpringBoot2.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public record GuardianRecordDto(
    @NotBlank String name,
    @NotNull @Past LocalDate birthDate,
    @NotBlank String gender,
    @NotBlank String address,
    @NotBlank String phone,
    @NotBlank String email,
    @NotBlank String rg,  // Alterado para String
    @NotBlank String cpf, // Alterado para String
    @NotBlank String familyRelationship,
    @NotBlank String education,
    @NotBlank String familyIncome,
    @NotBlank String qualification,
    @NotBlank @Size(min = 6) String login,  // Novo campo para login
    @NotBlank @Size(min = 8) String password // Novo campo para senha
) {}
