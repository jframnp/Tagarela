package com.example.SpringBoot2.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SpringBoot2.dtos.EmployeeRecordDto;
import com.example.SpringBoot2.models.EmployeeModel;
import com.example.SpringBoot2.repositories.EmployeeRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    // Endpoint para cadastro
    @PostMapping("/register")
    public ResponseEntity<Object> registerEmployee(@RequestBody @Valid EmployeeRecordDto employeeRecordDto) {
        if (employeeRepository.existsByRg(employeeRecordDto.rg())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este RG já está em uso.");
        }
        var employeeModel = new EmployeeModel();
        BeanUtils.copyProperties(employeeRecordDto, employeeModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(employeeRepository.save(employeeModel));
    }

    // Endpoint para salvar employee
    @PostMapping
    public ResponseEntity<Object> saveEmployee(@RequestBody @Valid EmployeeRecordDto employeeRecordDto) {
        if (employeeRepository.existsByRg(employeeRecordDto.rg())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este RG já está em uso.");
        }
        var employeeModel = new EmployeeModel();
        BeanUtils.copyProperties(employeeRecordDto, employeeModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(employeeRepository.save(employeeModel));
    }

    // Endpoint para listar todos os employees
    @GetMapping
    public ResponseEntity<List<EmployeeModel>> getAllEmployees() {
        return ResponseEntity.status(HttpStatus.OK).body(employeeRepository.findAll());
    }

    // Endpoint para obter um employee específico
    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneEmployee(@PathVariable(value = "id") UUID id) {
        Optional<EmployeeModel> employee = employeeRepository.findById(id);
        if (employee.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(employee.get());
    }

    // Endpoint para atualizar um employee
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateEmployee(@PathVariable(value = "id") UUID id,
                                                  @RequestBody @Valid EmployeeRecordDto employeeRecordDto) {
        Optional<EmployeeModel> employee = employeeRepository.findById(id);
        if (employee.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee não encontrado.");
        }
        var employeeModel = employee.get();
        BeanUtils.copyProperties(employeeRecordDto, employeeModel);
        return ResponseEntity.status(HttpStatus.OK).body(employeeRepository.save(employeeModel));
    }

    // Endpoint para deletar um employee
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteEmployee(@PathVariable(value = "id") UUID id) {
        Optional<EmployeeModel> employee = employeeRepository.findById(id);
        if (employee.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee não encontrado.");
        }
        employeeRepository.delete(employee.get());
        return ResponseEntity.status(HttpStatus.OK).body("Employee deletado com sucesso.");
    }
}
