package com.demo.orderPlanning.order.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "order_company")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Buyer buyer;

    @ManyToOne
    private Supplier supplier;

    @OneToMany(mappedBy = "order")
    private List<Product> products;

    private double totalAmount;

}
