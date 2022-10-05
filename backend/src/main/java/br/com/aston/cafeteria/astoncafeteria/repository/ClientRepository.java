package br.com.aston.cafeteria.astoncafeteria.repository;

import br.com.aston.cafeteria.astoncafeteria.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {
    Client findByEmailAndPassword(String email, String password);
}
