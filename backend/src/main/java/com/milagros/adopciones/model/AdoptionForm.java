package com.milagros.adopciones.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "adoption_forms")
public class AdoptionForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;

    @Column(name = "pet_id")
    private Long idMascota;

    @ManyToOne
    @JoinColumn(name = "pet_id", insertable = false, updatable = false)
    private Mascota mascota;

    private String message;

    private LocalDateTime created_at;

    public AdoptionForm() {
        this.created_at = LocalDateTime.now();
    }
}
