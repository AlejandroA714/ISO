package com.milagros.adopciones.service;

import com.milagros.adopciones.repository.AdoptionFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdoptionFormService {

    @Autowired
    private AdoptionFormRepository repository;

    public com.milagros.adopciones.model.AdoptionForm guardarFormulario(com.milagros.adopciones.model.AdoptionForm formulario) {
        return repository.save(formulario);
    }

    public List<com.milagros.adopciones.model.AdoptionForm> obtenerTodos() {
        return repository.findAll();
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

}
