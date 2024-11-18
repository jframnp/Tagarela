package com.example.SpringBoot2.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record UserRecordDto(@NotBlank String name, @NotNull BigDecimal value) {

}
