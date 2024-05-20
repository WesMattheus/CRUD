package cuckoo.com.api.user.controller;

import cuckoo.com.api.user.*;
import cuckoo.com.api.user.dto.DataUserListing;
import cuckoo.com.api.user.dto.UserRegisterData;
import cuckoo.com.api.user.dto.UserUpdateData;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("crud")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {

    @Autowired
    private UserRepository repository;

    @PostMapping
    @Transactional
    public void register(@RequestBody @Valid UserRegisterData data){
        repository.save(new User(data));
        System.out.println("Usuario: " + data.nome() + " registrado com sucesso!");
    }

    @GetMapping
    public Page<DataUserListing> getUsers(Pageable pagination){
        return repository.findAll(pagination).map(DataUserListing::new);
    }

    @PutMapping
    @Transactional
    public void updateUser(@RequestBody @Valid UserUpdateData data){
        var user = repository.getReferenceById(data.id());
        user.UpdateRegister(data);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id){
        repository.deleteById(id);
    }
}
