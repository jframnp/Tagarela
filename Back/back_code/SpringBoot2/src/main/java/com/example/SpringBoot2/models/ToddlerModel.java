package com.example.SpringBoot2.models;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "TB_Toddler")
public class ToddlerModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idToddler;
    
    @NotNull
    private String name;
    
    private String gender;
    
    private LocalDate birthDate;

    private int monthOfLife;

    private String BloodType;
    
    private String Allergy;
    
    private boolean Can_TCLE;
    
    private UUID ClassId;
    
    private LocalDateTime CreatedAt = LocalDateTime.now();
    
    @NotNull
    @Column(unique = true)
    private Integer RG;
    
    private Integer CPF;
    
    private Integer guardiansRG;
    
    private UUID forms;
    

    public UUID getIdToddler() {
        return idToddler;
    }

    public void setIdToddler(UUID idToddler) {
        this.idToddler = idToddler;
    }

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

    public LocalDateTime getCreatedAt() {
        return CreatedAt;
    }

    public UUID getForms() {
        return forms;
    }

    public void setForms(UUID forms) {
        this.forms = forms;
    }

    public UUID getClassId() {
        return ClassId;
    }

    public int getMonth(){
        return monthOfLife;
    }


    public void setClassId(UUID classId) {
        ClassId = classId;
    }
    
}
