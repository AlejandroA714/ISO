package com.milagros.adopciones.controller;

import com.milagros.adopciones.model.Mascota;
import com.milagros.adopciones.service.MascotaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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

    @PutMapping("/{id}")
    public ResponseEntity<Mascota> actualizar(@PathVariable Long id, @RequestBody Mascota mascota) {
        Mascota actualizada = mascotaService.actualizar(id, mascota);
        return ResponseEntity.ok(actualizada);
    }

    @GetMapping("/available")
    public List<Mascota> listarDisponibles() {
        return mascotaService.getDisponibles();
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
