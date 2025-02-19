package com.demo.orderPlanning.order.repository;

import com.demo.orderPlanning.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
