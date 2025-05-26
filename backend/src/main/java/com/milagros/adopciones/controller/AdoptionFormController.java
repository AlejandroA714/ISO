package com.milagros.adopciones.controller;

import com.milagros.adopciones.model.AdoptionForm;
import com.milagros.adopciones.service.AdoptionFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/formularios")
public class AdoptionFormController {

    @Autowired
    private AdoptionFormService service;

    @PostMapping
    public AdoptionForm crear(@RequestBody AdoptionForm formulario) {
        return service.guardarFormulario(formulario);
    }

    @GetMapping
    public List<AdoptionForm> listar() {
        return service.obtenerTodos();
    }

    @DeleteMapping ("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteById(id);
    }
}
