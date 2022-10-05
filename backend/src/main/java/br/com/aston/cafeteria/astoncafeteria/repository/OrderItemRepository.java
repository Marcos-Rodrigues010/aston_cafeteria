package br.com.aston.cafeteria.astoncafeteria.repository;

import br.com.aston.cafeteria.astoncafeteria.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
}
