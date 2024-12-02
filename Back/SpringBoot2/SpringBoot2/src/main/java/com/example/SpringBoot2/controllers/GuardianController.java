package com.example.SpringBoot2.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SpringBoot2.dtos.GuardianRecordDto;
import com.example.SpringBoot2.models.GuardianModel;
import com.example.SpringBoot2.repositories.GuardianRepository;

import jakarta.validation.Valid;

@RestController
public class GuardianController {

    @Autowired
    GuardianRepository guardianRepository;

    // Endpoint para registro
    @PostMapping("/guardian/register")
    public ResponseEntity<Object> registerGuardian(@RequestBody @Valid GuardianRecordDto guardianRecordDto) {
        if (guardianRepository.existsByLogin(guardianRecordDto.login())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este login já está em uso.");
        }
        var guardianModel = new GuardianModel();
        BeanUtils.copyProperties(guardianRecordDto, guardianModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardianRepository.save(guardianModel));
    }

    // Endpoint para login
    @PostMapping("/guardian/login")
    public ResponseEntity<Object> loginGuardian(@RequestBody GuardianRecordDto loginDto) {
        Optional<GuardianModel> guardian = guardianRepository.findByLogin(loginDto.login());
        if (guardian.isEmpty() || !guardian.get().getPassword().equals(loginDto.password())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login ou senha incorretos.");
        }
        return ResponseEntity.status(HttpStatus.OK).body("Login realizado com sucesso.");
    }

    // Endpoint para salvar guardian
    @PostMapping("/guardian")
    public ResponseEntity<GuardianModel> saveGuardian(@RequestBody @Valid GuardianRecordDto guardianRecordDto) {
        var guardianModel = new GuardianModel();
        BeanUtils.copyProperties(guardianRecordDto, guardianModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardianRepository.save(guardianModel));
    }

    // Endpoint para listar todos os guardians
    @GetMapping("/guardian")
    public ResponseEntity<List<GuardianModel>> getAllGuardians() {
        return ResponseEntity.status(HttpStatus.OK).body(guardianRepository.findAll());
    }

    // Endpoint para obter um guardian específico
    @GetMapping("/guardian/{id}")
    public ResponseEntity<Object> getOneGuardian(@PathVariable(value = "id") UUID id) {
        Optional<GuardianModel> guardian = guardianRepository.findById(id);
        if (guardian.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Guardian not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(guardian.get());
    }

    // Endpoint para atualizar um guardian
    @PutMapping("/guardian/{id}")
    public ResponseEntity<Object> updateGuardian(@PathVariable(value = "id") UUID id,
                                                 @RequestBody @Valid GuardianRecordDto guardianRecordDto) {
        Optional<GuardianModel> guardian = guardianRepository.findById(id);
        if (guardian.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Guardian not found.");
        }
        var guardianModel = guardian.get();
        BeanUtils.copyProperties(guardianRecordDto, guardianModel);
        return ResponseEntity.status(HttpStatus.OK).body(guardianRepository.save(guardianModel));
    }

    // Endpoint para deletar um guardian
    @DeleteMapping("/guardian/{id}")
    public ResponseEntity<Object> deleteGuardian(@PathVariable(value = "id") UUID id) {
        Optional<GuardianModel> guardian = guardianRepository.findById(id);
        if (guardian.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Guardian not found.");
        }
        guardianRepository.delete(guardian.get());
        return ResponseEntity.status(HttpStatus.OK).body("Guardian deleted successfully.");
    }
}
