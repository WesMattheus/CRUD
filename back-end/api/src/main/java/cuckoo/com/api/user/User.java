package cuckoo.com.api.user;

import cuckoo.com.api.user.dto.UserRegisterData;
import cuckoo.com.api.user.dto.UserUpdateData;
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
    private float altura;
    private String cidade;
    private String rua;
    private String complemento;

    public User(UserRegisterData data){
        this.nome = data.nome();
        this.idade = data.idade();
        this.altura = data.altura();
        this.cidade = data.cidade();
        this.rua = data.rua();
        this.complemento = data.complemento();
    }

    public void UpdateRegister(UserUpdateData data) {
        if(data.nome() != null){
            this.nome = data.nome();
        }
        if(data.idade() != 0){
            this.idade = data.idade();
        }
        if(data.altura() != 0){
            this.altura = data.altura();
        }
        if(data.cidade() != null){
            this.cidade = data.cidade();
        }
        if(data.complemento() != null){
            this.complemento = data.complemento();
        }
    }

}
