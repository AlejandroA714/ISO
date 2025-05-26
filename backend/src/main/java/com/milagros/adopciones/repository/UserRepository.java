package com.milagros.adopciones.repository;

import com.milagros.adopciones.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
