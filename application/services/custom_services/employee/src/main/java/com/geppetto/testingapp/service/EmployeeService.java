package com.geppetto.testingapp.service;

import com.geppetto.testingapp.dto.EmployeeDto;
import java.util.List;
import java.util.Map;

public interface EmployeeService {

    EmployeeDto create(EmployeeDto employeeDto);



    List<EmployeeDto> getAllValues();


    EmployeeDto update(EmployeeDto employeeDto);


    String delete(String id);



}
