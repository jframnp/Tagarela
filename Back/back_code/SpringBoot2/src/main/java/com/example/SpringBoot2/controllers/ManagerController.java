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

import com.example.SpringBoot2.dtos.ManagerRecordDto;
import com.example.SpringBoot2.models.ManagerModel;
import com.example.SpringBoot2.repositories.ManagerRepository;

import jakarta.validation.Valid;

@RestController
public class ManagerController {

    @Autowired
    ManagerRepository ManagerRepository;

    @PostMapping("/Manager")
    public ResponseEntity<ManagerModel> saveManagers(@RequestBody @Valid ManagerRecordDto ManagerRecordDto){
        var ManagerModel = new ManagerModel();
        BeanUtils.copyProperties(ManagerRecordDto, ManagerModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(ManagerRepository.save(ManagerModel));

    }

     @GetMapping("/Manager")
    public ResponseEntity<List<ManagerModel>> getAllManager(){
        return ResponseEntity.status(HttpStatus.OK).body(ManagerRepository.findAll());
    }
    @GetMapping("/Manager/{id}")
    public ResponseEntity<Object> getOneManager(@PathVariable(value="id") UUID id){
        Optional<ManagerModel> Manager0 = ManagerRepository.findById(id);
        if(Manager0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Manager not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(Manager0.get());
    }
    @PutMapping("/Manager/{id}")
    public ResponseEntity<Object> updateManager(@PathVariable(value="id") UUID id,
                                             @RequestBody @Valid ManagerRecordDto ManagerRecordDto){
        Optional<ManagerModel> Manager0 = ManagerRepository.findById(id);
        if(Manager0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Manager not found.");
        }
        var ManagerModel = Manager0.get();
        BeanUtils.copyProperties(ManagerRecordDto, ManagerModel);
        return ResponseEntity.status(HttpStatus.OK).body(ManagerRepository.save(ManagerModel));
    }
    @DeleteMapping("/Manager/{id}")
    public ResponseEntity<Object> deleteManager(@PathVariable(value="id") UUID id){
        Optional<ManagerModel> Manager0 = ManagerRepository. findById(id);
        if(Manager0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Manager not found.");
        }
        ManagerRepository.delete(Manager0.get());
        return ResponseEntity.status(HttpStatus.OK).body("Manager deleted Successfully");

    }
    
}
