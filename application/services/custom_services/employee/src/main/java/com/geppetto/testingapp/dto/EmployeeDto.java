package com.geppetto.testingapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;






@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {

    private String _id;
    
    private String name;
    
    private Number age;
    
    private Number salary;
    
    }
