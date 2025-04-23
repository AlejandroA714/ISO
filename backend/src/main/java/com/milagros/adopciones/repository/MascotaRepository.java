package com.milagros.adopciones.repository;

import com.milagros.adopciones.model.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MascotaRepository extends JpaRepository<Mascota, Long> {
}
