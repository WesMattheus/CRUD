package cuckoo.com.api.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Table(name = "usuarios_es")
@Entity(name = "Usuario")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "usuarios_id", updatable = false, unique = true, nullable = false)
    private UUID id;
    private String nome;
    private int idade;
    private String email;

    public User(UserRegisterData data){
        this.nome = data.nome();
        this.idade = data.idade();
        this.email = data.email();
    }

    public void UpdateRegister(UserUpdateData data) {
        if(data.nome() != null){
            this.nome = data.nome();
        }
        if(data.email() != null){
            this.email = data.email();
        }
        if(data.idade() != 0){
            this.idade = data.idade();
        }
    }

}
