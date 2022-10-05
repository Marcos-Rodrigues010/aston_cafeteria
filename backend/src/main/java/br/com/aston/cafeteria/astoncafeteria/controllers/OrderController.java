package br.com.aston.cafeteria.astoncafeteria.controllers;

import br.com.aston.cafeteria.astoncafeteria.models.Order;
import br.com.aston.cafeteria.astoncafeteria.services.OrderService;
import br.com.aston.cafeteria.astoncafeteria.utils.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/order")
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService){
        this.orderService = orderService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/save", produces = "application/json")
    public Message save(@RequestBody Order order) {
        return orderService.save(order);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/findOrdersByIdClient/{idClient}", produces = "application/json")
    public List<Order> findOrdersByIdClient(@PathVariable Integer idClient) {
        return orderService.findOrdersByIdClient(idClient);
    }
}
