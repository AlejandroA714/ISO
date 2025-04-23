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

    public List<Mascota> listar() {
        return mascotaRepository.findAll();
    }

    public Mascota guardar(Mascota mascota) {
        return mascotaRepository.save(mascota);
    }

    public Mascota obtenerPorId(Long id) {
        return mascotaRepository.findById(id).orElse(null);
    }

    public void eliminar(Long id) {
        mascotaRepository.deleteById(id);
    }
}
