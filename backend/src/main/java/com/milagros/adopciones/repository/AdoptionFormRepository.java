package com.milagros.adopciones.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdoptionFormRepository extends JpaRepository<com.milagros.adopciones.model.AdoptionForm, Long> {
}
