package cuckoo.com.api.user;

import jakarta.validation.constraints.*;

import java.util.Date;

public record UserRegisterData(

        @NotBlank
        String nome,
        @Digits(integer = 6, fraction = 0)
        int idade,
        @NotBlank
        @Email
        String email) {
}
