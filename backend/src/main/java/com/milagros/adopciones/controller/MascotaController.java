package com.milagros.adopciones.controller;

import com.milagros.adopciones.model.Mascota;
import com.milagros.adopciones.service.MascotaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/mascotas")
public class MascotaController {

    private final MascotaService mascotaService;

    public MascotaController(MascotaService mascotaService) {
        this.mascotaService = mascotaService;
    }

    @GetMapping
    public List<Mascota> listar() {
        return mascotaService.listar();
    }

    @PostMapping
    public Mascota crear(@RequestBody Mascota mascota) {
        return mascotaService.guardar(mascota);
    }

    @GetMapping("/{id}")
    public Mascota obtener(@PathVariable Long id) {
        return mascotaService.obtenerPorId(id);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        mascotaService.eliminar(id);
    }
}
