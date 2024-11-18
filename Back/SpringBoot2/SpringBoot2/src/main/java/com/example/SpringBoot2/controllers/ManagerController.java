package com.example.SpringBoot2.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SpringBoot2.dtos.ManagerRecordDto;
import com.example.SpringBoot2.models.ManagerModel;
import com.example.SpringBoot2.repositories.ManagerRepository;

import jakarta.validation.Valid;

@RestController
public class ManagerController {

    @Autowired
    ManagerRepository managerRepository;

    // Endpoint para cadastro
    @PostMapping("/manager/register")
    public ResponseEntity<Object> registerManager(@RequestBody @Valid ManagerRecordDto managerRecordDto) {
        if (managerRepository.existsByLogin(managerRecordDto.login())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este login já está em uso.");
        }
        var managerModel = new ManagerModel();
        BeanUtils.copyProperties(managerRecordDto, managerModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(managerRepository.save(managerModel));
    }

    // Endpoint para login
    @PostMapping("/manager/login")
    public ResponseEntity<Object> loginManager(@RequestBody ManagerRecordDto loginDto) {
        Optional<ManagerModel> manager = managerRepository.findByLogin(loginDto.login());
        if (manager.isEmpty() || !manager.get().getPassword().equals(loginDto.password())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login ou senha incorretos.");
        }
        return ResponseEntity.status(HttpStatus.OK).body("Login realizado com sucesso.");
    }

    // Endpoint para salvar manager
    @PostMapping("/manager")
    public ResponseEntity<ManagerModel> saveManager(@RequestBody @Valid ManagerRecordDto managerRecordDto) {
        var managerModel = new ManagerModel();
        BeanUtils.copyProperties(managerRecordDto, managerModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(managerRepository.save(managerModel));
    }

    // Endpoint para listar todos os managers
    @GetMapping("/manager")
    public ResponseEntity<List<ManagerModel>> getAllManagers() {
        return ResponseEntity.status(HttpStatus.OK).body(managerRepository.findAll());
    }

    // Endpoint para obter um manager específico
    @GetMapping("/manager/{id}")
    public ResponseEntity<Object> getOneManager(@PathVariable(value="id") UUID id) {
        Optional<ManagerModel> manager = managerRepository.findById(id);
        if (manager.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Manager not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(manager.get());
    }

    // Endpoint para atualizar um manager
    @PutMapping("/manager/{id}")
    public ResponseEntity<Object> updateManager(@PathVariable(value="id") UUID id,
                                                @RequestBody @Valid ManagerRecordDto managerRecordDto) {
        Optional<ManagerModel> manager = managerRepository.findById(id);
        if (manager.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Manager not found.");
        }
        var managerModel = manager.get();
        BeanUtils.copyProperties(managerRecordDto, managerModel);
        return ResponseEntity.status(HttpStatus.OK).body(managerRepository.save(managerModel));
    }

    // Endpoint para deletar um manager
    @DeleteMapping("/manager/{id}")
    public ResponseEntity<Object> deleteManager(@PathVariable(value="id") UUID id) {
        Optional<ManagerModel> manager = managerRepository.findById(id);
        if (manager.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Manager not found.");
        }
        managerRepository.delete(manager.get());
        return ResponseEntity.status(HttpStatus.OK).body("Manager deleted successfully.");
    }
}
