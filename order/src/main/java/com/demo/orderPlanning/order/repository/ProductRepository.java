package com.demo.orderPlanning.order.repository;

import com.demo.orderPlanning.order.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
