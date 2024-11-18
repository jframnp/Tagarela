package com.example.SpringBoot2.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public record ToddlerRecordDto(
    @NotBlank String name,
    @Past LocalDate birthDate,
    @NotBlank @Size(min = 9, max = 12) Integer rg,
    @NotBlank @Pattern(regexp = "\\d{11}") Integer cpf,
    @NotBlank @Size(min = 9, max = 12) Integer guardiansRG
)
{}
