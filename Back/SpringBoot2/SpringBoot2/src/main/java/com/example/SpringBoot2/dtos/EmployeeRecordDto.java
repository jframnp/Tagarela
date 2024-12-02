package com.example.SpringBoot2.dtos;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;

import java.time.LocalDate;

public record EmployeeRecordDto(
    @NotNull
    @Size(min = 1, max = 100, message = "O nome deve ter entre 1 e 100 caracteres.")
    String name,

    @NotNull(message = "O gênero não pode ser nulo.")
    String gender,

    LocalDate birthDate,

    @NotNull(message = "O RG não pode ser nulo.")
    String rg,  // Alterado para String para corresponder ao modelo

    @Pattern(regexp = "\\d{11}", message = "O CPF deve conter 11 dígitos.")
    String cpf,  // Alterado para String para corresponder ao modelo

    @Size(max = 50, message = "O departamento deve ter no máximo 50 caracteres.")
    String department,

    @Size(max = 50, message = "O cargo deve ter no máximo 50 caracteres.")
    String position
) {}
