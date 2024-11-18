package com.example.SpringBoot2.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SpringBoot2.dtos.ToddlerRecordDto;
import com.example.SpringBoot2.models.ToddlerModel;
import com.example.SpringBoot2.repositories.ToddlerRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/toddler")
public class ToddlerController {

    @Autowired
    ToddlerRepository toddlerRepository;

    // Endpoint para cadastro
    @PostMapping("/register")
    public ResponseEntity<Object> registerToddler(@RequestBody @Valid ToddlerRecordDto toddlerRecordDto) {
        if (toddlerRepository.existsByRg(toddlerRecordDto.getRG())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este RG já está em uso.");
        }
        var toddlerModel = new ToddlerModel();
        BeanUtils.copyProperties(toddlerRecordDto, toddlerModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(toddlerRepository.save(toddlerModel));
    }

    // Endpoint para salvar toddler
    @PostMapping
    public ResponseEntity<Object> saveToddler(@RequestBody @Valid ToddlerRecordDto toddlerRecordDto) {
        if (toddlerRepository.existsByRg(toddlerRecordDto.getRG())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este RG já está em uso.");
        }
        var toddlerModel = new ToddlerModel();
        BeanUtils.copyProperties(toddlerRecordDto, toddlerModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(toddlerRepository.save(toddlerModel));
    }

    // Endpoint para listar todos os toddlers
    @GetMapping
    public ResponseEntity<List<ToddlerModel>> getAllToddlers() {
        return ResponseEntity.status(HttpStatus.OK).body(toddlerRepository.findAll());
    }

    // Endpoint para obter um toddler específico
    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneToddler(@PathVariable(value="id") UUID id) {
        Optional<ToddlerModel> toddler = toddlerRepository.findById(id);
        if (toddler.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Toddler não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(toddler.get());
    }

    // Endpoint para atualizar um toddler
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateToddler(@PathVariable(value="id") UUID id,
                                                @RequestBody @Valid ToddlerRecordDto toddlerRecordDto) {
        Optional<ToddlerModel> toddler = toddlerRepository.findById(id);
        if (toddler.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Toddler não encontrado.");
        }
        var toddlerModel = toddler.get();
        BeanUtils.copyProperties(toddlerRecordDto, toddlerModel);
        return ResponseEntity.status(HttpStatus.OK).body(toddlerRepository.save(toddlerModel));
    }

    // Endpoint para deletar um toddler
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteToddler(@PathVariable(value="id") UUID id) {
        Optional<ToddlerModel> toddler = toddlerRepository.findById(id);
        if (toddler.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Toddler não encontrado.");
        }
        toddlerRepository.delete(toddler.get());
        return ResponseEntity.status(HttpStatus.OK).body("Toddler deletado com sucesso.");
    }
}
