package br.com.aston.cafeteria.astoncafeteria.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity

@Table(schema = "public")
public class Payment {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="payment_id_seq")
    @SequenceGenerator(name="payment_id_seq", sequenceName="public.payment_id_seq", allocationSize=1)
    private Integer id;

    @OneToOne
    @JoinColumn(name="id_order", referencedColumnName="id")
    @JsonIgnore
    private Order order;

    @OneToOne
    @JoinColumn(name="id_client", referencedColumnName="id")
    @JsonIgnore
    private Client client;

    @Column(name="payment_type")
    private String paymentType;

    @Column(name="installments")
    private Integer installments;

    @Column(name="value")
    private Double value;

    @Column(name="concluded")
    private Boolean concluded;

    @Column(name="payment_date")
    private Date paymentDate;

}
