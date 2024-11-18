package com.example.SpringBoot2.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public record ManagerRecordDto(
    @NotBlank String name,
    @Past LocalDate birthDate,
    @NotBlank @Size(min = 9, max = 12) String rg,
    @NotBlank @Pattern(regexp = "\\d{11}") String cpf,
    @NotBlank String login,
    @NotBlank @Size(min = 6) String password
) {}
