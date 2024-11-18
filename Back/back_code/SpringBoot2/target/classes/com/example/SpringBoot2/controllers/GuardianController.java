package com.example.SpringBoot2.controllers;

import java.util.List;
import java.util.UUID;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBoot2.dtos.GuardianRecordDto; // Substitua pelo seu DTO do Guardian
import com.example.SpringBoot2.models.GuardianModel; // Substitua pelo seu modelo do Guardian
import com.example.SpringBoot2.repositories.GuardianRepository; // Substitua pelo repositório do Guardian

import jakarta.validation.Valid;

@RestController
public class GuardianController {

    @Autowired
    GuardianRepository guardianRepository;

    @PostMapping("/guardians")
    public ResponseEntity<GuardianModel> saveGuardian(@RequestBody @Valid GuardianRecordDto guardianRecordDto) {
        var guardianModel = new GuardianModel();
        BeanUtils.copyProperties(guardianRecordDto, guardianModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardianRepository.save(guardianModel));
    }

    @GetMapping("/guardians")
    public ResponseEntity<List<GuardianModel>> getAllGuardians() {
        return ResponseEntity.status(HttpStatus.OK).body(guardianRepository.findAll());
    }

    @GetMapping("/guardians/{id}")
    public ResponseEntity<Object> getOneGuardian(@PathVariable(value = "id") UUID id) {
        Optional<GuardianModel> guardianOptional = guardianRepository.findById(id);
        if (guardianOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Guardian not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(guardianOptional.get());
    }

    @PutMapping("/guardians/{id}")
    public ResponseEntity<Object> updateGuardian(@PathVariable(value = "id") UUID id,
                                                 @RequestBody @Valid GuardianRecordDto guardianRecordDto) {
        Optional<GuardianModel> guardianOptional = guardianRepository.findById(id);
        if (guardianOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Guardian not found.");
        }
        var guardianModel = guardianOptional.get();
        BeanUtils.copyProperties(guardianRecordDto, guardianModel);
        return ResponseEntity.status(HttpStatus.OK).body(guardianRepository.save(guardianModel));
    }

    @DeleteMapping("/guardians/{id}")
    public ResponseEntity<Object> deleteGuardian(@PathVariable(value = "id") UUID id) {
        Optional<GuardianModel> guardianOptional = guardianRepository.findById(id);
        if (guardianOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Guardian not found.");
        }
        guardianRepository.delete(guardianOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Guardian deleted successfully.");
    }
}
