package com.geppetto.testingapp.dao;

import com.geppetto.testingapp.model.Employee;
import java.util.List;
import java.util.Optional;


public interface EmployeeDao {

    Employee create(Employee employee);



    List<Employee> getAllValues();


    Optional<Employee> update(String id);


    void delete(String id);

}
