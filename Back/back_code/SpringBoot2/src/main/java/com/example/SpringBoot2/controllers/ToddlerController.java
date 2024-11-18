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

import com.example.SpringBoot2.dtos.ToddlerRecordDto;
import com.example.SpringBoot2.models.ToddlerModel;
import com.example.SpringBoot2.repositories.ToddlerRepository;

import jakarta.validation.Valid;

@RestController
public class ToddlerController {

    @Autowired
    ToddlerRepository ToddlerRepository;

    @PostMapping("/Toddlers")
    public ResponseEntity<ToddlerModel> saveToddler(@RequestBody @Valid ToddlerRecordDto ToddlerRecordDto){
        var ToddlerModel = new ToddlerModel();
        BeanUtils.copyProperties(ToddlerRecordDto, ToddlerModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(ToddlerRepository.save(ToddlerModel));

    }

    @GetMapping("/Toddlers")
    public ResponseEntity<List<ToddlerModel>> getAllToddler(){
        return ResponseEntity.status(HttpStatus.OK).body(ToddlerRepository.findAll());
    }
    @GetMapping("/Toddlers/{id}")
    public ResponseEntity<Object> getOneToddler(@PathVariable(value="id") UUID id){
        Optional<ToddlerModel> Toddler0 = ToddlerRepository.findById(id);
        if(Toddler0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Toddler not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(Toddler0.get());
    }
    @PutMapping("/Toddlers/{id}")
    public ResponseEntity<Object> updateToddler(@PathVariable(value="id") UUID id,
                                             @RequestBody @Valid ToddlerRecordDto ToddlerRecordDto){
        Optional<ToddlerModel> Toddler0 = ToddlerRepository.findById(id);
        if(Toddler0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Toddler not found.");
        }
        var ToddlerModel = Toddler0.get();
        BeanUtils.copyProperties(ToddlerRecordDto, ToddlerModel);
        return ResponseEntity.status(HttpStatus.OK).body(ToddlerRepository.save(ToddlerModel));
    }
    @DeleteMapping("/toddlers/{id}")
    public ResponseEntity<Object> deleteToddler(@PathVariable(value="id") UUID id){
        Optional<ToddlerModel> Toddler0 = ToddlerRepository. findById(id);
        if(Toddler0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Toddler not found.");
        }
        ToddlerRepository.delete(Toddler0.get());
        return ResponseEntity.status(HttpStatus.OK).body("Toddler deleted Successfully");

    }

}
