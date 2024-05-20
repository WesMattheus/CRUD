package cuckoo.com.api.user.dto;

import jakarta.validation.constraints.Digits;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record UserUpdateData(
        @NotNull
        UUID id,
        @NotBlank
        String nome,
        @Digits(integer = 6, fraction = 0)
        int idade,
        @Digits(integer = 1, fraction = 2)
        float altura,
        String cidade,
        String complemento){}