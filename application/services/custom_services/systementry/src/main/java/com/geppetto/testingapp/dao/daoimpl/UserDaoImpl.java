package com.geppetto.testingapp.dao.daoimpl;

import com.geppetto.testingapp.model.User;
import com.geppetto.testingapp.repository.UserRepository;
import com.geppetto.testingapp.dao.UserDao;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class UserDaoImpl implements UserDao{

    private final UserRepository userRepository;

     public UserDaoImpl(UserRepository userRepository) {
       this.userRepository = userRepository;
}





}
