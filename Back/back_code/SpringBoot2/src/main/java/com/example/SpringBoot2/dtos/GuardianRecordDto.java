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
    @NotNull Integer rg,
    @NotNull Integer cpf,
    @NotBlank String familyRelationship,
    @NotBlank String education,
    @NotBlank String familyIncome,
    @NotBlank String qualification,
    @NotBlank @Size(min = 6) String sysLog,
    @NotBlank @Size(min = 8) String sysPassword
) {}
