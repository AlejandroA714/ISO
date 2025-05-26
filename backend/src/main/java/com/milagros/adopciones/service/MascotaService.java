package com.milagros.adopciones.service;

import com.milagros.adopciones.model.Mascota;
import com.milagros.adopciones.repository.MascotaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MascotaService {

    private final MascotaRepository mascotaRepository;

    public MascotaService(MascotaRepository mascotaRepository) {
        this.mascotaRepository = mascotaRepository;
    }

    public List<Mascota> getDisponibles() {
        return mascotaRepository.findByEstado("disponible");
    }

    public Mascota obtenerPorId(Long id) {
        return mascotaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Mascota no encontrada"));
    }

    public List<Mascota> listar() {
        return mascotaRepository.findAll();
    }

    public Mascota guardar(Mascota mascota) {
        return mascotaRepository.save(mascota);
    }

    public void eliminar(Long id) {
        mascotaRepository.deleteById(id);
    }
}
