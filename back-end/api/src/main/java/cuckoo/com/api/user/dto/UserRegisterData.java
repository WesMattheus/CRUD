package cuckoo.com.api.user.dto;

import jakarta.validation.constraints.*;

public record UserRegisterData(
        @NotBlank
        String nome,
        @Digits(integer = 6, fraction = 0)
        int idade,
        @Digits(integer = 1, fraction = 2)
        float altura,
        @NotBlank
        String cidade,
        @NotBlank
        String rua,
        String complemento) {
}