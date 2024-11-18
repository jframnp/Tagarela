package com.example.SpringBoot2.dtos;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.util.UUID;

public class ToddlerRecordDto {
    @NotNull
    @Size(min = 1, max = 100)
    private String name;

    private String gender;

    private LocalDate birthDate;

    private String BloodType;

    private String Allergy;

    private boolean Can_TCLE;

    private UUID ClassId;

    @NotNull
    private Integer RG;

    private Integer CPF;

    private Integer guardiansRG;

    private UUID forms;

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getBloodType() {
        return BloodType;
    }

    public void setBloodType(String BloodType) {
        this.BloodType = BloodType;
    }

    public String getAllergy() {
        return Allergy;
    }

    public void setAllergy(String Allergy) {
        this.Allergy = Allergy;
    }

    public boolean isCan_TCLE() {
        return Can_TCLE;
    }

    public void setCan_TCLE(boolean Can_TCLE) {
        this.Can_TCLE = Can_TCLE;
    }

    public UUID getClassId() {
        return ClassId;
    }

    public void setClassId(UUID ClassId) {
        this.ClassId = ClassId;
    }

    public Integer getRG() {
        return RG;
    }

    public void setRG(Integer RG) {
        this.RG = RG;
    }

    public Integer getCPF() {
        return CPF;
    }

    public void setCPF(Integer CPF) {
        this.CPF = CPF;
    }

    public Integer getGuardiansRG() {
        return guardiansRG;
    }

    public void setGuardiansRG(Integer guardiansRG) {
        this.guardiansRG = guardiansRG;
    }

    public UUID getForms() {
        return forms;
    }

    public void setForms(UUID forms) {
        this.forms = forms;
    }
}
