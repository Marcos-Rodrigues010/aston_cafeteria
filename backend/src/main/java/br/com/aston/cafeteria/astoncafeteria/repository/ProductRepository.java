package br.com.aston.cafeteria.astoncafeteria.repository;

import br.com.aston.cafeteria.astoncafeteria.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
