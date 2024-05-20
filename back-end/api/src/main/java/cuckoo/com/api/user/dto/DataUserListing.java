package cuckoo.com.api.user.dto;

import cuckoo.com.api.user.User;

import java.util.UUID;

public record DataUserListing(UUID id, String nome, int idade, float altura, String cidade, String rua, String complemento) {

    public DataUserListing(User user){
        this(user.getId(),user.getNome(), user.getIdade(),user.getAltura(),user.getCidade(), user.getRua(), user.getComplemento());
    }
}