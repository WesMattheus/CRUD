package cuckoo.com.api.user;

import java.util.UUID;

public record DataUserListing(UUID id, String name, String email, int age) {

    public DataUserListing(User user){
        this(user.getId(),user.getNome(),user.getEmail(), user.getIdade());
    }
}
