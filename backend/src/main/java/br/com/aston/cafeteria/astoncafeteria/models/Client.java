package br.com.aston.cafeteria.astoncafeteria.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity

@Table(schema = "public")
public class Client {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="client_id_seq")
    @SequenceGenerator(name="client_id_seq", sequenceName="public.client_id_seq", allocationSize=1)
    private Integer id;

    @Column(name="name")
    private String name;

    @Column(name="cpf")
    private String cpf;

    @Column(name="rg")
    private String rg;

    @Column(name="street")
    private String street;

    @Column(name="house_number")
    private String houseNumber;

    @Column(name="district")
    private String district;

    @Column(name="postcode")
    private String postcode;

    @Column(name="mobile_number")
    private String mobileNumber;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(schema = "public", name = "favorite_client",
            joinColumns = {@JoinColumn(name = "id_client")},
            inverseJoinColumns = {@JoinColumn(name = "id_product")})
    private List<Product> favorites;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(schema = "public", name = "cart_client",
            joinColumns = {@JoinColumn(name = "id_client")},
            inverseJoinColumns = {@JoinColumn(name = "id_product")})
    private List<Product> cart;
}
