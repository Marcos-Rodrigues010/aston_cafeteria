package br.com.aston.cafeteria.astoncafeteria.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity

@Table(schema = "public")
public class OrderItem {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="order_item_id_seq")
    @SequenceGenerator(name="order_item_id_seq", sequenceName="public.order_item_id_seq", allocationSize=1)
    private Integer id;

    @ManyToOne
    @JoinColumn(name="id_order", referencedColumnName="id")
    @JsonIgnore
    private Order order;

    @ManyToOne
    @JoinColumn(name="id_product", referencedColumnName="id")
    private Product product;

    @Column(name = "quantity")
    private Integer quantity;
}
