package br.com.aston.cafeteria.astoncafeteria.services;

import br.com.aston.cafeteria.astoncafeteria.models.Client;
import br.com.aston.cafeteria.astoncafeteria.models.Order;
import br.com.aston.cafeteria.astoncafeteria.models.OrderItem;
import br.com.aston.cafeteria.astoncafeteria.models.Payment;
import br.com.aston.cafeteria.astoncafeteria.models.Product;
import br.com.aston.cafeteria.astoncafeteria.repository.ClientRepository;
import br.com.aston.cafeteria.astoncafeteria.repository.OrderItemRepository;
import br.com.aston.cafeteria.astoncafeteria.repository.OrderRepository;
import br.com.aston.cafeteria.astoncafeteria.repository.ProductRepository;
import br.com.aston.cafeteria.astoncafeteria.utils.Message;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class OrderService {

    private final ClientRepository clientRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;

    public OrderService(
            ClientRepository clientRepository,
            ProductRepository productRepository,
            OrderRepository orderRepository,
            OrderItemRepository orderItemRepository
    ) {
        this.clientRepository = clientRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }

    public Message save(Order order) {
        Client client = clientRepository.findById(order.getClient().getId())
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Order newOrder = new Order();

        Date date = new Date();
        newOrder.setClient(client);
        newOrder.setOrderDate(date);
        newOrder.setOrderItem(order.getOrderItem());
        newOrder.setSituation("Em andamento");
        newOrder.setConcluded(false);
        newOrder.setTransportMethod("padrão");
        newOrder.setShippingCompany("Correios");
        newOrder.setFreightValue(order.getFreightValue());

        List<OrderItem> orderItemList = new ArrayList<>();
        order.getOrderItem().forEach(item -> {
            Product product = productRepository.findById(item.getId())
                    .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(newOrder);
            orderItem.setProduct(product);
            orderItem.setQuantity(item.getQuantity());

            orderItemList.add(orderItem);
        });
        newOrder.setOrderItem(orderItemList);

        Payment payment = new Payment();
        payment.setClient(client);
        payment.setPaymentType(order.getPayment().getPaymentType());
        payment.setInstallments(order.getPayment().getInstallments());
        payment.setValue(order.getPayment().getValue());
        payment.setConcluded(false);
        payment.setPaymentDate(date);

        newOrder.setPayment(payment);
        payment.setOrder(newOrder);

        orderRepository.save(newOrder);

        Message message = new Message();
        message.setTitle("Sucesso!");
        message.setBody("Seu pedido foi concluído! Obrigado!");
        return message;
    }

    public List<Order> findOrdersByIdClient(Integer idClient) {
        List<Order> orders = orderRepository.findByClientId(idClient);
        orders.forEach(order -> {
            order.setClient(null);
        });

        return orders;
    }
}
