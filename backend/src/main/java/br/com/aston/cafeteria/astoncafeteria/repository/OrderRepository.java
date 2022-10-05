package br.com.aston.cafeteria.astoncafeteria.repository;

import br.com.aston.cafeteria.astoncafeteria.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByClientId(@Param("idClient") Integer idClient);
}
