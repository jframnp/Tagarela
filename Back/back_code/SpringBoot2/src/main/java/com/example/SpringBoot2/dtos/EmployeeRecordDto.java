package com.example.SpringBoot2.dtos;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.util.UUID;

public record EmployeeRecordDto(
    @NotNull @Size(min = 1, max = 100) String name,
    String gender,
    LocalDate birthDate,
    @NotNull Integer RG,
    Integer CPF,
    String department,
    String position,
    UUID forms
) {}
