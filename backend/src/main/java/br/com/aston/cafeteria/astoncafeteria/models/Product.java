package br.com.aston.cafeteria.astoncafeteria.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(schema = "public")
public class Product {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="product_id_seq")
    @SequenceGenerator(name="product_id_seq", sequenceName="public.product_id_seq", allocationSize=1)
    private Integer id;

    @Column(name="name")
    private String name;

    @Column(name="price")
    private Double price;

    @Column(name="description")
    private String description;

    @Column(name="dimensions")
    private String dimensions;

    @Column(name="weight")
    private Double weight;

    @Column(name="name_image")
    private String nameImage;
}
