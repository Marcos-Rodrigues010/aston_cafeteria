package br.com.aston.cafeteria.astoncafeteria.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity

@Table(schema = "public")
public class Order {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="order_id_seq")
    @SequenceGenerator(name="order_id_seq", sequenceName="public.order_id_seq", allocationSize=1)
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_payment", referencedColumnName="id")
    private Payment payment;

    @OneToOne
    @JoinColumn(name="id_client", referencedColumnName="id")
    private Client client;

    @Column(name="order_date")
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date orderDate;

    @OneToMany(mappedBy = "order", cascade=CascadeType.ALL)
    private List<OrderItem> orderItem;

    @Column(name="situation")
    private String situation;

    @Column(name="concluded")
    private Boolean concluded;

    @Column(name="transport_method")
    private String transportMethod;

    @Column(name="shipping_company")
    private String shippingCompany;

    @Column(name="freight_value")
    private Double freightValue;
}
